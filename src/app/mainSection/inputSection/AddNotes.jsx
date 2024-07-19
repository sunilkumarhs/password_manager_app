import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { IoDocumentAttach } from "react-icons/io5";
import { NotesFormSchema } from "@/utils/formSchema";

const AddNotes = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [disable, setDisable] = useState(false);
  const form = useForm({
    resolver: zodResolver(NotesFormSchema),
    defaultValues: {
      name: "",
      folder: "",
      notes: "",
    },
  });

  function onSubmit() {
    setDisable(true);
    toast({
      title: "Successfull Added!",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-700 p-4">
          <p>Your data has been stored successfully!</p>
        </div>
      ),
    });
    navigate("/dashBoard");
  }
  return (
    <DialogContent className="max-w-4xl pb-0 max-sm:w-11/12 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full rounded-md"
        >
          <DialogHeader className="mt-4 py-2 bg-orange-600 px-2">
            <DialogTitle className="flex justify-between">
              <p className="font-bold text-xl px-2 text-white">
                Add Secure Note
              </p>
            </DialogTitle>
          </DialogHeader>{" "}
          <div className="h-[65vh] overflow-y-scroll no-scrollbar flex max-sm:flex-col ">
            <div className="w-2/5 max-sm:w-full bg-zinc-100 dark:bg-zinc-700 px-3 py-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
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
              <div className="py-3"></div>
              <FormField
                control={form.control}
                name="folder"
                render={({ field }) => (
                  <FormItem className="w-full">
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
              <div className="py-2"></div>
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="relative">
                <Input id="picture" className="w-[65%] hidden" type="file" />
                <label
                  htmlFor="picture"
                  className="shadow-md text-lg border flex w-[65%] rounded-md py-1 dark:bg-zinc-600 cursor-pointer px-2 items-center"
                >
                  <IoDocumentAttach className="text-xl text-orange-600" />
                  <div className="px-2"></div>
                  Add Attachment
                </label>
              </div>
            </div>
            <div className="w-3/5 sm:p-3 max-sm:w-full">
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className=" max-sm:py-2">
                    <FormControl>
                      <Textarea
                        disabled={disable}
                        rows="17"
                        placeholder="Notes"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />{" "}
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

export default AddNotes;
