import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { passPoints } from "../../utils/constants";

const DefaultPassVaultPage = () => {
  return (
    <div>
      <Card className="w-full rounded-none">
        <CardHeader className="lg:px-28 md:px-16 sm:px-10 xl:px-44 pt-32 max-sm:items-center">
          <CardTitle className="sm:text-5xl text-3xl xl:text-6xl font-bold text-orange-600">
            Secure Password Vault
          </CardTitle>
          <div className="py-3"></div>
          <Card className="hover:bg-accent hover:text-accent-foreground">
            <div className=" flex items-center space-x-4 rounded-md ">
              <CardHeader>
                <CardTitle className="max-sm:text-2xl text-3xl max-sm:font-semibold font-bold text-orange-600">
                  Secure Password Storage
                </CardTitle>
                <div className=""></div>
                <CardTitle className="max-sm:text-sm text-base text-muted-foreground">
                  Safely store all your passwords in our encrypted vault,
                  providing robust protection for your sensitive information.
                </CardTitle>
              </CardHeader>
            </div>
          </Card>
          <div className="py-3"></div>
          <div className="flex max-sm:flex-col justify-evenly">
            {passPoints.map((point, index) => (
              <Card
                className="hover:bg-accent hover:text-accent-foreground max-sm:mr-0 max-sm:mb-5 mr-5"
                key={index}
              >
                <div className="flex sm:flex-col md:flex-row items-center space-x-4 rounded-md px-3 max-sm:py-0 py-3">
                  <Button
                    variant="outline"
                    className="max-sm:text-lg text-xl font-bold text-orange-600"
                  >
                    {index + 1}
                  </Button>
                  <CardHeader className="px-3">
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

export default DefaultPassVaultPage;
