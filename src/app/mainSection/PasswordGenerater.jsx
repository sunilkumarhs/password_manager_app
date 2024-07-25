import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import MainNavBar from "../navigation/MainNavBar";

const PasswordGenerater = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";
    if (useSymbols) charset += "!@#$%^&*()";
    if (useNumbers) charset += "0123456789";
    if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };
  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = password;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    toast({
      title: "Password Generater",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
          <p>Password copied to clipboard!</p>
        </div>
      ),
    });
  };
  return (
    <div className="w-full">
      <div className="fixed w-full bg-white dark:bg-card z-10">
        <MainNavBar />
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">
              Random Password Generator
            </CardTitle>
            <CardDescription>
              Generate your Password with your requirements.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex justify-around">
              <p className="pt-1">Password Length: </p>
              <Input
                type="number"
                placeholder="Password Length"
                min="8"
                max="32"
                value={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
                className="w-1/2"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={useNumbers}
                onCheckedChange={() => setUseNumbers(!useNumbers)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Numbers
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={useLowerCase}
                onCheckedChange={() => setUseLowerCase(!useLowerCase)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lowercase Characters
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={useUpperCase}
                onCheckedChange={() => setUseUpperCase(!useUpperCase)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Uppercase Characters
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={useSymbols}
                onCheckedChange={() => setUseSymbols(!useSymbols)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Symbols
              </label>
            </div>
            <div className="py-1"></div>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="text"
                placeholder="password-generater"
                value={password}
                readOnly
              />
              <Button
                type="button"
                className="hover:bg-orange-600"
                onClick={copyToClipboard}
              >
                <CopyIcon />
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full hover:bg-orange-600"
              onClick={generatePassword}
            >
              Generate
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PasswordGenerater;
