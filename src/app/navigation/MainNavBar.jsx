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
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ImProfile, ImMenu } from "react-icons/im";
import {
  FaUserAstronaut,
  FaUserSecret,
  FaUserNinja,
  FaUserShield,
} from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "../../assets/appLogo.png";
import { Button } from "@/components/ui/button";
import { components } from "@/utils/constants";

const MainNavBar = () => {
  return (
    <>
      <div className="max-lg:hidden border-b-2 px-4 shadow-md flex justify-between items-center">
        <div className="flex">
          <Avatar className="h-16 w-16">
            <AvatarImage src={logo} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="px-1"></div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-orange-600`}
                >
                  Security-Dashboard
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-orange-600`}
                >
                  Add-Password
                </NavigationMenuLink>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-orange-600`}
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
                <NavigationMenuTrigger className="hover:text-orange-600 focus:text-orange-600">
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
                        className="hover:text-orange-600"
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
              <Button
                variant="outline"
                className="text-orange-600 border-orange-600"
              >
                <FaUserSecret className="text-xl" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 m-5">
              <DropdownMenuLabel className="text-orange-600">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>
                    <ImProfile className="text-lg text-orange-600" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>
                    <MdOutlineSettings className="text-lg text-orange-600" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
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
                  <NavigationMenuItem className="py-1">
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} hover:text-orange-600`}
                    >
                      Security-Dashboard
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="py-1">
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} hover:text-orange-600`}
                    >
                      Add-Password
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="py-1">
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} hover:text-orange-600`}
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
                    <NavigationMenuTrigger className="hover:text-orange-600 focus:text-orange-600">
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
                            className="hover:text-orange-600"
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
                  <Button
                    variant="outline"
                    className="text-orange-600 border-orange-600"
                  >
                    <FaUserSecret className="text-xl" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 my-3">
                  <DropdownMenuLabel className="text-orange-600">
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>
                        <ImProfile className="text-lg text-orange-600" />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>
                        <MdOutlineSettings className="text-lg text-orange-600" />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
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
          <Avatar className="h-16 w-16">
            <AvatarImage src={logo} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default MainNavBar;
