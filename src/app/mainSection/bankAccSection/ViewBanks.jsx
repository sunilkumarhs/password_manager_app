/* eslint-disable react/prop-types */
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { Textarea } from "@/components/ui/textarea";
import { BankFormSchema } from "@/utils/formSchema";
import { decFetchedData } from "@/utils/securingData";
import GlobalContext from "@/contexts/GlobalContext";

const ViewBanks = ({ bankData }) => {
  const { userId } = useContext(GlobalContext);
  const form = useForm({
    resolver: zodResolver(BankFormSchema),
    defaultValues: {
      name: bankData ? bankData?.name : "",
      folder: bankData ? bankData?.folder : "",
      bankName: bankData ? decFetchedData(bankData?.bankName, userId) : "",
      accType: bankData ? decFetchedData(bankData?.accType, userId) : "",
      accNumber: bankData ? decFetchedData(bankData?.accNumber, userId) : "",
      IFSCCode: bankData ? decFetchedData(bankData?.ifscCode, userId) : "",
      branchCode: bankData ? decFetchedData(bankData?.branchCode, userId) : "",
      branchPhone: bankData
        ? decFetchedData(bankData?.branchPhone, userId)
        : "",
      notes: bankData ? decFetchedData(bankData?.notes, userId) : "",
    },
  });
  return (
    <DialogContent className="max-w-4xl pb-0 max-sm:w-11/12 ">
      <Form {...form}>
        <form className="w-full rounded-md">
          <DialogHeader className="mt-4 py-2 bg-orange-600 px-2">
            <DialogTitle className="flex justify-between">
              <p className="font-bold text-xl px-2 text-white">
                {" "}
                Bank Account Details
              </p>
            </DialogTitle>
          </DialogHeader>{" "}
          <div className="h-[65vh] flex max-sm:flex-col">
            <div className="w-2/5 max-sm:w-full bg-zinc-100 dark:bg-zinc-700 px-3 py-5">
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        id="name"
                        type="text"
                        disabled={true}
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
                name="folder"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        id="Folder"
                        type="text"
                        disabled={true}
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
                        <Checkbox id="terms" disabled={true} />
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
            </div>
            <div className="w-3/5 max-sm:py-2 sm:p-3 max-sm:w-full h-[65vh] overflow-y-scroll no-scrollbar">
              <div className="flex max-sm:flex-col py-2">
                <FormField
                  name="bankName"
                  render={({ field }) => (
                    <FormItem className="w-3/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          id="bankName"
                          type="text"
                          disabled={true}
                          placeholder="Enter the Bank Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <div className="px-2 max-sm:py-2"></div>
                <FormField
                  name="accType"
                  render={({ field }) => (
                    <FormItem className="w-2/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          id="accType"
                          type="text"
                          disabled={true}
                          placeholder="Enter Account Type"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex max-sm:flex-col py-3">
                <FormField
                  name="accNumber"
                  render={({ field }) => (
                    <FormItem className="w-3/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          id="accNumber"
                          type="number"
                          disabled={true}
                          placeholder="Enter the account number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <div className="px-2 max-sm:py-2"></div>
                <FormField
                  name="branchCode"
                  render={({ field }) => (
                    <FormItem className="w-2/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          id="branchCode"
                          type="text"
                          disabled={true}
                          placeholder="Enter the branch code"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex max-sm:flex-col py-2">
                <FormField
                  name="IFSCCode"
                  render={({ field }) => (
                    <FormItem className="w-3/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          id="IFSCCode"
                          type="text"
                          disabled={true}
                          placeholder="Enter the IFSC code"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <div className="px-2 max-sm:py-2"></div>
                <FormField
                  name="branchPhone"
                  render={({ field }) => (
                    <FormItem className="w-2/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          id="branchPhone"
                          type="number"
                          disabled={true}
                          placeholder="Enter branch phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                name="notes"
                render={({ field }) => (
                  <FormItem className=" py-3">
                    <FormControl>
                      <Textarea
                        disabled={true}
                        rows="5"
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
        </form>
      </Form>
    </DialogContent>
  );
};

export default ViewBanks;
