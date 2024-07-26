/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ReloadIcon } from "@radix-ui/react-icons";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { emailRegex } from "@/utils/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { api } from "@/restApi/scurePass";
import { encryptData } from "@/utils/securingData";
import { useContext, useEffect } from "react";
import GlobalContext from "@/contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUserEdit } from "react-icons/fa";
import progessValidate from "@/utils/progressValidate";
import { ChangePassFormSchema } from "@/utils/formSchema";
import { Progress } from "@/components/ui/progress";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { decryptData } from "@/utils/securingData";
import {
  FaUserAstronaut,
  FaUserSecret,
  FaUserNinja,
  FaUserShield,
} from "react-icons/fa6";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { profileAvtar } from "@/utils/mainConstants";

const FormSchema = z.object({
  email: z.string().regex(emailRegex, {
    message: "Invalid email address",
  }),
});

const UserInfoEditing = ({ setOpen }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { accessToken, user, setAccessToken, setIsAuth, setUserId } =
    useContext(GlobalContext);
  const [toggle1, setToggle1] = useState(false);
  const [disable, setDisable] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pass, setPass] = useState("");
  const form1 = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: user?.email },
  });
  const form2 = useForm({
    resolver: zodResolver(ChangePassFormSchema),
    defaultValues: { password: "", newPassword: "" },
  });

  useEffect(() => {
    setProgress(progessValidate(pass));
  }, [pass]);

  const onSubmit1 = async () => {
    setDisable(true);
    const formData = {};
    try {
      const response = await api.post("/securepass_server/", {
        headers: { "Content-Type": "application/json" },
        body: formData,
      });
      const resData = response.data;
      if (response.status === 201) {
        const encToken = encryptData(resData.otpToken);
        localStorage.setItem("otpToken", encToken);
        toast({
          title: resData.message,
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
              <p>Your email and master-password is verfied successfully!</p>
              <p className="text-bold">
                Enter the verification code send to email-address.
              </p>
              <p className="text-bold">To complete the 2-step-authentication</p>
            </div>
          ),
        });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("expiryDate");
        setOpen(false);
        setIsAuth(false);
        setAccessToken(null);
        setUserId(null);
        navigate("/");
      }
    } catch (err) {
      const errorStatus = err.response.status;
      const errMessage = err.response.data.message;
      const errMessage1 = err.response.data.error;
      setDisable(false);
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
  const onSubmit2 = async (data) => {
    setDisable(true);
    const formData = {
      password: data.password,
      newPassword: data.newPassword,
    };
    try {
      const token = decryptData(accessToken);
      const response = await api.post("/securepass_server/passReset", {
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });
      const resData = response.data;
      if (response.status === 201) {
        toast({
          title: resData.message,
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
              <p>Your master-password is reseted successfully!</p>
              <p className="text-bold">
                Please signIn with your master password.
              </p>
            </div>
          ),
        });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("expiryDate");
        setOpen(false);
        setIsAuth(false);
        setAccessToken(null);
        setUserId(null);
        navigate("/");
      }
    } catch (err) {
      const errorStatus = err.response.status;
      const errMessage = err.response.data.message;
      const errMessage1 = err.response.data.error;
      setDisable(false);
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
    <DialogContent className=" border-none shadow-none">
      <DialogHeader className="py-0 px-0">
        <DialogTitle></DialogTitle>
      </DialogHeader>
      <Tabs defaultValue="password" className="w-[400px] max-sm:w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when its done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="relative">
                <div className="text-8xl">{profileAvtar[0].avtar}</div>
                <Popover>
                  <PopoverTrigger>
                    <FaUserEdit className="absolute text-2xl rounded-full top-16 left-16 bg-white p-[0.1rem] hover:cursor-pointer hover:text-orange-600 text-black" />
                  </PopoverTrigger>
                  <PopoverContent className="w-80 -mt-4 ml-52">
                    <div className="flex text-6xl">
                      <FaUserSecret className="hover:text-orange-600 p-1 border rounded-full" />
                      <div className="px-2"></div>
                      <FaUserAstronaut className="hover:text-orange-600 p-1 border rounded-full" />
                      <div className="px-2"></div>
                      <FaUserShield className="hover:text-orange-600 p-1 border rounded-full" />
                      <div className="px-2"></div>
                      <FaUserNinja className="hover:text-orange-600 p-1 border rounded-full" />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <Form {...form1}>
                <form
                  onSubmit={form1.handleSubmit(onSubmit1)}
                  className="w-full space-y-6 border-2 rounded-md p-4"
                >
                  <FormField
                    control={form1.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-orange-600 text-xl">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            disabled={true}
                            id="email"
                            type="email"
                            className="col-span-3"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <Button
                    disabled={true}
                    type="submit"
                    variant="outline"
                    className="text-orange-600 border-orange-600"
                  >
                    {disable ? (
                      <>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        Saving Changes Please Wait!
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you will be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Form {...form2}>
                <form
                  onSubmit={form2.handleSubmit(onSubmit2)}
                  className="w-full space-y-6 border-2 rounded-md p-4"
                >
                  <FormField
                    control={form2.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-orange-600 text-xl">
                          Current Password
                        </FormLabel>
                        <FormControl>
                          <div className="flex">
                            <Input
                              disabled={disable}
                              type={toggle1 ? "text" : "password"}
                              placeholder=" Current Master-Password"
                              {...field}
                            />
                            <span
                              className="flex justify-center mt-2"
                              onClick={() => setToggle1(!toggle1)}
                            >
                              {toggle1 ? (
                                <FaEye className="absolute text-xl mr-10 cursor-pointer" />
                              ) : (
                                <FaEyeSlash className="absolute text-xl mr-10 cursor-pointer" />
                              )}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form2.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-orange-600 text-xl">
                          New Password
                        </FormLabel>
                        <FormControl>
                          <div>
                            <div className="flex">
                              <Input
                                disabled={disable}
                                type={toggle1 ? "text" : "password"}
                                placeholder="New Master-Password"
                                onInput={(e) => setPass(e.target.value)}
                                {...field}
                              />
                              <span
                                className="flex justify-center mt-2"
                                onClick={() => {
                                  setToggle1(!toggle1);
                                }}
                              >
                                {toggle1 ? (
                                  <FaEye className="absolute text-xl mr-10 cursor-pointer" />
                                ) : (
                                  <FaEyeSlash className="absolute text-xl mr-10 cursor-pointer" />
                                )}
                              </span>
                            </div>
                            <div className="flex items-center pt-3">
                              <Progress value={progress} className="w-[100%]" />
                              <p className="text-sm px-1 -mt-1">Strength</p>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <Button
                    disabled={disable}
                    type="submit"
                    variant="outline"
                    className="text-orange-600 border-orange-600"
                  >
                    {disable ? (
                      <>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        Saving password Please Wait!
                      </>
                    ) : (
                      "Save password"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
};

export default UserInfoEditing;
