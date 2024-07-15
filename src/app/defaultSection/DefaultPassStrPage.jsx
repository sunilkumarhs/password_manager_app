import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerDown,
} from "@/components/ui/accordion";
import { encPassPoints } from "../../utils/constants";

const DefaultPassStrPage = () => {
  return (
    <div>
      <Card className="w-full rounded-none">
        <CardHeader className="lg:px-28 md:px-16 sm:px-10 xl:px-44 pt-32 max-sm:items-center">
          <CardTitle className="sm:text-5xl text-3xl xl:text-6xl font-bold text-orange-600">
            Encrypted Password Storage
          </CardTitle>
          <div className="max-sm:py-2 py-3"></div>
          {encPassPoints.map((point, index) => (
            <Accordion type="single" collapsible className="w-full" key={index}>
              <AccordionItem value="item-1">
                <AccordionTriggerDown>{point.title}</AccordionTriggerDown>
                <AccordionContent className="mx-2 px-2 border-l dark:border-white py-2">
                  {point.content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </CardHeader>
      </Card>
    </div>
  );
};

export default DefaultPassStrPage;
