import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "../../assets/appLogo.png";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerRotate,
} from "@/components/ui/accordion";
import { securePassLinks } from "@/utils/constants";

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
        <div className="flex w-1/4 justify-evenly">
          <IoLogoLinkedin className="text-3xl text-orange-600" />
          <IoLogoYoutube className="text-3xl text-orange-600" />
          <FaTwitterSquare className="text-3xl text-orange-600" />
          <FaInstagramSquare className="text-3xl text-orange-600" />
        </div>
      </div>
      <div className="py-5 px-5 flex justify-between border-b-2 dark:border-zinc-500">
        {securePassLinks.map((link, index) => (
          <Accordion
            type="single"
            collapsible
            className="w-full flex justify-center"
            key={index}
          >
            <AccordionItem value="item-1">
              <AccordionTriggerRotate>{link.title}</AccordionTriggerRotate>
              <AccordionContent className="mx-2 px-2 border-l dark:border-white py-2">
                {link.content.map((name, index) => (
                  <p
                    key={index}
                    className="text-orange-600 hover:underline pb-1 cursor-pointer"
                  >
                    {name.linkName}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default DefaultFooter;
