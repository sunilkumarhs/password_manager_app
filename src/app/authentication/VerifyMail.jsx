/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { emailRegex } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useContext, useState } from "react";
import { api } from "@/restApi/scurePass";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import GlobalContext from "@/contexts/GlobalContext";
import { encryptData } from "@/utils/securingData";

const EmailFormSchema = z.object({
  email: z.string().regex(emailRegex, {
    message: "Invalid email address",
  }),
});

const VerifyMail = ({ setOpen }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { setReset } = useContext(GlobalContext);
  const [disable, setDisable] = useState(false);
  const form = useForm({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: { email: "" },
  });
  const onSubmit = async (data) => {
    setDisable(true);
    const formData = {
      email: data.email,
    };
    try {
      const response = await api.post("/securepass_server/verifyEmail", {
        headers: { "Content-Type": "application/json" },
        body: formData,
      });
      const resData = response.data;
      if (response.status === 200) {
        const encToken = encryptData(resData.otpToken);
        localStorage.setItem("otpToken", encToken);
        toast({
          title: resData.message,
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
              <p>Your email is verfied successfully!</p>
              <p className="text-bold">
                Enter the Password Reset Link is send to email-address.
              </p>
            </div>
          ),
        });
        setReset(true);
        setOpen(false);
        navigate("/verify");
      }
    } catch (err) {
      const errorStatus = err.response.status;
      const errMessage = err.response.data.message;
      const errMessage1 = err.response.data.error;
      setDisable(false);
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
    <DialogContent>
      <DialogHeader className="mt-4 py-2 bg-orange-600 px-2">
        <DialogTitle className="flex justify-between">
          <p className="font-bold text-xl px-2 text-white">
            Verify Email for Resting Password
          </p>
        </DialogTitle>
      </DialogHeader>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 border-2 rounded-md p-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-orange-600 text-xl">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={disable}
                      id="email"
                      type="email"
                      className="col-span-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button
                disabled={disable}
                type="submit"
                variant="outline"
                className="text-orange-600 border-orange-600"
              >
                {disable ? (
                  <>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Verifying Please Wait!
                  </>
                ) : (
                  "Verify"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </DialogContent>
  );
};

export default VerifyMail;
