import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  ListItem,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ImMenu } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "../../assets/appLogo.png";
import { Button } from "@/components/ui/button";
import { components } from "@/utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import GlobalContext from "@/contexts/GlobalContext";
import { useContext, useEffect } from "react";
import { profileAvtar } from "@/utils/mainConstants";

const MainNavBar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const { user, setAccessToken, setUserId, setIsAuth, isAuth } =
    useContext(GlobalContext);
  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiryDate");
    setIsAuth(false);
    setAccessToken(null);
    setUserId(null);
    navigate("/");
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="max-lg:hidden border-b-2 px-4 shadow-md flex justify-between items-center">
        <div className="flex">
          <Avatar
            className="h-16 w-16 bg-white"
            onClick={() => navigate("/dashBoard")}
          >
            <AvatarImage src={logo} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="px-1"></div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem onClick={() => navigate("/dashBoard")}>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-orange-600 ${
                    location.pathname === "/dashBoard" && "text-orange-600"
                  }`}
                >
                  Security-Dashboard
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem onClick={() => navigate("/passGenerater")}>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-orange-600 ${
                    location.pathname === "/passGenerater" && "text-orange-600"
                  }`}
                >
                  Password Generater
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem onClick={() => navigate("/passwordVault")}>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-orange-600 ${
                    location.pathname === "/passwordVault" && "text-orange-600"
                  }`}
                >
                  Password Vault
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-orange-600`}
                >
                  Security Audits
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`hover:text-orange-600 focus:text-orange-600 ${
                    location.pathname === "/sharedPage" && "text-orange-600"
                  } ${
                    location.pathname === "/notesPage" && "text-orange-600"
                  } ${
                    location.pathname === "/cardsPage" && "text-orange-600"
                  } ${location.pathname === "/banksPage" && "text-orange-600"}`}
                >
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        logo={component.logo}
                        title={component.title}
                        href={component.href}
                        className={`hover:text-orange-600 ${
                          location.pathname === component.href &&
                          "text-orange-600"
                        }`}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center">
          <ModeToggle />
          <div className="px-2"></div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="text-5xl hover:cursor-pointer">
                {profileAvtar[user?.avtarIndex]?.avtar}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 m-5">
              <DropdownMenuLabel className="text-orange-600">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  Settings
                  <DropdownMenuShortcut>
                    <MdOutlineSettings className="text-lg text-orange-600" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logoutHandler}>
                Log out
                <DropdownMenuShortcut>
                  <LuLogOut className="text-lg text-orange-600" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="hidden max-lg:flex border-b-2 px-4 shadow-md justify-between items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="text-orange-600">
              <ImMenu className="text-xl" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="text-orange-600 py-1">MenuBar</SheetTitle>
            </SheetHeader>
            <hr className="py-1" />
            <div className=" w-full flex justify-center">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col">
                  <NavigationMenuItem
                    className="py-1"
                    onClick={() => navigate("/dashBoard")}
                  >
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} hover:text-orange-600 ${
                        location.pathname === "/dashBoard" && "text-orange-600"
                      }`}
                    >
                      Security-Dashboard
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem
                    onClick={() => navigate("/passGenerater")}
                  >
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} hover:text-orange-600 ${
                        location.pathname === "/passGenerater" &&
                        "text-orange-600"
                      }`}
                    >
                      Password Generater
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem
                    className="py-1"
                    onClick={() => navigate("/passwordVault")}
                  >
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} hover:text-orange-600 ${
                        location.pathname === "/passwordVault" &&
                        "text-orange-600"
                      }`}
                    >
                      Password Vault
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="py-1">
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} hover:text-orange-600`}
                    >
                      Security Audits
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="py-1">
                    <NavigationMenuTrigger
                      className={`hover:text-orange-600 focus:text-orange-600 ${
                        location.pathname === "/sharedPage" && "text-orange-600"
                      } ${
                        location.pathname === "/notesPage" && "text-orange-600"
                      } ${
                        location.pathname === "/cardsPage" && "text-orange-600"
                      } ${
                        location.pathname === "/banksPage" && "text-orange-600"
                      }`}
                    >
                      More
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] max-sm:gap-0 gap-3 max-sm:p-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            logo={component.logo}
                            title={component.title}
                            href={component.href}
                            className={`hover:text-orange-600 ${
                              location.pathname === component.href &&
                              "text-orange-600"
                            }`}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex justify-center py-5">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="text-5xl hover:cursor-pointer">
                    {profileAvtar[user?.avtarIndex]?.avtar}
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 my-3">
                  <DropdownMenuLabel className="text-orange-600">
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => navigate("/settings")}>
                      Settings
                      <DropdownMenuShortcut>
                        <MdOutlineSettings className="text-lg text-orange-600" />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logoutHandler}>
                    Log out
                    <DropdownMenuShortcut>
                      <LuLogOut className="text-lg text-orange-600" />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center">
          <ModeToggle />
          <div className="px-2"></div>
          <Avatar
            className="h-16 w-16 bg-white"
            onClick={() => navigate("/dashBoard")}
          >
            <AvatarImage src={logo} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default MainNavBar;
