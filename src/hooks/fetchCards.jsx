import { toast } from "@/components/ui/use-toast";
import { api } from "@/restApi/scurePass";
import { decryptData } from "@/utils/securingData";

const fetchCards = async (accessToken, setPayCards) => {
  try {
    const token = decryptData(accessToken);
    const response = await api.get("/secure_passCards/getCards", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      setPayCards(response.data.cards);
    }
  } catch (err) {
    const errorStatus = err.response.status;
    const errMessage = err.response.data.message;
    const errMessage1 = err.response.data.error;
    toast({
      title: "ErrorCode:" + errorStatus,
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
          <p>{errMessage || errMessage1}</p>
        </div>
      ),
    });
  }
};

export default fetchCards;
