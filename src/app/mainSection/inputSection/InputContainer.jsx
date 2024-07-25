import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TbPasswordUser } from "react-icons/tb";
import { MdNote } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import AddPasswords from "./AddPasswords";
import AddNotes from "./AddNotes";
import AddCards from "./AddCards";
import AddBankData from "./AddBankData";
import { useState } from "react";

const InputContainer = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
  return (
    <DialogContent className="max-w-3xl max-sm:w-11/12">
      <DialogHeader className="mt-5 py-3 bg-orange-600 px-2">
        <DialogTitle className="flex justify-between">
          <p className="font-bold text-xl px-2 text-white">Add Item</p>
        </DialogTitle>
      </DialogHeader>
      <div className="p-4 flex justify-around flex-wrap">
        <Dialog open={index === 0 && open} onOpenChange={setOpen}>
          <DialogTrigger className=" max-sm:w-[40%] w-1/5 hover:shadow-xl border rounded-md flex flex-col  items-center justify-center px-2 mx-2 my-2 py-1 hover:text-orange-600">
            <TbPasswordUser
              className="text-5xl text-zinc-500"
              onClick={() => setIndex(0)}
            />
            <p className="font-semibold text-orange-600">PASSWORD</p>
          </DialogTrigger>
          <AddPasswords setOpen={setOpen} />
        </Dialog>
        <Dialog open={index === 1 && open} onOpenChange={setOpen}>
          <DialogTrigger className="w-1/5 max-sm:w-[40%] hover:shadow-xl border rounded-md flex flex-col  items-center justify-center px-4 mx-2 my-2 py-2 hover:text-orange-600">
            <MdNote
              className="text-5xl text-zinc-500"
              onClick={() => setIndex(1)}
            />
            <p className="font-semibold text-orange-600">SECURE NOTE</p>
          </DialogTrigger>
          <AddNotes setOpen={setOpen} />
        </Dialog>
        <Dialog open={index === 2 && open} onOpenChange={setOpen}>
          <DialogTrigger className="w-1/5 max-sm:w-[40%] hover:shadow-xl border rounded-md flex flex-col  items-center justify-center px-4 mx-2 my-2 py-1 hover:text-orange-600">
            <FaCreditCard
              className="text-5xl text-zinc-500"
              onClick={() => setIndex(2)}
            />
            <p className="font-semibold text-orange-600">PAYMENT CARD</p>
          </DialogTrigger>
          <AddCards setOpen={setOpen} />
        </Dialog>
        <Dialog open={index === 3 && open} onOpenChange={setOpen}>
          <DialogTrigger className="w-1/5 max-sm:w-[40%] hover:shadow-xl border rounded-md flex flex-col  items-center justify-center px-4 mx-2 my-2 py-1 hover:text-orange-600">
            <BsBank2
              className="text-5xl text-zinc-500"
              onClick={() => setIndex(3)}
            />
            <p className="font-semibold text-orange-600">BANK ACCOUNT</p>
          </DialogTrigger>
          <AddBankData setOpen={setOpen} />
        </Dialog>
      </div>
    </DialogContent>
  );
};

export default InputContainer;
