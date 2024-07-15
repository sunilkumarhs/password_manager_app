import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { authPoints } from "../../utils/constants";

const DefaultAuthPage = () => {
  return (
    <div>
      <Card className="w-full border-none shadow-none rounded-none">
        <CardHeader className="lg:px-28 md:px-16 sm:px-10 xl:px-44 pt-32 max-sm:items-center">
          <CardTitle className="sm:text-5xl text-3xl xl:text-6xl font-bold text-orange-600">
            Robust Authentication and Authorization
          </CardTitle>
          <div className="max-sm:py-2 py-3"></div>
          <div className="flex max-lg:flex-col justify-evenly">
            {authPoints.map((point, index) => (
              <Card
                className="hover:bg-accent hover:text-accent-foreground max-lg:mr-0 max-lg:mb-5 mr-5"
                key={index}
              >
                <div className=" flex items-center space-x-4 rounded-md ">
                  <CardHeader className="max-sm:px-4 max-sm:py-4">
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

export default DefaultAuthPage;
