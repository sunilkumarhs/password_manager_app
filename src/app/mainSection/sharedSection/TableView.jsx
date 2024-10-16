import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const TableView = () => {
  const repeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Table className="relative">
      <TableHeader>
        <TableRow>
          <TableHead>
            <span className="sr-only">Logo</span>
          </TableHead>
          <TableHead className="">Name</TableHead>
          <TableHead className="hidden sm:table-cell">Username</TableHead>
          <TableHead className="">Status</TableHead>
          <TableHead className="hidden md:table-cell">SharedWith</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {repeat.map((r) => (
          <TableRow key={r}>
            <TableCell className=" ">
              <FcGoogle className="text-4xl" />
            </TableCell>
            <TableCell className=" font-medium max-sm:text-xs">
              Laser Lemonade Machine
            </TableCell>
            <TableCell className="hidden sm:table-cell max-sm:text-xs">
              bsfjbajfwfedd
            </TableCell>
            <TableCell className="">
              <Badge className="bg-orange-600">Pending..</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              jdkijakneni232jjwdofe
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
                  <DropdownMenuItem>View</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
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
