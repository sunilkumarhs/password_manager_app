import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { passGenPoints } from "../../utils/constants";
import { Button } from "@/components/ui/button";

const DefaultPassGenPage = () => {
  return (
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
  );
};

export default DefaultPassGenPage;
