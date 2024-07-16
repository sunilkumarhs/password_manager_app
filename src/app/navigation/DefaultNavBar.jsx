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
import { Label } from "@/components/ui/label";

const DefaultNavBar = () => {
  const navigate = useNavigate();
  const signInHandler = () => {
    navigate("/dashBoard");
  };
  return (
    <div className="border-b-2 px-4 shadow-md flex justify-between items-center">
      <div className="flex">
        <Avatar className="h-16 w-16" onClick={() => navigate("/")}>
          <AvatarImage src={logo} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center">
        <ModeToggle />
        <div className="px-2"></div>
        {/* <Button
          variant="outline"
          className="border-orange-600 text-orange-600"
          onClick={() => navigate("/signUP")}
        >
          SignIn
        </Button> */}
        <Dialog>
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
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Master-Password
                </Label>
                <Input id="password" type="password" className="col-span-3" />
              </div>
            </div>
            <DialogFooter className="sm:justify-between">
              <Button
                type="submit"
                className="bg-orange-600"
                onClick={() => navigate("/signUp")}
              >
                SignUp
              </Button>
              <div className="max-sm:py-2"></div>
              <Button
                type="submit"
                className="bg-orange-600"
                onClick={signInHandler}
              >
                SignIn
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DefaultNavBar;
