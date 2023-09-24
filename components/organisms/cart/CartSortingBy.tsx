"use client";

import Typography from "@/components/atoms/Typography";
import { IconChevronDown } from "@/components/atoms/icon";
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectSeparator,
	SelectValue,
} from "@/components/atoms/select";
import { useState } from "react";
const SORTING = ["price", "date"];
export const SelectSortBy = () => {
	const [select, setSelect] = useState(SORTING[0]);
	const [open, setOpen] = useState(false);
	return (
		<Select
			open={open}
			onOpenChange={(bol) => setOpen(bol)}
			onValueChange={(value) => setSelect(value)}>
			<SelectTrigger className=" bg-transparent flex border gap-[10px] border-neutral02 rounded-2xl">
				<Typography
					thick={"regular"}
					className=" font-light">
					<SelectValue placeholder={select} />
				</Typography>
				<IconChevronDown
					className={`${open ? "rotate-180" : ""} transition-all`}
				/>
			</SelectTrigger>
			<SelectContent position="popper">
				{SORTING.map((item, index) => (
					<div key={index}>
						<SelectItem value={item}>{item}</SelectItem>
						<SelectSeparator />
					</div>
				))}
			</SelectContent>
		</Select>
	);
};
