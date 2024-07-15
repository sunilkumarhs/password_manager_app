import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { sharingPassPoints } from "../../utils/constants";

const DefaultPassSharingPage = () => {
  return (
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
  );
};

export default DefaultPassSharingPage;
