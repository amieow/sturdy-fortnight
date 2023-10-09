"use client";
import {
	IconCart,
	IconLogoVertical,
	IconNotification,
	IconSearch,
} from "@/components/atoms/icon";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IsLoginedUser, cn } from "@/lib/utils";
import PopoverNavbar, { navLinks } from "../atoms/PopoverNavbar";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../atoms/Popover";
import { SidebarDashboard } from "../templates/DashboardLayout";

const Header = () => {
	const isLogin = IsLoginedUser().status;
	const [loading, setLoading] = useState(true);
	const [openNavbar, setOpenNavbar] = useState(false);
	const ToggleOpenNavbar = () => setOpenNavbar((current) => !current);
	const [openNavbarProfile, setOpenNavbarProfile] = useState(false);
	const ToggleOpenNavbarProfile = () =>
		setOpenNavbarProfile((current) => !current);
	useEffect(() => {
		setLoading(false);
	}, [setLoading]);

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
			<div className=" gap-5 flex items-center ">
				<div className={"flex max-sm:hidden flex-row gap-5 items-center "}>
					<IconSearch className={"h-6 w-6 text-neutral04"} />
					<Link href={"/cart"}>
						<IconCart className={"h-6 w-6 text-neutral04"} />
					</Link>
					{!loading && isLogin && (
						<IconNotification
							width={24}
							height={24}
						/>
					)}
					{!loading && !isLogin && (
						<>
							<Link href={"/login/signin"}>
								<Button>Sign In</Button>
							</Link>
						</>
					)}
				</div>
				{!loading && isLogin && (
					<Popover
						onOpenChange={ToggleOpenNavbarProfile}
						open={!openNavbar && openNavbarProfile}>
						<PopoverTrigger asChild>
							<Image
								onClick={() => null}
								src={"/profil.png"}
								alt=""
								className=" cursor-pointer max-sm:w-7 border border-neutral01 rounded-full max-sm:h-7"
								width={42}
								height={42}
							/>
						</PopoverTrigger>
						<PopoverContent
							className=" border-0 p-0 pt-1"
							side={"bottom"}>
							<SidebarDashboard />
						</PopoverContent>
					</Popover>
				)}
				<PopoverNavbar
					openNavbar={openNavbar && !openNavbarProfile}
					toggle={ToggleOpenNavbar}
					isLogin={isLogin}
				/>
			</div>
		</header>
	);
};

export const HeaderLink = ({
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
