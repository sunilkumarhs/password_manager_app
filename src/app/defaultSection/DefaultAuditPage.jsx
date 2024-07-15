import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { auditPoints } from "../../utils/constants";
import { FaShieldCat } from "react-icons/fa6";

const DefaultAuditPage = () => {
  return (
    <div className="w-full flex max-md:flex-col py-7 px-5 ">
      <Card className="w-[30%] md:mt-32 lg:mt-24 max-md:w-full h-full px-7 max-md:py-5 py-40 bg-yellow-400">
        <div className="shadow-2xl">
          <img
            src="https://cdn.gamma.app/4kehmpnpy0pozfy/1d8f53f655684763b5453123e888b5ae/original/How-to-Perform-Password-Audit-social.jpg"
            alt="auditImage"
          />
        </div>
      </Card>
      <div className="max-md:py-2 max-md:px-0 px-2"></div>
      <Card className="w-[70%] max-md:w-full h-full border-none shadow-none">
        <CardHeader className="lg:px-24 md:px-10 sm:px-10 xl:px-28 lg:pt-20 sm:pt-16">
          <CardTitle className="sm:text-5xl text-3xl xl:text-6xl font-bold text-orange-600">
            Proactive Security Audits and Alerts
          </CardTitle>
          <div className="py-2"></div>
          {auditPoints.map((point, index) => (
            <Card
              className="border-none shadow-none hover:bg-accent hover:text-accent-foreground flex"
              key={index}
            >
              <div className="py-7 px-3">
                <FaShieldCat className="text-6xl text-orange-600" />
              </div>
              <div className="items-center space-x-4 rounded-md ">
                <CardHeader className="px-2">
                  <CardTitle className="max-sm:text-lg text-xl font-bold text-orange-600">
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
  );
};

export default DefaultAuditPage;
