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
import { HiViewGrid } from "react-icons/hi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableView from "./TableView";
import GridView from "./GridView";
import { PiFolderUserLight } from "react-icons/pi";
import { FaShareFromSquare } from "react-icons/fa6";
import { BiSolidShare } from "react-icons/bi";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const SharedPage = () => {
  const repeat = [
    {
      value: "manage",
      title: "Manage Shared Folders",
      description: "Manage your SharedFolders and view them.",
    },
    {
      value: "others",
      title: "Shared With Others",
      description: "Manage your SharedFolders and view them.",
    },
    {
      value: "me",
      title: "Shared With Me",
      description: "Manage your SharedFolders and view them.",
    },
  ];
  return (
    <div>
      <div>
        <MainNavBar />
      </div>
      <div className="py-2 max-sm:py-0">
        <main className="grid flex-1 items-start gap-4 p-4 max-sm:p-2 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="manage">
            <div className="flex items-center py-1">
              <TabsList className="">
                <TabsTrigger value="manage">
                  <p className="max-sm:hidden block">ManageSharedFoders</p>
                  <div className="pl-1"></div>
                  <PiFolderUserLight className="text-xl text-orange-600" />
                </TabsTrigger>
                <TabsTrigger value="others">
                  <p className="max-sm:hidden block">SharedWithOthers</p>
                  <div className="pl-1"></div>
                  <FaShareFromSquare className="text-xl text-orange-600" />
                </TabsTrigger>
                <TabsTrigger value="me">
                  <p className="max-sm:hidden block">SharedWithMe</p>
                  <div className="pl-1"></div>
                  <BiSolidShare className="text-xl  text-orange-600" />
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
                <Dialog>
                  <DialogTrigger className="flex items-center border gap-1 h-7 text-sm px-2 rounded-md bg-orange-600 text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Share
                    </span>
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>
            {repeat.map((tab, index) => (
              <TabsContent value={tab.value} key={index}>
                <Card x-chunk="dashboard-06-chunk-0">
                  <Tabs defaultValue="list">
                    <div className="flex justify-between items-center p-5">
                      <CardHeader className="p-0">
                        <CardTitle className="text-orange-600 font-bold">
                          {tab.title}
                        </CardTitle>
                        <CardDescription>{tab.description}</CardDescription>
                      </CardHeader>
                      <TabsList>
                        <TabsTrigger value="list">
                          <List className="text-2xl text-orange-600" />
                        </TabsTrigger>
                        <TabsTrigger value="grid">
                          <HiViewGrid className="text-2xl text-orange-600" />
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    <CardContent className="lg:h-[60vh] md:h-[77vh] max-sm:h-[65vh]  overflow-y-scroll no-scrollbar">
                      <TabsContent value="list">
                        <TableView />
                      </TabsContent>
                      <TabsContent value="grid">
                        <GridView />
                      </TabsContent>
                    </CardContent>
                  </Tabs>
                </Card>
              </TabsContent>
            ))}
            {/* <TabsContent value="others">
              <Card x-chunk="dashboard-06-chunk-0">
                <Tabs defaultValue="list">
                  <div className="flex justify-between items-center p-5">
                    <CardHeader className="p-0">
                      <CardTitle>Shared With Others</CardTitle>
                      <CardDescription>
                        Manage your SharedFolders and view them.
                      </CardDescription>
                    </CardHeader>
                    <TabsList>
                      <TabsTrigger value="list">
                        <List className="text-2xl active:text-orange-600" />
                      </TabsTrigger>
                      <TabsTrigger value="grid">
                        <HiViewGrid className="text-2xl active:text-orange-600" />
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <CardContent className="lg:h-[60vh] md:h-[77vh] max-sm:h-[65vh]  overflow-y-scroll no-scrollbar">
                    <TabsContent value="list">
                      <TableView />
                    </TabsContent>
                    <TabsContent value="grid">
                      <GridView />
                    </TabsContent>
                  </CardContent>
                </Tabs>
              </Card>
            </TabsContent>
            <TabsContent value="me">
              <Card x-chunk="dashboard-06-chunk-0">
                <Tabs defaultValue="list">
                  <div className="flex justify-between items-center p-5">
                    <CardHeader className="p-0">
                      <CardTitle>Shared With Me</CardTitle>
                      <CardDescription>
                        Manage your SharedFolders and view them.
                      </CardDescription>
                    </CardHeader>
                    <TabsList>
                      <TabsTrigger value="list">
                        <List className="text-2xl active:text-orange-600" />
                      </TabsTrigger>
                      <TabsTrigger value="grid">
                        <HiViewGrid className="text-2xl active:text-orange-600" />
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <CardContent className="lg:h-[60vh] md:h-[77vh] max-sm:h-[65vh]  overflow-y-scroll no-scrollbar">
                    <TabsContent value="list">
                      <TableView />
                    </TabsContent>
                    <TabsContent value="grid">
                      <GridView />
                    </TabsContent>
                  </CardContent>
                </Tabs>
              </Card>
            </TabsContent> */}
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default SharedPage;
