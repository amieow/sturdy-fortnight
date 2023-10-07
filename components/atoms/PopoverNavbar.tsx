"use client";
import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import Link from "next/link";
import { IconCart, IconLogoVertical } from "./icon";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { HeaderLink } from "../organisms/Header";
export const navLinks: { title: string; link: string }[] = [
	{
		title: "Home",
		link: "/",
	},
	{
		title: "Course",
		link: "/course",
	},
	{
		title: "Learning Path",
		link: "/learning-path",
	},
	{
		title: "About Us",
		link: "/about-us",
	},
];
export default function PopoverNavbar({ isLogin }: { isLogin: boolean }) {
	const [openNavbar, setOpenNavbar] = useState(false);
	const ToggleOpenNavbar = () => setOpenNavbar((current) => !current);
	return (
		<Popover open={openNavbar}>
			<PopoverTrigger
				className="md:hidden"
				onClick={ToggleOpenNavbar}>
				<div
					className={cn(
						" p-3 flex flex-col h-fit gap-[3px] rounded-lg w-10 md:hidden",
						{
							"bg-neutral06": openNavbar,
						},
					)}>
					{Array.from({ length: 3 }, (_, i) => (
						<span
							key={i}
							className="w-full h-[2px] bg-primary"></span>
					))}
				</div>
			</PopoverTrigger>
			<PopoverContent
				onClick={ToggleOpenNavbar}
				side="top"
				sideOffset={5}
				className=" bg-neutral06 md:hidden outline-none list-none border-none flex flex-col gap-6 justify-stretch items-center text-textXl font-light"
				align="end">
				<div className=" flex justify-center">
					<IconLogoVertical
						width={72}
						height={50}
					/>
				</div>
				<div className="w-full flex flex-col">
					{navLinks.map((props, index) => (
						<HeaderLink
							isPhoneMode
							{...props}
							key={index}
						/>
					))}
				</div>
				<Link
					className=" sm:hidden"
					href={"/cart"}>
					<IconCart className={"h-6 w-6 text-neutral04"} />
				</Link>
				{!isLogin && (
					<Link
						className="w-full sm:hidden"
						href={"/login/signin"}>
						<Button className="w-full">Sign In</Button>
					</Link>
				)}
			</PopoverContent>
		</Popover>
	);
}
