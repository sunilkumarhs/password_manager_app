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
import bankImage from "@/assets/bankImage1.png";
import { useContext, useState } from "react";
import GlobalContext from "@/contexts/GlobalContext";
import { decFetchedData, decryptData } from "@/utils/securingData";
import { api } from "@/restApi/scurePass";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddBankData from "../inputSection/AddBankData";
import ViewBanks from "./ViewBanks";

const TableView = () => {
  const { banksData, userId, accessToken, setBanksData } =
    useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const handleDelete = async (bankId) => {
    const token = decryptData(accessToken);
    try {
      const response = await api.delete(
        "/secure_passBanks/deleteBank/" + bankId,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const resData = response.data;
      console.log(resData);
      if (response.status === 200) {
        const updatedBanks = banksData.filter((bank) => bank._id !== bankId);
        setBanksData(updatedBanks);
        toast({
          title: resData.message,
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
              <p>Your Bank with credentials has been deleted successfully!</p>
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
          <TableHead className="hidden sm:table-cell">Bankname</TableHead>
          <TableHead className="hidden md:table-cell">AccountNumber</TableHead>
          <TableHead className="hidden md:table-cell">AccountType</TableHead>
          <TableHead className="hidden md:table-cell">IFSCCode</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {banksData?.map((bank) => (
          <TableRow key={bank?._id}>
            <TableCell className=" ">
              <img src={bankImage} alt="bankImage" />
            </TableCell>
            <TableCell className=" font-medium max-sm:text-xs">
              {bank?.name}
            </TableCell>
            <TableCell className="hidden sm:table-cell max-sm:text-xs">
              {decFetchedData(bank?.bankName, userId)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {decFetchedData(bank?.accNumber, userId)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {decFetchedData(bank?.accType, userId)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {decFetchedData(bank?.ifscCode, userId)}
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
                    <ViewBanks bankData={bank} />
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
                    <AddBankData bankData={bank} setOpen={setOpen} />
                  </Dialog>
                  <DropdownMenuItem onClick={() => handleDelete(bank._id)}>
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
