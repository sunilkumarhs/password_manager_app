import DefaultNavBar from "../navigation/DefaultNavBar";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DefaultFooter from "../footer/DefaultFooter";
import DefaultAuthPage from "./DefaultAuthPage";
import DefaultPassVaultPage from "./DefaultPassVaultPage";
import DefaultDigiWalletPage from "./DefaultDigiWalletPage";
import DefaultPassGenPage from "./DefaultPassGenPage";
import DefaultPassStrPage from "./DefaultPassStrPage";
import DefaultPassSharingPage from "./DefaultPassSharingPage";
import DefaultAuditPage from "./DefaultAuditPage";

const DefaultPage = () => {
  return (
    <div className="">
      <div className="fixed w-full bg-white dark:bg-card">
        <DefaultNavBar />
      </div>
      <div>
        <Card className="w-full border-none rounded-none">
          <CardHeader className="lg:px-32 md:px-16 sm:px-10 xl:px-44 pt-32 max-sm:items-center">
            <CardTitle className="sm:text-6xl text-4xl xl:text-7xl font-bold text-orange-600">
              Unlock the Power of Secure Passwords
            </CardTitle>
            <CardDescription className="max-sm:text-base text-xl font-semibold max-sm:py-4 py-7">
              Our revolutionary password management system provides unparalleled
              authentication, robust password vaults, and seamless sharing - all
              with unwavering security.
            </CardDescription>
            <div className="flex">
              <Button
                variant="secondary"
                className="border-orange-600 text-orange-600 max-sm:text-base text-xl"
              >
                Get Started Now
              </Button>
              <div className="max-sm:px-2 px-5"></div>
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 max-sm:text-base text-xl"
              >
                Explore the Features
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div>
        <DefaultAuthPage />
      </div>
      {/* <div>
        <DefaultPassVaultPage />
      </div>
      <div>
        <DefaultDigiWalletPage />
      </div>
      <div>
        <DefaultPassGenPage />
      </div>
      <div>
        <DefaultPassStrPage />
      </div>
      <div>
        <DefaultPassSharingPage />
      </div>
      <div>
        <DefaultAuditPage />
      </div>
      <DefaultFooter /> */}
    </div>
  );
};

export default DefaultPage;
