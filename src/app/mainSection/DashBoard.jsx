import MainNavBar from "../navigation/MainNavBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { totalValues } from "@/utils/mainConstants";
import SecurityAnalysis from "./SecurityAnalysis";
import SecurityAlerts from "./SecurityAlerts";
import { useContext, useEffect } from "react";
import GlobalContext from "@/contexts/GlobalContext";
import fetchPasswords from "@/hooks/fetchPasswords";
import fetchBanks from "../../hooks/fetchBanks";
import fetchCards from "../../hooks/fetchCards";
import fetchNotes from "../../hooks/fetchNotes";

const DashBoard = () => {
  const {
    passwords,
    notes,
    payCards,
    banksData,
    accessToken,
    setPasswords,
    setNotes,
    setPayCards,
    setBanksData,
  } = useContext(GlobalContext);
  useEffect(() => {
    fetchPasswords(accessToken, setPasswords);
    fetchNotes(accessToken, setNotes);
    fetchCards(accessToken, setPayCards);
    fetchBanks(accessToken, setBanksData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const counts = [
    passwords?.length,
    notes?.length,
    payCards?.length,
    banksData?.length,
  ];
  return (
    <div className="w-full ">
      <div className="fixed w-full bg-white dark:bg-card z-10">
        <MainNavBar />
      </div>
      <main className="flex flex-1 max-sm:flex-col-reverse flex-col gap-4 px-4 pb-4 pt-20 md:gap-8 md:pb-4 md:px-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {totalValues.map((value, index) => (
            <Card
              x-chunk={`dashboard-01-chunk-${index}`}
              className="shadow-xl"
              key={index}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="max-sm:text-sm text-base font-medium">
                  {value.title}
                </CardTitle>
                {value.symbol}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold py-1">{counts[index]}</div>
                <p className="text-xs text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-3">
          <SecurityAnalysis />
          <SecurityAlerts />
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
