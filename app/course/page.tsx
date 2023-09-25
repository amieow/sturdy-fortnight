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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select";
import SelectPopularity from "@/components/atoms/SelectPopularity";
import SelectDateSort from "@/components/atoms/SelectDateSort";
import SelectDurationSort from "@/components/atoms/SelectDurationSort";
import SelectPriceSort from "@/components/atoms/SelectPriceSort";

const filters = [
  {
    title: "Category",
    checkboxes: [
      {
        title: "UI/UX Design & Research",
        value: "UI/UX Design & Research",
      },
      {
        title: "Web Development",
        value: "Web Development",
      },
    ],
  },
  {
    title: "Learning Path",
    checkboxes: [
      {
        title: "UX Research",
        value: "UX Research",
      },
      {
        title: "UI Designer",
        value: "UI Designer",
      },
      {
        title: "UX Designer",
        value: "UX Designer",
      },
      {
        title: "Front-End Developer",
        value: "Front-End Developer",
      },
      {
        title: "Back-End Developer",
        value: "Back-End Developer",
      },
    ],
  },
  {
    title: "Level",
    checkboxes: [
      {
        title: "Fundamental",
        value: "Fundamental",
      },
      {
        title: "Mastery",
        value: "Mastery",
      },
      {
        title: "Professional",
        value: "Professional",
      },
    ],
  },
  {
    title: "Price",
    checkboxes: [
      {
        title: "Paid",
        value: "Paid",
      },
      {
        title: "Free",
        value: "Free",
      },
    ],
  },
  {
    title: "Features",
    checkboxes: [
      {
        title: "Build Portfolio",
        value: "Build Portfolio",
      },
      {
        title: "Collaboration Case Study",
        value: "Collaboration Case Study",
      },
      {
        title: "Coaching Career",
        value: "Coaching Career",
      },
    ],
  },
  {
    title: "Video Duration",
    checkboxes: [
      {
        title: "1-2 Hour",
        value: "1-2 Hour",
      },
      {
        title: "2-4 Hour",
        value: "2-4 Hour",
      },
      {
        title: "4-8 Hour",
        value: "4-8 Hour",
      },
      {
        title: "8-12 Hour",
        value: "8-12 Hour",
      },
      {
        title: "12+ Hour",
        value: "12+ Hour",
      },
    ],
  },
];
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
        {filters.map((props, index) => (
          <Filter key={index} {...props} />
        ))}
      </div>
    </div>

    {/* COURSE */}
    <div>
      <div className={"flex gap-4 items-center"}>
        <Typography>Sort By</Typography>
        <SelectPopularity />
        <SelectDateSort />
        <SelectDurationSort />
        <SelectPriceSort />
      </div>
      <div className={"grid grid-cols-3 gap-8 mt-8 mb-16"}>
        {COURSE_MINI_CARD_CONTENT.map((props, index) => (
          <CourseMiniCard {...props} key={index} />
        ))}
      </div>
      <Pagination />
    </div>
  </main>
);

const Filter = ({
  title,
  checkboxes,
}: {
  title: string;
  checkboxes: { title: string; value: string }[];
}) => (
  <Accordion type="single" defaultValue={"Category"} collapsible>
    <AccordionItem value={title}>
      <AccordionTrigger className={"text-textXl bg-neutral08 px-4"}>
        {title}
      </AccordionTrigger>
      <AccordionContent>
        <div className={"flex flex-col gap-4 p-4"}>
          {checkboxes.map(({ value, title }, index) => (
            <div key={index}>
              <CheckboxWithText name={value} text={title} />
              <hr className={"mt-2"} />
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const Pagination = () => (
  <div className={"flex gap-4 text-center w-full justify-center"}>
    <div className={"bg-neutral06 px-2"}>{"<"}</div>
    <div className={"bg-neutral06 px-2"}>1</div>
    <div className={"bg-neutral06 px-2"}>2</div>
    <div className={"bg-neutral06 px-2"}>3</div>
    <div className={"bg-neutral06 px-2"}>4</div>
    <div className={"bg-neutral06 px-2"}>5</div>
    <div className={"bg-neutral06 px-2"}>{">"}</div>
  </div>
);
export default CoursePage;
