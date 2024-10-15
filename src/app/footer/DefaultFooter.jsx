import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "../../assets/appLogo.png";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerRotate,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { securePassLinks, footerLinks } from "@/utils/constants";
import { Link } from "react-router-dom";

const DefaultFooter = () => {
  return (
    <div className="py-5 px-5">
      <div className="border-b-2 dark:border-zinc-500 px-2 flex justify-between items-center">
        <div className="flex">
          <Avatar className="h-16 w-16">
            <AvatarImage src={logo} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex max-sm:w-1/2 w-1/4 justify-evenly">
          <IoLogoLinkedin className="max-sm:text-2xl text-3xl text-orange-600" />
          <IoLogoYoutube className="max-sm:text-2xl text-3xl text-orange-600" />
          <FaTwitterSquare className="max-sm:text-2xl text-3xl text-orange-600" />
          <FaInstagramSquare className="max-sm:text-2xl text-3xl text-orange-600" />
        </div>
      </div>
      <div className="py-5 flex flex-wrap justify-center border-b-2 dark:border-zinc-500">
        {securePassLinks.map((link, index) => (
          <Accordion
            type="single"
            collapsible
            className="w-1/4 max-sm:w-1/2 flex justify-center"
            key={index}
          >
            <AccordionItem value="item-1">
              <AccordionTriggerRotate>{link.title}</AccordionTriggerRotate>
              <AccordionContent className="mx-2 px-2 border-l dark:border-white py-2">
                {link.content.map((name, index) => (
                  <a href={name.path} key={index}>
                    <p className="hover:text-orange-600 hover:underline pb-1 cursor-pointer">
                      {name.linkName}
                    </p>
                  </a>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <div className="flex justify-center py-3">
        <div>
          <div className="flex flex-wrap max-sm:justify-between justify-evenly">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                className="max-sm:px-2 px-5 max-sm:py-2 hover:text-orange-600 hover:underline"
              >
                {link.linkName}
              </Link>
            ))}
          </div>
          <div className="flex justify-center py-4">
            <Link className="hover:text-orange-600 hover:underline">
              © 2024 SecurePass. All rights reserved.
            </Link>
          </div>
          <div className="py-2"></div>
          <div className="flex justify-center">
            <Select defaultValue="english">
              <SelectTrigger className="w-[180px] transition-all [&[data-state=open]>svg]:rotate-[360deg] hover:text-orange-600">
                <BsGlobeCentralSouthAsia className="text-2xl text-orange-600 transition-transform duration-500" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hinidi">Hindi</SelectItem>
                  <SelectItem value="kannada">Kannada</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultFooter;
