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
import cardImage from "@/assets/cardImage1.png";
import { useContext, useState } from "react";
import GlobalContext from "@/contexts/GlobalContext";
import { decFetchedData, decryptData } from "@/utils/securingData";
import { api } from "@/restApi/scurePass";
import { toast } from "@/components/ui/use-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AddCards from "../inputSection/AddCards";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ViewCards from "./ViewCards";

const TableView = () => {
  const { payCards, userId, accessToken, setPayCards } =
    useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [showCVV, setShowCVV] = useState({ i: null, s: false });
  const handleDelete = async (cardId) => {
    const token = decryptData(accessToken);
    try {
      const response = await api.delete(
        "/secure_passCards/deleteCard/" + cardId,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const resData = response.data;
      console.log(resData);
      if (response.status === 200) {
        const updatedCards = payCards.filter((card) => card._id !== cardId);
        setPayCards(updatedCards);
        toast({
          title: resData.message,
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
              <p>Your Card with credentials has been deleted successfully!</p>
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
          <TableHead className="hidden sm:table-cell">NameInCard</TableHead>
          <TableHead className="hidden md:table-cell">CardNumber</TableHead>
          <TableHead className="hidden md:table-cell">ExpiryDate</TableHead>
          <TableHead className="hidden md:table-cell">CVVCode</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payCards?.map((card, index) => (
          <TableRow key={card._id}>
            <TableCell className=" ">
              <img src={cardImage} alt="cardImage" />
            </TableCell>
            <TableCell className=" font-medium max-sm:text-xs">
              {card?.name}
            </TableCell>
            <TableCell className="hidden sm:table-cell max-sm:text-xs">
              {decFetchedData(card?.cardName, userId)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {decFetchedData(card?.cardNumber, userId)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {decFetchedData(card?.endDate, userId)}
              {decFetchedData(card?.endYear, userId)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <div className="flex    ">
                {showCVV.i === index && showCVV.s === true
                  ? decFetchedData(card?.cvvCode, userId)
                  : decFetchedData(card?.cvvCode, userId)?.replace(/./g, "*")}
                <div className="px-1"></div>
                {showCVV.i === index && showCVV.s === true ? (
                  <FaEye
                    className="text-xl cursor-pointer"
                    onClick={() => setShowCVV({ i: null, s: false })}
                  />
                ) : (
                  <FaEyeSlash
                    className="text-xl cursor-pointer"
                    onClick={() => setShowCVV({ i: index, s: true })}
                  />
                )}
              </div>
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
                    <ViewCards cardData={card} />
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
                    <AddCards cardData={card} setOpen={setOpen} />
                  </Dialog>
                  <DropdownMenuItem onClick={() => handleDelete(card._id)}>
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
