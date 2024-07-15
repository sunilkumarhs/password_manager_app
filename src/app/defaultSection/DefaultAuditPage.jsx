import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { auditPoints } from "../../utils/constants";
import { FaShieldCat } from "react-icons/fa6";

const DefaultAuditPage = () => {
  return (
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
  );
};

export default DefaultAuditPage;
