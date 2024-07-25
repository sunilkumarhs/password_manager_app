import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FcDocument } from "react-icons/fc";
import { useContext, useState } from "react";
import GlobalContext from "@/contexts/GlobalContext";
import { decFetchedData, decryptData } from "@/utils/securingData";
import { api } from "@/restApi/scurePass";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddNotes from "../inputSection/AddNotes";
import ViewNotes from "./ViewNote";

const TableView = () => {
  const { notes, userId, accessToken, setNotes } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const handleDelete = async (noteId) => {
    const token = decryptData(accessToken);
    try {
      const response = await api.delete(
        "/secure_passNotes/deleteNote/" + noteId,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const resData = response.data;
      console.log(resData);
      if (response.status === 200) {
        const updatedNotes = notes.filter((note) => note._id !== noteId);
        setNotes(updatedNotes);
        toast({
          title: resData.message,
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
              <p>Your Note with credentials has been deleted successfully!</p>
            </div>
          ),
        });
      }
    } catch (err) {
      const errorStatus = err.response.status;
      const errMessage = err.response.data.message;
      const errMessage1 = err.response.data.error;
      toast({
        title: "ErrorCode:" + errorStatus,
        description: (
          <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
            <p>{errMessage || errMessage1}</p>
          </div>
        ),
      });
    }
  };
  return (
    <Table className="relative">
      <TableHeader>
        <TableRow>
          <TableHead>
            <span className="sr-only">Logo</span>
          </TableHead>
          <TableHead className="">Name</TableHead>
          <TableHead className="hidden md:table-cell">Created at</TableHead>
          <TableHead className="hidden md:table-cell">Last Updated</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {notes?.map((note) => (
          <TableRow key={note._id}>
            <TableCell className=" ">
              <FcDocument className="text-4xl" />
            </TableCell>
            <TableCell className=" font-medium max-sm:text-xs">
              {decFetchedData(note?.name, userId)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {new Date(note?.createdAt).toLocaleDateString("en-in")}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {note.updatedAt
                ? new Date(note.updatedAt).toLocaleDateString("en-in")
                : ""}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="text-xl" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <Dialog>
                    <DialogTrigger
                      className="w-full h-full items-start flex justify-start"
                      asChild
                    >
                      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        View
                      </DropdownMenuItem>
                    </DialogTrigger>
                    <ViewNotes noteData={note} />
                  </Dialog>
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger
                      className="w-full h-full items-start flex justify-start"
                      asChild
                    >
                      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        Edit
                      </DropdownMenuItem>
                    </DialogTrigger>
                    <AddNotes noteData={note} setOpen={setOpen} />
                  </Dialog>
                  <DropdownMenuItem onClick={() => handleDelete(note._id)}>
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableView;
