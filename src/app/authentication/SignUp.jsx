import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import DefaultNavBar from "../navigation/DefaultNavBar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import signUpImg from "../../assets/signupImage.png";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { emailRegex } from "@/utils/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  email: z.string().regex(emailRegex, {
    message: "Invalid email address",
  }),
  password: z.string().min(5, {
    message: "Your password must be atleast 5 characters.",
  }),
  cnfPassword: z.string().min(5, {
    message: "Password isn't matching with above password!",
  }),
  reminder: z.string(),
});

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "", cnfPassword: "", reminder: "" },
  });
  const [disable, setDisable] = useState(false);

  function onSubmit(data) {
    if (data.password !== data.cnfPassword) {
      return;
    }
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
        <Card className="max-md:w-full w-1/2 h-full border-none shadow-none rounded-none p-2">
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
                className="w-full space-y-6 py-1"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        {disable ? (
                          <Input
                            disabled
                            type="email"
                            placeholder="Email"
                            {...field}
                          />
                        ) : (
                          <Input type="email" placeholder="Email" {...field} />
                        )}
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
                        {disable ? (
                          <Input
                            disabled
                            type="password"
                            placeholder="Master-Password"
                            {...field}
                          />
                        ) : (
                          <Input
                            type="password"
                            placeholder="Master-Password"
                            {...field}
                          />
                        )}
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
                        {disable ? (
                          <Input
                            disabled
                            type="password"
                            placeholder="Confirm Master-Password"
                            {...field}
                          />
                        ) : (
                          <Input
                            type="password"
                            placeholder="Confirm Master-Password"
                            {...field}
                          />
                        )}
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
                        {disable ? (
                          <Input
                            disabled
                            type="text"
                            placeholder="Reminder(Optional)"
                            {...field}
                          />
                        ) : (
                          <Input
                            type="text"
                            placeholder="Reminder(Optional)"
                            {...field}
                          />
                        )}
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                {disable ? (
                  <Button disabled className="bg-orange-600 w-full">
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    SigningUp Please Wait!
                  </Button>
                ) : (
                  <Button type="submit" className="bg-orange-600 w-full">
                    SignUp
                  </Button>
                )}
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
