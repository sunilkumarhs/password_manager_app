import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FaUserAstronaut,
  FaUserSecret,
  FaUserNinja,
  FaUserShield,
} from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { useContext, useState } from "react";
import GlobalContext from "@/contexts/GlobalContext";
import { profileAvtar } from "@/utils/mainConstants";
import UserInfoEditing from "./UserInfoEditing";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MainNavBar from "../navigation/MainNavBar";
import { toast } from "@/components/ui/use-toast";
import { api } from "@/restApi/scurePass";
import { decryptData } from "@/utils/securingData";

const Settings = () => {
  const { user, setUser, accessToken } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleAvtar = async (index) => {
    const formData = {
      avtarIndex: index,
    };
    try {
      const token = decryptData(accessToken);
      const response = await api.post("/securepass_server/setAvtar", {
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });
      const resData = response.data;
      if (response.status === 201) {
        setOpen1(false);
        const newUserData = user;
        newUserData.avtarIndex = index;
        setUser(newUserData);
        toast({
          title: resData.message,
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
              <p>Your Avtar is reseted successfully!</p>
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
    <div className="w-full">
      <div className="fixed w-full bg-white dark:bg-card z-10">
        <MainNavBar />
      </div>
      <Card className="w-full h-screen border-none shadow-none">
        <CardHeader className="w-full pt-20 px-10 max-sm:px-5 max-sm:pb-2">
          <CardTitle className="text-3xl max-sm:text-2xl font-bold text-orange-600">
            Settings
          </CardTitle>
          <CardDescription>
            Manage your account settings and set e-mail preferences.
          </CardDescription>
          <div className="py-2 max-sm:py-0"></div>
          <hr />
        </CardHeader>
        <Tabs
          defaultValue="account"
          className="w-full flex max-sm:flex-col px-10 max-sm:px-5"
        >
          <TabsList className="flex flex-col max-sm:flex-row w-[15%] max-sm:w-full h-full rounded-none bg-transparent">
            <TabsTrigger
              value="general"
              className="data-[state=active]:bg-muted data-[state=active]:text-orange-600 w-full p-1"
            >
              <p className="text-lg hover:underline pb-1">General</p>
            </TabsTrigger>
            <div className="py-0"></div>
            <TabsTrigger
              value="account"
              className="data-[state=active]:bg-muted data-[state=active]:text-orange-600 w-full p-1"
            >
              <p className="text-lg hover:underline pb-1">Account</p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="m-0 w-[85%]">
            <Card className="rounded-none w-full border-none shadow-none">
              <CardHeader className="py-1">
                <CardTitle className="text-xl font-bold text-orange-600">
                  General Setting
                </CardTitle>
                <CardDescription>Upcomming Feature!!.</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="account" className="m-0 w-[85%]">
            <Card className="rounded-none w-full border-none shadow-none">
              <CardHeader className="py-1">
                <CardTitle className="text-xl font-bold text-orange-600">
                  Your Account Info
                </CardTitle>
                <CardDescription>
                  Currently has only email and profile logo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 py-5">
                <div className="space-y-3">
                  <p className="font-semibold">Logo / Avtar</p>
                  <div className="relative">
                    <div className="text-8xl">
                      {profileAvtar[user?.avtarIndex]?.avtar}
                    </div>
                    <Popover open={open1} onOpenChange={setOpen1}>
                      <PopoverTrigger>
                        <FaUserEdit className="absolute text-2xl rounded-full top-16 left-16 bg-white p-[0.1rem] hover:cursor-pointer hover:text-orange-600 text-black" />
                      </PopoverTrigger>
                      <PopoverContent className="w-80 -mt-4 ml-52">
                        <div className="flex text-6xl">
                          <FaUserSecret
                            className="hover:text-orange-600 p-1 border rounded-full"
                            onClick={() => handleAvtar(0)}
                          />
                          <div className="px-2"></div>
                          <FaUserAstronaut
                            className="hover:text-orange-600 p-1 border rounded-full"
                            onClick={() => handleAvtar(1)}
                          />
                          <div className="px-2"></div>
                          <FaUserShield
                            className="hover:text-orange-600 p-1 border rounded-full"
                            onClick={() => handleAvtar(2)}
                          />
                          <div className="px-2"></div>
                          <FaUserNinja
                            className="hover:text-orange-600 p-1 border rounded-full"
                            onClick={() => handleAvtar(3)}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username" className="text-base font-semibold">
                    Email
                  </Label>
                  <Input
                    id="username"
                    defaultValue={user?.email}
                    readOnly
                    disabled={true}
                    className="w-1/2"
                  />
                </div>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger className="" asChild>
                    <Button variant="outline" className="hover:text-orange-600">
                      Change Password
                    </Button>
                  </DialogTrigger>
                  <UserInfoEditing setOpen={setOpen} setUser={setUser} />
                </Dialog>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Settings;
