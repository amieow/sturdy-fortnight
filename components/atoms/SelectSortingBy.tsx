"use client";

import Typography from "@/components/atoms/Typography";
import { IconChevronDown } from "@/components/atoms/icon";
import {
	Selects,
	SelectContents,
	SelectSeparators,
	SelectItems,
	SelectTriggers,
	SelectValues,
} from "@/components/atoms/Select";
import { useState } from "react";
const SORTING = ["price", "date"];
export const SelectSortBy = () => {
	const [select, setSelect] = useState(SORTING[0]);
	const [open, setOpen] = useState(false);
	return (
		<Selects
			open={open}
			onOpenChange={(bol) => setOpen(bol)}
			value={select}
			onValueChange={(value) => setSelect(value)}>
			<SelectTriggers className="border gap-[10px] border-neutral02 rounded-2xl">
				<Typography
					thick={"regular"}
					className=" font-light">
					<SelectValues placeholder={select} />
				</Typography>
				<IconChevronDown
					width={24}
					className={`${open ? "rotate-180" : ""} transition-all`}
				/>
			</SelectTriggers>
			<SelectContents position="popper">
				{SORTING.map((item, index) => (
					<div key={index}>
						<SelectItems value={item}>{item}</SelectItems>
						<SelectSeparators />
					</div>
				))}
			</SelectContents>
		</Selects>
	);
};
