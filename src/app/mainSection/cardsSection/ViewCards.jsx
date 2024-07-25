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
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CardFormSchema } from "@/utils/formSchema";
import GlobalContext from "@/contexts/GlobalContext";
import { decFetchedData } from "@/utils/securingData";

const ViewCards = ({ cardData }) => {
  const { userId } = useContext(GlobalContext);
  const form = useForm({
    resolver: zodResolver(CardFormSchema),
    defaultValues: {
      name: cardData ? cardData?.name : "",
      folder: cardData ? cardData?.folder : "",
      cardName: cardData ? decFetchedData(cardData?.cardName, userId) : "",
      type: cardData ? decFetchedData(cardData?.type, userId) : "",
      cardNumber: cardData ? decFetchedData(cardData?.cardNumber, userId) : "",
      CVVCode: cardData ? decFetchedData(cardData?.cvvCode, userId) : "",
      startDate: cardData ? decFetchedData(cardData?.startDate, userId) : "",
      startYear: cardData ? decFetchedData(cardData?.startYear, userId) : "",
      endDate: cardData ? decFetchedData(cardData?.endDate, userId) : "",
      endYear: cardData ? decFetchedData(cardData?.endYear, userId) : "",
      notes: cardData ? decFetchedData(cardData?.notes, userId) : "",
    },
  });
  return (
    <DialogContent className="max-w-4xl pb-0 max-sm:w-11/12 ">
      <Form {...form}>
        <form className="w-full rounded-md">
          <DialogHeader className="mt-4 py-2 bg-orange-600 px-2">
            <DialogTitle className="flex justify-between">
              <p className="font-bold text-xl px-2 text-white">
                Payment Card Details
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
                  name="cardName"
                  render={({ field }) => (
                    <FormItem className="w-3/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          id="cardName"
                          type="text"
                          disabled={true}
                          placeholder="Enter the Name In Card"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <div className="px-2 max-sm:py-2"></div>
                <FormField
                  name="type"
                  render={({ field }) => (
                    <FormItem className="w-2/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          id="type"
                          type="text"
                          disabled={true}
                          placeholder="Enter Card Type"
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
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem className="w-3/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          id="cardNumber"
                          type="number"
                          disabled={true}
                          placeholder="Enter the card number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <div className="px-2 max-sm:py-2"></div>
                <FormField
                  name="CVVCode"
                  render={({ field }) => (
                    <FormItem className="w-2/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          id="CVVCode"
                          type="number"
                          disabled={true}
                          placeholder="Enter the CVV code"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex py-2">
                <FormField
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="w-3/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          type="text"
                          disabled={true}
                          placeholder="Select Month"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                    // <FormItem className="w-3/5 max-sm:w-full">
                    //   <FormControl>
                    //     <Select>
                    //       <SelectTrigger className="w-full">
                    //         <SelectValue
                    //           placeholder="Select Month"
                    //           {...field}
                    //         />
                    //       </SelectTrigger>
                    //       <SelectContent className="h-[15rem]">
                    //         <SelectGroup>
                    //           <SelectLabel>Month</SelectLabel>
                    //           {months.map((m) => (
                    //             <SelectItem value={m} key={m}>
                    //               {m}
                    //             </SelectItem>
                    //           ))}
                    //         </SelectGroup>
                    //       </SelectContent>
                    //     </Select>
                    //   </FormControl>
                    //   <FormMessage className="text-red-600" />
                    // </FormItem>
                  )}
                />
                <div className="px-2"></div>
                <FormField
                  name="startYear"
                  render={({ field }) => (
                    <FormItem className="w-2/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          id="startYear"
                          type="number"
                          disabled={true}
                          placeholder="Enter Year"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex py-3">
                <FormField
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="w-3/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          type="text"
                          disabled={true}
                          placeholder="Select Month"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                    // <FormItem className="w-3/5 max-sm:w-full">
                    //   <FormControl>
                    //     <Select>
                    //       <SelectTrigger className="w-full">
                    //         <SelectValue
                    //           placeholder="Select Month"
                    //           {...field}
                    //         />
                    //       </SelectTrigger>
                    //       <SelectContent className="h-[15rem]">
                    //         <SelectGroup>
                    //           <SelectLabel>Month</SelectLabel>
                    //           {months.map((m) => (
                    //             <SelectItem value={m} key={m}>
                    //               {m}
                    //             </SelectItem>
                    //           ))}
                    //         </SelectGroup>
                    //       </SelectContent>
                    //     </Select>
                    //   </FormControl>
                    //   <FormMessage className="text-red-600" />
                    // </FormItem>
                  )}
                />
                <div className="px-2"></div>
                <FormField
                  name="endYear"
                  render={({ field }) => (
                    <FormItem className="w-2/5 max-sm:w-full">
                      <FormControl>
                        <Input
                          id="endYear"
                          type="number"
                          disabled={true}
                          placeholder="Enter Year"
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

export default ViewCards;
