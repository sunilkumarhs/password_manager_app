import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Progress } from "@/components/ui/progress";
import { ResetPassFormSchema } from "@/utils/formSchema";
import progessValidate from "@/utils/progressValidate";
import { api } from "@/restApi/scurePass";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import GlobalContext from "@/contexts/GlobalContext";
import { decryptData } from "@/utils/securingData";

const PasswordReset = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { setReset } = useContext(GlobalContext);
  const [disable, setDisable] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pass, setPass] = useState("");

  const form = useForm({
    resolver: zodResolver(ResetPassFormSchema),
    defaultValues: { password: "", cnfPassword: "" },
  });
  useEffect(() => {
    setProgress(progessValidate(pass));
  }, [pass]);

  const onSubmit = async (data) => {
    setDisable(true);
    const formData = {
      password: data.password,
    };
    console.log("get");
    try {
      const resetToken = localStorage.getItem("resetToken");
      const token = decryptData(resetToken);
      const response = await api.post("/securepass_server/resetPass", {
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });
      const resData = response.data;
      if (response.status === 201) {
        localStorage.removeItem("resetToken");
        toast({
          title: resData.message,
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
              <p>Your master-password is verfied successfully!</p>
            </div>
          ),
        });
        setReset(false);
        navigate("/");
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
    <div className="flex justify-center items-center w-full h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>Enter your new Master Password.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6 border-2 rounded-md p-4"
            >
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div>
                        <div className="flex">
                          <Input
                            disabled={disable}
                            type={toggle1 ? "text" : "password"}
                            placeholder="Master-Password"
                            onInput={(e) => setPass(e.target.value)}
                            {...field}
                          />
                          <span
                            className="flex justify-center mt-2"
                            onClick={() => {
                              setToggle1(!toggle1);
                            }}
                          >
                            {toggle1 ? (
                              <FaEye className="absolute text-xl mr-10 cursor-pointer" />
                            ) : (
                              <FaEyeSlash className="absolute text-xl mr-10 cursor-pointer" />
                            )}
                          </span>
                        </div>
                        <div className="flex items-center pt-3">
                          <Progress value={progress} className="w-[100%]" />
                          <p className="text-sm px-1 -mt-1">Strength</p>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cnfPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex">
                        <Input
                          disabled={disable}
                          type={toggle1 ? "text" : "password"}
                          placeholder="Confirm Master-Password"
                          {...field}
                        />
                        <span
                          className="flex justify-center mt-2"
                          onClick={() => setToggle1(!toggle1)}
                        >
                          {toggle1 ? (
                            <FaEye className="absolute text-xl mr-10 cursor-pointer" />
                          ) : (
                            <FaEyeSlash className="absolute text-xl mr-10 cursor-pointer" />
                          )}
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <Button
                disabled={disable}
                type="submit"
                variant="outline"
                className="text-orange-600 border-orange-600"
              >
                {disable ? (
                  <>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Submiting Please Wait!
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordReset;
