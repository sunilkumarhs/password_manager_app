import MainNavBar from "../../navigation/MainNavBar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { File, ListFilter, PlusCircle, List } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { HiViewGrid } from "react-icons/hi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddNotes from "../inputSection/AddNotes";
import TableView from "./TableView";
import GridView from "./GridView";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "@/contexts/GlobalContext";
import fetchNotes from "../../../hooks/fetchNotes";

const NotesPage = () => {
  const { setNotes, accessToken, notes } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!notes) {
      fetchNotes(accessToken, setNotes);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div>
        <MainNavBar />
      </div>
      <div className="py-2 max-sm:py-0">
        <main className="grid flex-1 items-start gap-4 p-4 max-sm:p-2 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="list">
            <div className="flex items-center py-1">
              <TabsList>
                <TabsTrigger value="list">
                  <List className="text-2xl text-orange-600" />
                </TabsTrigger>
                <TabsTrigger value="grid">
                  <HiViewGrid className="text-2xl text-orange-600" />
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-7 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Alphabet(A-Z)
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      CreatedDate
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Alphabet(Z-A)
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-7 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger className="flex items-center border gap-1 h-7 text-sm px-2 rounded-md bg-orange-600 text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Add
                    </span>
                  </DialogTrigger>
                  <AddNotes setOpen={setOpen} />
                </Dialog>
              </div>
            </div>
            <TabsContent value="list">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle className="text-orange-600 font-bold">
                    Notes
                  </CardTitle>
                  <CardDescription>
                    Manage your Notes and view them.
                  </CardDescription>
                </CardHeader>
                <CardContent className="lg:h-[60vh] md:h-[77vh] max-sm:h-[65vh]  overflow-y-scroll no-scrollbar">
                  <TableView />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="grid">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle className="text-orange-600 font-bold">
                    Notes
                  </CardTitle>
                  <CardDescription>
                    Manage your Notes and view them.
                  </CardDescription>
                </CardHeader>
                <CardContent className="lg:h-[60vh] md:h-[77vh] max-sm:h-[65vh]  overflow-y-scroll no-scrollbar">
                  <GridView />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default NotesPage;
