import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "../../assets/appLogo.png";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { emailRegex } from "@/utils/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { api } from "@/restApi/scurePass";
import { encryptData } from "@/utils/securingData";
import { useContext, useEffect } from "react";
import GlobalContext from "@/contexts/GlobalContext";
import VerifyMail from "../authentication/VerifyMail";

const FormSchema = z.object({
  email: z.string().regex(emailRegex, {
    message: "Invalid email address",
  }),
  password: z.string().min(5, {
    message: "Your password must be atleast 5 characters.",
  }),
});

const DefaultNavBar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const { isAuth } = useContext(GlobalContext);
  useEffect(() => {
    if (isAuth) {
      navigate("/dashBoard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data) => {
    setDisable(true);
    const formData = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await api.post("/securepass_server/login", {
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
        navigate("/verify");
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
    <div className="border-b-2 px-4 shadow-md flex justify-between items-center">
      <div className="flex">
        <Avatar className="h-16 w-16 bg-white" onClick={() => navigate("/")}>
          <AvatarImage src={logo} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center">
        <ModeToggle />
        <div className="px-2"></div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600"
            >
              SignIn
            </Button>
          </DialogTrigger>
          <DialogContent className="w-1/2 max-sm:w-11/12">
            <DialogHeader className="items-center">
              <DialogTitle className="text-orange-600 text-4xl font-bold">
                SignIn
              </DialogTitle>
              <DialogDescription>
                Enter your email and master-password below to login to your
                account
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6 border-2 rounded-md p-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-orange-600 text-xl">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={disable}
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
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-orange-600 text-xl">
                        Master-Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={disable}
                          id="password"
                          type="password"
                          className="col-span-3"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between">
                  <Button
                    disabled={disable}
                    type="submit"
                    variant="outline"
                    className="text-orange-600 border-orange-600"
                  >
                    {disable ? (
                      <>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        SigningIn Please Wait!
                      </>
                    ) : (
                      "SignIn"
                    )}
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        disabled={disable}
                        variant="outline"
                        className="text-orange-600 border-orange-600"
                      >
                        Forgot Password?
                      </Button>
                    </DialogTrigger>
                    <VerifyMail setOpen={setOpen} />
                  </Dialog>
                </div>
              </form>
            </Form>
            <DialogFooter className="sm:justify-center">
              <p>
                Don&apos;t have an account?{" "}
                <span
                  className="underline hover:text-orange-600 cursor-pointer"
                  onClick={() => navigate("/signUp")}
                >
                  Sign up
                </span>
              </p>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DefaultNavBar;
