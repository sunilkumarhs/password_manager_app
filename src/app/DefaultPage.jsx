import DefaultNavBar from "./navigation/DefaultNavBar";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerDown,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  auditPoints,
  authPoints,
  encPassPoints,
  passGenPoints,
  passPoints,
  sharingPassPoints,
} from "../utils/constants";
import { FaShieldCat } from "react-icons/fa6";
import DefaultFooter from "./footer/DefaultFooter";

const DefaultPage = () => {
  return (
    <div className="">
      <div className="fixed w-full bg-white dark:bg-card">
        <DefaultNavBar />
      </div>
      <div>
        <Card className="w-full flex justify-center rounded-none h-screen">
          <CardHeader className="px-44 pt-32">
            <CardTitle className="text-7xl font-bold text-orange-600">
              Unlock the Power of Secure Passwords
            </CardTitle>
            <CardDescription className="text-xl font-semibold py-7">
              Our revolutionary password management system provides unparalleled
              authentication, robust password vaults, and seamless sharing - all
              with unwavering security.
            </CardDescription>
            <div className="flex">
              <Button
                variant="secondary"
                className="border-orange-600 text-orange-600 text-xl"
              >
                Get Started Now
              </Button>
              <div className="px-5"></div>
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 text-xl"
              >
                Explore the Features
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div>
        <Card className="w-full flex justify-center rounded-none h-screen">
          <CardHeader className="px-44 pt-32">
            <CardTitle className="text-6xl font-bold text-orange-600">
              Robust Authentication and Authorization
            </CardTitle>
            <div className="py-3"></div>
            <div className="flex justify-evenly">
              {authPoints.map((point, index) => (
                <Card
                  className="hover:bg-accent hover:text-accent-foreground mr-5"
                  key={index}
                >
                  <div className=" flex items-center space-x-4 rounded-md ">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-orange-600">
                        {point.title}
                      </CardTitle>
                      <div className=""></div>
                      <CardTitle className="text-sm text-muted-foreground">
                        {point.content}
                      </CardTitle>
                    </CardHeader>
                  </div>
                </Card>
              ))}
            </div>
          </CardHeader>
        </Card>
      </div>
      <div>
        <Card className="w-full flex justify-center rounded-none h-screen">
          <CardHeader className="px-44 pt-32">
            <CardTitle className="text-6xl font-bold text-orange-600">
              Secure Password Vault
            </CardTitle>
            <div className="py-3"></div>
            <Card className="hover:bg-accent hover:text-accent-foreground">
              <div className=" flex items-center space-x-4 rounded-md ">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-orange-600">
                    Secure Password Storage
                  </CardTitle>
                  <div className=""></div>
                  <CardTitle className="text-base text-muted-foreground">
                    Safely store all your passwords in our encrypted vault,
                    providing robust protection for your sensitive information.
                  </CardTitle>
                </CardHeader>
              </div>
            </Card>
            <div className="py-3"></div>
            <div className="flex justify-evenly">
              {passPoints.map((point, index) => (
                <Card
                  className="hover:bg-accent hover:text-accent-foreground mr-5"
                  key={index}
                >
                  <div className=" flex items-center space-x-4 rounded-md p-3">
                    <Button
                      variant="outline"
                      className="text-xl font-bold text-orange-600"
                    >
                      {index + 1}
                    </Button>
                    <CardHeader className="px-3">
                      <CardTitle className="text-xl font-bold text-orange-600">
                        {point.title}
                      </CardTitle>
                      <div className=""></div>
                      <CardTitle className="text-sm text-muted-foreground">
                        {point.content}
                      </CardTitle>
                    </CardHeader>
                  </div>
                </Card>
              ))}
            </div>
          </CardHeader>
        </Card>
      </div>
      <div>
        <Card className="w-full flex justify-center rounded-none h-screen">
          <CardHeader className="px-44 pt-32">
            <CardTitle className="text-6xl font-bold text-orange-600">
              Intelligent Password Generator
            </CardTitle>
            <div className="py-3"></div>
            <div className="flex flex-wrap justify-evenly">
              {passGenPoints.map((point, index) => (
                <Card
                  className="border-none shadow-none hover:bg-accent hover:text-accent-foreground w-1/2"
                  key={index}
                >
                  <div className=" flex items-center space-x-4 rounded-md p-3">
                    <Button
                      variant="outline"
                      className="text-xl font-bold text-orange-600"
                    >
                      {index + 1}
                    </Button>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-orange-600">
                        {point.title}
                      </CardTitle>
                      <div className=""></div>
                      <CardTitle className="text-sm text-muted-foreground">
                        {point.content}
                      </CardTitle>
                    </CardHeader>
                  </div>
                </Card>
              ))}
            </div>
          </CardHeader>
        </Card>
      </div>
      <div>
        <Card className="w-full flex justify-center rounded-none h-screen">
          <CardHeader className="px-44 pt-32">
            <CardTitle className="text-6xl font-bold text-orange-600">
              Encrypted Password Storage
            </CardTitle>
            <div className="py-3"></div>
            {encPassPoints.map((point, index) => (
              <Accordion
                type="single"
                collapsible
                className="w-full"
                key={index}
              >
                <AccordionItem value="item-1">
                  <AccordionTriggerDown>{point.title}</AccordionTriggerDown>
                  <AccordionContent className="mx-2 px-2 border-l dark:border-white py-2">
                    {point.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </CardHeader>
        </Card>
      </div>
      <div>
        <Card className="w-full flex justify-center rounded-none h-screen">
          <CardHeader className="px-44 pt-28">
            <CardTitle className="text-6xl font-bold text-orange-600 flex justify-center">
              <p>Seamless Password Sharing</p>
            </CardTitle>
            <div className="py-2"></div>
            <div className="flex justify-evenly flex-wrap">
              {sharingPassPoints.map((point, index) => (
                <Card
                  className="hover:bg-accent hover:text-accent-foreground my-2"
                  key={index}
                >
                  <div className=" flex items-center space-x-4 rounded-md ">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-orange-600">
                        {point.title}
                      </CardTitle>
                      <div className=""></div>
                      <CardTitle className="text-sm text-muted-foreground">
                        {point.content}
                      </CardTitle>
                    </CardHeader>
                  </div>
                </Card>
              ))}
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className="w-full h-screen flex py-7 px-5 ">
        <Card className="w-[30%] h-full px-7 py-40 bg-yellow-400">
          <div className="shadow-2xl">
            <img
              src="https://cdn.gamma.app/4kehmpnpy0pozfy/1d8f53f655684763b5453123e888b5ae/original/How-to-Perform-Password-Audit-social.jpg"
              alt="auditImage"
            />
          </div>
        </Card>
        <div className="px-2"></div>
        <Card className="w-[70%] h-full border-none shadow-none">
          <CardHeader className="px-32 pt-10">
            <CardTitle className="text-6xl font-bold text-orange-600">
              Proactive Security Audits and Alerts
            </CardTitle>
            <div className="py-2"></div>
            {auditPoints.map((point, index) => (
              <Card
                className="border-none shadow-none hover:bg-accent hover:text-accent-foreground"
                key={index}
              >
                <div className=" flex items-center space-x-4 rounded-md px-3">
                  <FaShieldCat className="text-6xl text-orange-600" />
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-orange-600">
                      {point.title}
                    </CardTitle>
                    <CardTitle className="text-sm text-muted-foreground">
                      {point.content}
                    </CardTitle>
                  </CardHeader>
                </div>
              </Card>
            ))}
          </CardHeader>
        </Card>
      </div>
      <DefaultFooter />
    </div>
  );
};

export default DefaultPage;
