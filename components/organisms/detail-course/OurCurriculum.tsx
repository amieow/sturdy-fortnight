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
import { CURRICULUMS } from "@/content/curriculums";
const OurCurriculums = () => {
	const [selected, setSelected] = useState("");
	return (
		<section
			className=" space-y-5 py-8"
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
							className={cn(
								"bg-neutral06 text-left rounded-lg px-5 text-xl font-inter",
								{
									"bg-neutral05 rounded-b-none": selected == curriculum.chapter,
								},
							)}>
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
