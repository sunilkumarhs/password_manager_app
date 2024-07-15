import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { passGenPoints } from "../../utils/constants";
import { Button } from "@/components/ui/button";

const DefaultPassGenPage = () => {
  return (
    <div>
      <Card className="w-full rounded-none">
        <CardHeader className="lg:px-28 md:px-16 sm:px-10 xl:px-44 pt-32 max-sm:items-center">
          <CardTitle className="sm:text-5xl text-3xl xl:text-6xl font-bold text-orange-600">
            Intelligent Password Generator
          </CardTitle>
          <div className="max-sm:py-3 py-5"></div>
          <div className="flex max-sm:flex-col flex-wrap justify-evenly">
            {passGenPoints.map((point, index) => (
              <Card
                className={`hover:bg-accent hover:text-accent-foreground max-sm:mb-5 max-sm:w-full w-1/2 `}
                key={index}
              >
                <div className="flex sm:flex-col lg:flex-row items-center space-x-4 rounded-md px-3 max-sm:py-0 py-2">
                  <Button
                    variant="outline"
                    className="max-sm:text-lg text-xl font-bold text-orange-600"
                  >
                    {index + 1}
                  </Button>
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

export default DefaultPassGenPage;
