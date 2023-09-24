import DashboardPointSection from "@/components/organisms/dashboard/dashboard/DashboardPointSection";
import DashboardMyCourseSection from "@/components/organisms/dashboard/dashboard/DashboardMyCourseSection";
import Typography from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Iconinfo, IconStar } from "@/components/atoms/icon";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Card } from "@/components/atoms/Card";
import Image from "next/image";
import LearningReportPointCard from "@/components/molecules/LearningReportPointCard";
import LearningReportExplorerCard from "@/components/molecules/LearningReportExplorerCard";
import { Combobox } from "@/components/atoms/Combobox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/Accordion";

const LearningReportPage = () => {
  return (
    <>
      {/* SECTION 1 */}
      <section className={"flex flex-row gap-8 "}>
        {/*POINTS*/}
        <LearningReportPointCard />
        {/* EXPLORER */}
        <LearningReportExplorerCard />
      </section>
      <section className={"mt-8"}>
        <div className={"flex justify-between items-center"}>
          <div className={"space-y-2"}>
            <Typography>Sort By</Typography>
            <Combobox items={[]} textDefault={"Recently accessed"} />
          </div>
          <div className={"space-y-2"}>
            <Typography>Filter By</Typography>
            <div className={"flex gap-2"}>
              <Combobox items={[]} textDefault={"Categories"} />
              <Combobox items={[]} textDefault={"Progress"} />
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};

export default LearningReportPage;
