import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AiOutlineAlert } from "react-icons/ai";

const SecurityAlerts = () => {
  return (
    <Card
      x-chunk="dashboard-01-chunk-5"
      className="h-[19rem] max-sm:h-[50vh] shadow-xl overflow-y-scroll no-scrollbar"
    >
      <CardHeader className="py-2">
        <CardTitle className="text-xl font-semibold text-orange-600">
          You have no alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="py-2">
        <div>
          <div className="flex justify-center">
            <div className="">
              <AiOutlineAlert className="text-8xl ml-3" />
              <p className="font-bold">Great. No Alerts.</p>
            </div>
          </div>
          <p className="text-sm pt-5 text-muted-foreground ">
            Rest at ease. You’ll find out immediately if you’re compromised in
            an online data breach.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityAlerts;
