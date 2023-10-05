"use client";
import { Button } from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import {
	IconFacebookColored,
	IconGoogle,
	IconLinkedIn,
} from "@/components/atoms/icon";
import { cn } from "@/lib/utils";
import React from "react";

const OTHER_LOGIN_METHOD = [
	{
		icon: IconGoogle,
		title: "Google",
		classname: "bg-red-600 hover:bg-red-800",
	},
	{
		icon: IconFacebookColored,
		title: "Facebook",
		classname: "bg-blue-700 hover:bg-blue-900",
	},
	{
		icon: IconLinkedIn,
		title: "Linkedin",
		classname: "bg-blue-500 hover:bg-blue-700",
	},
];

function OtherLoginMethod() {
	return (
		<div className="flex flex-col gap-3 w-full">
			<Typography
				className="text-center text-opacity-50"
				color="muted"
				fontFamily="roboto">
				or
			</Typography>
			<div className="flex max-sm:flex-col gap-6 justify-between">
				{OTHER_LOGIN_METHOD.map((item, index) => (
					<Button
						className={cn(
							"gap-[10px] px-6 py-2 rounded-3xl flex items-center",
							item.classname,
						)}
						key={index}>
						<item.icon
							width={16}
							height={16}
						/>
						<Typography
							fontFamily="roboto"
							thick="semibold">
							{item.title}
						</Typography>
					</Button>
				))}
			</div>
		</div>
	);
}

export default OtherLoginMethod;
