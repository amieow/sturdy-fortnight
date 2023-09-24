import React from "react";
import { CartCourseCardProps } from "./CartCourseCard";
import { Checkbox } from "../atoms/Checkbox";
import Typography from "../atoms/Typography";
import { IconChevronDown } from "../atoms/icon";
import { AccordionTrigger } from "../atoms/Accordion";

export default function ParentCartCourse(
	props: Pick<CartCourseCardProps, "title"> & {
		toggleAccordion: () => void;
		isSelected: boolean;
		reset: () => void;
	},
) {
	return (
		<div className="flex justify-between py-1 px-[10px] items-center">
			<div className="flex gap-[13px] items-center">
				<Checkbox
					onClick={props.reset}
					checked={props.isSelected}
					className=" w-[18px] h-[18px]"
				/>
				<Typography
					fontFamily={"poppins"}
					size={"textXl"}
					thick={"semibold"}>
					{props.title}
				</Typography>
			</div>
			<AccordionTrigger
				onClick={props.toggleAccordion}
				className=" w-9 h-9 flex items-center justify-center cursor-pointer">
				<IconChevronDown size={12} />
			</AccordionTrigger>
		</div>
	);
}
