import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import GlobalContext from "@/contexts/GlobalContext";
import { api } from "@/restApi/scurePass";
import { useContext } from "react";
import { decryptData } from "@/utils/securingData";
import { encryptData } from "@/utils/securingData";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const VerifcationPage = () => {
  const navigate = useNavigate();
  const { setAccessToken, setUserId, setIsAuth } = useContext(GlobalContext);
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: { pin: "" },
  });
  const onSubmit = async (data) => {
    const dectoken = decryptData(localStorage.getItem("otpToken"));
    const formData = {
      otp: data.pin,
      otpToken: dectoken,
    };
    try {
      const response = await api.post("/securepass_server/verifyOtp", {
        headers: { "Content-Type": "application/json" },
        body: formData,
      });
      const resData = response.data;
      console.log(resData);
      if (response.status === 200) {
        localStorage.removeItem("otpToken");
        const encToken = encryptData(resData.token);
        localStorage.setItem("accessToken", encToken);
        setAccessToken(encToken);
        const encUserId = encryptData(resData.userId);
        localStorage.setItem("userId", encUserId);
        setUserId(encUserId);
        setIsAuth(true);
        toast({
          title: resData.message,
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
              <p>Your OTP is verfied successfully!</p>
            </div>
          ),
        });
        navigate("/dashBoard");
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
  return (
    <div className="w-full h-screen items-center flex justify-center max-sm:px-5 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-sm:w-full w-1/2 space-y-6 border-2 rounded-md p-4 shadow-2xl"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-orange-600 text-xl">
                  One-Time Password
                </FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant="outline"
            className="text-orange-600 border-orange-600"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default VerifcationPage;
