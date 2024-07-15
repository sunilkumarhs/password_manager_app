import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "../../assets/appLogo.png";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DefaultNavBar = () => {
  const navigate = useNavigate();
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
        <Button
          variant="outline"
          className="border-orange-600 text-orange-600"
          onClick={() => navigate("/signUP")}
        >
          SignIn
        </Button>
      </div>
    </div>
  );
};

export default DefaultNavBar;
