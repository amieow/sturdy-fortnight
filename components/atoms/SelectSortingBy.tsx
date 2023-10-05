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
	SelectGroupMod,
} from "@/components/atoms/ui/Select";
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
			<SelectTriggerMod className="border gap-[10px] bg-transparent border-neutral02 rounded-2xl">
				<Typography
					thick={"regular"}
					className=" font-light">
					<SelectValueMod placeholder={select} />
				</Typography>
			</SelectTriggerMod>
			<SelectContentMod position="popper">
				<SelectGroupMod>
					{SORTING.map((item, index) => (
						<div key={index}>
							<SelectItemMod value={item}>{item}</SelectItemMod>
							<SelectSeperatorMod />
						</div>
					))}
				</SelectGroupMod>
			</SelectContentMod>
		</SelectMod>
	);
};
