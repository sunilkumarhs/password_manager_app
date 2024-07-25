import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import GlobalContext from "@/contexts/GlobalContext";
import { decFetchedData } from "@/utils/securingData";
import AddPasswords from "../inputSection/AddPasswords";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { decryptData } from "@/utils/securingData";
import { api } from "@/restApi/scurePass";
import { toast } from "@/components/ui/use-toast";
import ViewingPassword from "./ViewingPassword";

const TableView = () => {
  const { passwords, userId, accessToken, setPasswords } =
    useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState({ i: null, s: false });
  const handleDelete = async (passId) => {
    const token = decryptData(accessToken);
    try {
      const response = await api.delete("/secure_pass/deleteSite/" + passId, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const resData = response.data;
      console.log(resData);
      if (response.status === 200) {
        const updatedPass = passwords.filter((pass) => pass._id !== passId);
        setPasswords(updatedPass);
        toast({
          title: resData.message,
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
              <p>Your Site with credentials has been deleted successfully!</p>
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
          <TableHead className="hidden sm:table-cell">Username</TableHead>
          <TableHead className="hidden md:table-cell">Password</TableHead>
          <TableHead className="hidden md:table-cell">Created at</TableHead>
          <TableHead className="hidden md:table-cell">Last Updated</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {passwords?.map((pass, index) => (
          <TableRow key={pass._id}>
            <TableCell className=" ">
              <FcGoogle className="text-4xl" />
            </TableCell>
            <TableCell className=" font-medium max-sm:text-xs">
              {pass?.name}
            </TableCell>
            <TableCell className="hidden sm:table-cell max-sm:text-xs">
              {decFetchedData(pass?.username, userId)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <div className="flex">
                {showPassword.i === index && showPassword.s === true
                  ? decFetchedData(pass?.password, userId)
                  : decFetchedData(pass?.password, userId).replace(/./g, "*")}
                <div className="px-1"></div>
                {showPassword.i === index && showPassword.s === true ? (
                  <FaEye
                    className="text-xl cursor-pointer"
                    onClick={() => setShowPassword({ i: null, s: false })}
                  />
                ) : (
                  <FaEyeSlash
                    className="text-xl cursor-pointer"
                    onClick={() => setShowPassword({ i: index, s: true })}
                  />
                )}
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {new Date(pass?.createdAt).toLocaleDateString("en-in")}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {pass.updatedAt
                ? new Date(pass.updatedAt).toLocaleDateString("en-in")
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
                    <ViewingPassword passData={pass} />
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
                    <AddPasswords passData={pass} setOpen={setOpen} />
                  </Dialog>
                  <DropdownMenuItem onClick={() => handleDelete(pass._id)}>
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
