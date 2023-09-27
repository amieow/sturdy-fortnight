"use client";

import Typography from "@/components/atoms/Typography";
import { IconChevronDown } from "@/components/atoms/icon";
import {
	SelectMod,
	SelectContentMod,
	SelectSeperatorMod,
	SelectItemMod,
	SelectTriggerMod,
	SelectValueMod,
} from "@/components/atoms/Select";
import { useState } from "react";
const SORTING = ["price", "date"];
export const SelectSortBy = () => {
	const [select, setSelect] = useState(SORTING[0]);
	const [open, setOpen] = useState(false);
	return (
		<SelectMod
			open={open}
			onOpenChange={(bol) => setOpen(bol)}
			value={select}
			onValueChange={(value) => setSelect(value)}>
			<SelectTriggerMod className="border gap-[10px] border-neutral02 rounded-2xl">
				<Typography
					thick={"regular"}
					className=" font-light">
					<SelectValueMod placeholder={select} />
				</Typography>
				<IconChevronDown
					width={24}
					className={`${open ? "rotate-180" : ""} transition-all`}
				/>
			</SelectTriggerMod>
			<SelectContentMod position="popper">
				{SORTING.map((item, index) => (
					<div key={index}>
						<SelectItemMod value={item}>{item}</SelectItemMod>
						<SelectSeperatorMod />
					</div>
				))}
			</SelectContentMod>
		</SelectMod>
	);
};
