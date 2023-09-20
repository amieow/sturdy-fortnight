import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/Accordion";
import { CheckboxWithText } from "@/components/atoms/Checkbox";
import Typography from "@/components/atoms/Typography";
import CourseMiniCard from "@/components/molecules/CourseMiniCard";
import { COURSE_MINI_CARD_CONTENT } from "@/content/course";
import { Combobox } from "@/components/atoms/Combobox";

const CoursePage = () => (
  <main className="flex flex-row py-12 px-24 bg-neutral01 dark:bg-neutral08 gap-12">
    {/*FILTERS*/}
    <div
      className={
        "bg-neutral06 border-[0.5px] border-neutral01 rounded-2xl py-8 px-4 min-w-[280px]"
      }
    >
      <Typography size={"heading4"} className={"font-bold"}>
        Filters
      </Typography>
      <div className={"mt-6 space-y-2"}>
        <Filter />
        <Filter />
        <Filter />
        <Filter />
      </div>
    </div>

    {/* COURSE */}
    <div>
      <div className={"flex gap-4 items-center"}>
        <Typography>Sort By</Typography>
        <Combobox />
        <Combobox />
        <Combobox />
        <Combobox />
      </div>
      <div className={"grid grid-cols-3 gap-8 mt-8 mb-16"}>
        {COURSE_MINI_CARD_CONTENT.map((props, index) => (
          <CourseMiniCard {...props} key={index} />
        ))}
      </div>
      <div className={"flex gap-4 text-center w-full justify-center"}>
        <div className={"bg-neutral06 px-2"}>{"<"}</div>
        <div className={"bg-neutral06 px-2"}>1</div>
        <div className={"bg-neutral06 px-2"}>2</div>
        <div className={"bg-neutral06 px-2"}>3</div>
        <div className={"bg-neutral06 px-2"}>4</div>
        <div className={"bg-neutral06 px-2"}>5</div>
        <div className={"bg-neutral06 px-2"}>{">"}</div>
      </div>
    </div>
  </main>
);

const Filter = () => (
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className={"text-textXl bg-neutral08 px-4"}>
        Category
      </AccordionTrigger>
      <AccordionContent>
        <div className={"flex flex-col gap-4 p-4"}>
          <CheckboxWithText name={"1"} text={"UI/UX Design & Research"} />
          <hr />
          <CheckboxWithText name={"2"} text={"UI/UX Design & Research"} />
          <hr />
          <CheckboxWithText name={"3"} text={"UI/UX Design & Research"} />
          <hr />
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default CoursePage;
