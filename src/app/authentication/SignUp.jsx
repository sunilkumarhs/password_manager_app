import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import DefaultNavBar from "../navigation/DefaultNavBar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import signUpImg from "../../assets/signupImage.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Progress } from "@/components/ui/progress";
import { SignUpFormSchema } from "@/utils/formSchema";
import progessValidate from "@/utils/progressValidate";

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [disable, setDisable] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pass, setPass] = useState("");

  const form = useForm({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: { email: "", password: "", cnfPassword: "", reminder: "" },
  });

  useEffect(() => {
    setProgress(progessValidate(pass));
  }, [pass]);

  function onSubmit() {
    setDisable(true);
    toast({
      title: "verification Successfull!",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-700 p-4">
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
  return (
    <div>
      <div className="fixed w-full bg-white dark:bg-card">
        <DefaultNavBar />
      </div>
      <div className="w-full h-screen flex">
        <Card className=" max-sm:hidden w-1/2 h-full border-none shadow-none rounded-none bg-zinc-100 dark:bg-zinc-800">
          <div className="mt-[100%] md:mt-[50%] lg:mt-[25%] lg:px-5">
            <img src={signUpImg} alt="SignUpImage" />
          </div>
        </Card>
        <Card className="max-md:w-full w-1/2 h-full border-none shadow-none rounded-none ">
          <CardHeader className=" md:px-5 lg:px-24 xl:px-32 pt-20 items-center">
            <CardTitle className="text-2xl font-bold text-orange-600">
              Create an account
            </CardTitle>
            <CardDescription className="font-semibold">
              Enter your email below to create your account
            </CardDescription>
            <div className="py-1"></div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-5 py-1"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          disabled={disable}
                          type="email"
                          placeholder="Email"
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
                      <FormControl>
                        <div>
                          <div className="flex">
                            <Input
                              disabled={disable}
                              type={toggle1 ? "text" : "password"}
                              placeholder="Master-Password"
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
                <FormField
                  control={form.control}
                  name="cnfPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex">
                          <Input
                            disabled={disable}
                            type={toggle1 ? "text" : "password"}
                            placeholder="Confirm Master-Password"
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
                  control={form.control}
                  name="reminder"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          disabled={disable}
                          type="text"
                          placeholder="Reminder(Optional)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-orange-600 w-full">
                  {disable ? (
                    <>
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      SigningUp Please Wait!
                    </>
                  ) : (
                    "SignUp"
                  )}
                </Button>
              </form>
            </Form>
            <div className="py-1"></div>
            <CardContent className="text-sm text-zinc-400">
              By clicking continue, you agree to our
              <span className="underline hover:text-orange-600 cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="underline hover:text-orange-600 cursor-pointer">
                Privacy Policy
              </span>
              .
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;