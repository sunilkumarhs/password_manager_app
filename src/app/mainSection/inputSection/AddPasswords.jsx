/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerRotate,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import progessValidate from "@/utils/progressValidate";
import { Progress } from "@/components/ui/progress";
import { SiteFormSchema } from "@/utils/formSchema";
import { api } from "@/restApi/scurePass";
import GlobalContext from "@/contexts/GlobalContext";
import { decFetchedData, decryptData } from "@/utils/securingData";

const AddPasswords = ({ passData, setOpen }) => {
  const navigate = useNavigate();
  const { accessToken, userId, setPasswords, passwords } =
    useContext(GlobalContext);
  const { toast } = useToast();
  const [pass, setPass] = useState("");
  const [progress, setProgress] = useState(0);
  const [disable, setDisable] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [edit, setEdit] = useState(false);
  const form = useForm({
    resolver: zodResolver(SiteFormSchema),
    defaultValues: {
      url: passData ? decFetchedData(passData?.website, userId) : "",
      name: passData ? passData?.name : "",
      folder: passData ? passData?.folder : "",
      userName: passData ? decFetchedData(passData?.username, userId) : "",
      password: passData ? decFetchedData(passData?.password, userId) : "",
      notes: passData ? decFetchedData(passData?.notes, userId) : "",
    },
  });

  useEffect(() => {
    passData ? setEdit(true) : setEdit(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setProgress(progessValidate(pass));
  }, [pass]);
  const onSubmit = async (data) => {
    setDisable(true);
    const formData = {
      website: data.url,
      name: data.name,
      folder: data.folder,
      userName: data.userName,
      password: data.password,
      notes: data.notes,
      createdAt: passData?.createdAt,
    };
    try {
      const token = decryptData(accessToken);
      let url = "/secure_pass/addSite";
      if (edit) {
        url = "/secure_pass/editSite/" + passData?._id;
      }
      const response = await api.post(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });
      const resData = response.data;
      if (response.status === 201) {
        let updatedPasswords = [...passwords];
        if (edit) {
          const passIndex = passwords.findIndex((p) => p._id === passData._id);
          updatedPasswords[passIndex] = resData.password;
        } else {
          updatedPasswords = passwords.concat(resData.password);
        }
        setPasswords(updatedPasswords);
        toast({
          title: resData.message,
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
              <p>Your Site with credentials has been stored successfully!</p>
            </div>
          ),
        });
        setOpen(false);
        setDisable(false);
        form.reset();
        setProgress(0);
        navigate("/passwordVault");
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
    <DialogContent className="max-w-3xl pb-0 max-sm:w-11/12">
      <DialogHeader className="mt-4 py-2 bg-orange-600 px-2">
        <DialogTitle className="flex justify-between">
          <p className="font-bold text-xl px-2 text-white">
            {edit ? "Edit" : "Add"} Site Credentials
          </p>
        </DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full rounded-md"
        >
          {" "}
          <div className="sm:h-[65vh] overflow-y-scroll no-scrollbar">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem className="py-3 max-sm:py-2">
                  <FormControl>
                    <Input
                      id="url"
                      type="url"
                      disabled={disable}
                      placeholder="URL"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <div className="flex max-sm:flex-col py-3 max-sm:py-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-1/2 max-sm:w-full">
                    <FormControl>
                      <Input
                        id="name"
                        type="text"
                        disabled={disable}
                        placeholder="Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <div className="px-2 max-sm:py-2"></div>
              <FormField
                control={form.control}
                name="folder"
                render={({ field }) => (
                  <FormItem className="w-1/2 max-sm:w-full">
                    <FormControl>
                      <Input
                        id="Folder"
                        type="text"
                        disabled={disable}
                        placeholder="Folder"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex py-3 max-sm:flex-col max-sm:py-2">
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem className="w-1/2 max-sm:w-full">
                    <FormControl>
                      <Input
                        id="userName"
                        type="text"
                        disabled={disable}
                        placeholder="UserName"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <div className="px-2 max-sm:py-2"></div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-1/2 max-sm:w-full">
                    <FormControl>
                      <div>
                        <div className="flex relative">
                          <Input
                            disabled={disable}
                            type={toggle1 ? "text" : "password"}
                            placeholder="Password"
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
                        <div className="flex items-center">
                          <Progress
                            value={progress}
                            className="w-[100%] py-0"
                          />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem className="py-3 max-sm:py-2">
                  <FormControl>
                    <Textarea
                      disabled={disable}
                      rows="5"
                      placeholder="Notes"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <div className="pb-5">
              <Accordion
                type="single"
                collapsible
                className="w-full flex justify-start"
              >
                <AccordionItem value="item-1">
                  <AccordionTriggerRotate className="py-2">
                    Advanced Setting:
                  </AccordionTriggerRotate>
                  <AccordionContent className=" flex max-sm:flex-col mx-3 px-2 border-l dark:border-white py-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Require Master Password Reprompt
                      </label>
                    </div>
                    <div className="px-5"></div>
                    <div className="flex items-center space-x-2 max-sm:py-3">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        AutoLogin
                      </label>
                    </div>
                    <div className="px-5"></div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Disable Autofill
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <hr />
          <div className="flex justify-end py-3">
            <Button
              variant="destructive"
              disabled={disable}
              className="px-5 text-base font-semibold"
            >
              {disable ? (
                <>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Saving Data Please Wait!
                </>
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
};

export default AddPasswords;
