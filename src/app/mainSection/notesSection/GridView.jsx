import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdShare, MdDeleteForever } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FcDocument } from "react-icons/fc";
import GlobalContext from "@/contexts/GlobalContext";
import { decFetchedData, decryptData } from "@/utils/securingData";
import { api } from "@/restApi/scurePass";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import AddNotes from "../inputSection/AddNotes";
import ViewNotes from "./ViewNote";

const GridView = () => {
  const { notes, userId, accessToken, setNotes } = useContext(GlobalContext);
  const [hover, setHover] = useState({ hovered: false, index: null });
  const [open, setOpen] = useState(false);
  const [ind, setInd] = useState(null);
  // {console.log(window.innerWidth)}

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
    <div className="grid gap-x-10 grid-cols-2 gap-y-5 xl:grid-cols-5 sm:grid-cols-3 md:grid-cols-4">
      {notes?.map((note, index) => (
        <Card
          className={`shadow-xl`}
          onMouseOver={() => setHover({ hovered: index })}
          onMouseLeave={() => setHover({ hovered: null })}
          key={note._id}
        >
          <CardHeader className="p-2 items-center relative">
            <FcDocument className="text-7xl" />
            {hover.hovered === index && (
              <CardHeader className="bg-opacity-90 bg-zinc-700 -top-[0.35rem] -mt-2 rounded-t-xl w-full h-full absolute">
                <Dialog>
                  <DialogTrigger className="" asChild>
                    <Button
                      variant="secondary"
                      className="hover:bg-orange-600"
                      onSelect={(e) => e.preventDefault()}
                    >
                      Open
                    </Button>
                  </DialogTrigger>
                  <ViewNotes noteData={note} />
                </Dialog>
              </CardHeader>
            )}
          </CardHeader>
          <div className="bg-slate-600 rounded-b-xl p-2">
            <div
              className={`flex ${
                hover.index === index ? "justify-around" : "justify-center"
              }`}
            >
              <div className="truncate">
                <p className="text-sm font-bold text-white truncate">
                  {" "}
                  {decFetchedData(note?.name, userId)}
                </p>
              </div>
              {hover.hovered === index && (
                <div className="flex text-xl cursor-pointer text-orange-600 items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <FaEdit
                          className="mx-2"
                          onClick={() => {
                            setOpen(true);
                            setInd(index);
                          }}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Edit</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <MdShare className="mr-2" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Share</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger onClick={() => handleDelete(note._id)}>
                        <MdDeleteForever />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
            </div>
          </div>
          <Dialog open={ind === index && open} onOpenChange={setOpen}>
            <AddNotes noteData={note} setOpen={setOpen} />
          </Dialog>
        </Card>
      ))}
    </div>
  );
};

export default GridView;
