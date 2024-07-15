import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { passPoints } from "../../utils/constants";

const DefaultPassVaultPage = () => {
  return (
    <div>
      <Card className="w-full flex justify-center rounded-none h-screen">
        <CardHeader className="px-44 pt-32">
          <CardTitle className="text-6xl font-bold text-orange-600">
            Secure Password Vault
          </CardTitle>
          <div className="py-3"></div>
          <Card className="hover:bg-accent hover:text-accent-foreground">
            <div className=" flex items-center space-x-4 rounded-md ">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-orange-600">
                  Secure Password Storage
                </CardTitle>
                <div className=""></div>
                <CardTitle className="text-base text-muted-foreground">
                  Safely store all your passwords in our encrypted vault,
                  providing robust protection for your sensitive information.
                </CardTitle>
              </CardHeader>
            </div>
          </Card>
          <div className="py-3"></div>
          <div className="flex justify-evenly">
            {passPoints.map((point, index) => (
              <Card
                className="hover:bg-accent hover:text-accent-foreground mr-5"
                key={index}
              >
                <div className=" flex items-center space-x-4 rounded-md p-3">
                  <Button
                    variant="outline"
                    className="text-xl font-bold text-orange-600"
                  >
                    {index + 1}
                  </Button>
                  <CardHeader className="px-3">
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

export default DefaultPassVaultPage;
