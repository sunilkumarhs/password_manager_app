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
import { Form } from "react-router-dom";
import { useState } from "react";
import signUpImg from "../../assets/signupImage.png";

const SignUp = () => {
  const [disable, setDisable] = useState(false);
  const signUpHandler = () => {
    setDisable(true);
  };
  return (
    <div>
      <div className="fixed w-full bg-white dark:bg-card">
        <DefaultNavBar />
      </div>
      <Form
        className="w-full h-screen flex"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
            <div className="py-3"></div>
            {disable ? (
              <Input disabled type="email" placeholder="Email" />
            ) : (
              <Input type="email" placeholder="Email" />
            )}
            <div className="py-1"></div>
            {disable ? (
              <Input disabled type="password" placeholder="Master-Password" />
            ) : (
              <Input type="password" placeholder="Master-Password" />
            )}
            <div className="py-1"></div>
            {disable ? (
              <Input
                disabled
                type="password"
                placeholder="Confirm Master-Password"
              />
            ) : (
              <Input type="password" placeholder="Confirm Master-Password" />
            )}
            <div className="py-1"></div>
            {disable ? (
              <Input disabled type="text" placeholder="Reminder(Optional)" />
            ) : (
              <Input type="text" placeholder="Reminder(Optional)" />
            )}
            <div className="py-2"></div>
            {disable ? (
              <Button disabled className="bg-orange-600 w-full">
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                SigningUp Please Wait!
              </Button>
            ) : (
              <Button className="bg-orange-600 w-full" onClick={signUpHandler}>
                SignUp
              </Button>
            )}
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
      </Form>
    </div>
  );
};

export default SignUp;
