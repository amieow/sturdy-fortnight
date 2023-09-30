"use client";
import { useState } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "../../atoms/Accordion";
import Typography from "../../atoms/Typography";
import { cn } from "@/lib/utils";

type CURRICULUMSTYPE = {
	chapter: string;
	pelajaran: ("Quiz" | number)[];
};
const CURRICULUMS: CURRICULUMSTYPE[] = [
	{
		chapter: "Chapter 1: Getting Know About User Experience",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
	{
		chapter: "Chapter 2: User Experience Method & Framework",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
	{
		chapter: "Chapter 3: UX Process & Research",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
	{
		chapter: "Chapter 4: How to Validate User Experience ",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
	{
		chapter: "Chapter 5: UX Usability & Audit",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
	{
		chapter: "Chapter 6: How to create portfolio",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
	{
		chapter: "Chapter 7: Final Assesment",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
];
const OurCurriculums = () => {
	const [selected, setSelected] = useState("");
	return (
		<section
			className=" space-y-5"
			id="our-curriculum">
			<Typography
				size={"heading3"}
				thick="bold"
				as="h3">
				Our Curriculum
			</Typography>
			<Accordion
				collapsible
				className=" space-y-5 w-full"
				value={selected}
				onValueChange={(val) => setSelected(val)}
				type="single">
				{CURRICULUMS.map((curriculum, index) => (
					<AccordionItem
						value={curriculum.chapter}
						key={index}>
						<AccordionTrigger
							className={cn("bg-neutral06 rounded-lg px-5 text-xl font-inter", {
								"bg-neutral05 rounded-b-none": selected == curriculum.chapter,
							})}>
							{curriculum.chapter}
						</AccordionTrigger>
						<AccordionContent className=" bg-neutral05 divide-y divide-neutral01 py-4 px-5 border-t border-t-neutral01">
							{curriculum.pelajaran.map((pelajaran, index) => (
								<Typography
									fontFamily="inter"
									size={"textXl"}
									className={cn("w-full p-3 border-b border-b-neutral01", {
										"bg-neutral06 border-b-0": pelajaran == "Quiz",
									})}
									key={index}>
									{pelajaran == "Quiz" ? pelajaran : `Lesson ${pelajaran}`}
								</Typography>
							))}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};
export { OurCurriculums };
