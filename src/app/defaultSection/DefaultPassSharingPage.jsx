import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { sharingPassPoints } from "../../utils/constants";

const DefaultPassSharingPage = () => {
  return (
    <div>
      <Card className="w-full rounded-none">
        <CardHeader className="lg:px-28 md:px-16 sm:px-10 xl:px-44 pt-32 max-sm:items-center">
          <CardTitle className="sm:text-5xl text-3xl xl:text-6xl font-bold text-orange-600 flex justify-center">
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
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DefaultPassSharingPage;
