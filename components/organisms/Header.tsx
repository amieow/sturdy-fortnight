"use client";
import {
	IconCart,
	IconLogoVertical,
	IconSearch,
} from "@/components/atoms/icon";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../atoms/Popover";

const Header = () => {
	const navLinks: { title: string; link: string }[] = [
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
	const [openNavbar, setOpenNavbar] = useState(false);
	const ToggleOpenNavbar = () => setOpenNavbar((current) => !current);
	return (
		<header
			className={
				"flex flex-row justify-between container py-6 items-center  bg-neutral08 "
			}>
			<IconLogoVertical className=" w-[106px] h-[72px] max-sm:w-12 max-sm:h-8" />
			<nav className="max-md:hidden">
				<ul className={"flex flex-row gap-12 text-textXl font-light"}>
					{navLinks.map((props, index) => (
						<HeaderLink
							{...props}
							key={index}
						/>
					))}
				</ul>
			</nav>
			<div className=" gap-5 flex ">
				<div className={"flex max-sm:hidden flex-row gap-5 items-center "}>
					<IconSearch className={"h-6 w-6 text-neutral04"} />
					<Link href={"/cart"}>
						<IconCart className={"h-6 w-6 text-neutral04"} />
					</Link>
					<Link href={"/login/signin"}>
						<Button>Sign In</Button>
					</Link>
				</div>
				<Popover open={openNavbar}>
					<PopoverTrigger onClick={ToggleOpenNavbar}>
						<div
							className={cn(
								" p-3 flex flex-col gap-[3px] rounded-lg h-full w-10 md:hidden",
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
						<Link
							className="w-full sm:hidden"
							href={"/login/signin"}>
							<Button className="w-full">Sign In</Button>
						</Link>
					</PopoverContent>
				</Popover>
			</div>
		</header>
	);
};

const HeaderLink = ({
	link,
	title,
	isPhoneMode,
}: {
	link: string;
	title: string;
	isPhoneMode?: boolean;
}) => {
	const pathname = usePathname();
	return (
		<Link
			href={link}
			className={cn(" transition-all", {
				"text-primary": pathname == link,
				"hover:bg-neutral05 w-full h-10 text-center rounded-lg": isPhoneMode,
			})}>
			{title}
		</Link>
	);
};
export default Header;
