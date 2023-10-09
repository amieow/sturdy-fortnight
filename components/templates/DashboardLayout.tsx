"use client";
import { ReactNode } from "react";
import { Card } from "@/components/atoms/Card";
import DashboardMenuItem, {
	DashboardMenuType,
} from "@/components/molecules/DashboardMenuItem";
import {
	Iconexit,
	Iconhistory,
	Iconhome,
	IconSetting,
	IconStatistic,
} from "@/components/atoms/icon";
import { removeCookie } from "@/lib/cookie";
import DashboardNavMobile from "../organisms/DashboardNavMobile";

const DashboardLayout = ({ children }: { children: ReactNode }) => (
	<>
		<DashboardNavMobile />
		<main className={" container flex flex-row lg:gap-12"}>
			<SidebarDashboard hideOnMobile />
			<div className={"flex-grow"}>{children}</div>
		</main>
	</>
);
const DASHBOARD_MENU: DashboardMenuType[] = [
	{
		title: "Dashboard",
		link: "/dashboard",
		icon: <Iconhome className={"h-6 w-6"} />,
	},
	{
		title: "My Course",
		link: "/dashboard/my-course",
		icon: <Iconhistory className={"h-6 w-6"} />,
	},
	{
		title: "Learning Report",
		link: "/dashboard/learning-report",
		icon: <IconStatistic className={"h-6 w-6"} />,
	},
	{
		title: "Settings",
		link: "/dashboard/settings",
		icon: <IconSetting className={"h-6 w-6"} />,
	},
	{
		title: "Log Out",
		handleClick: () => LogOut(),
		icon: <Iconexit className={"h-6 w-6"} />,
	},
];
const LogOut = () => {
	removeCookie("email");
	removeCookie("password");
	window.location.reload();
};
const SidebarDashboard = ({ hideOnMobile }: { hideOnMobile?: boolean }) => {
	return (
		<Card
			className={`${
				hideOnMobile ? "hidden lg:block" : ""
			} w-[250px] min-w-[250px] px-8 py-12 bg-neutral02 dark:bg-neutral06 h-fit rounded-sm`}>
			<ul className={"space-y-10"}>
				{DASHBOARD_MENU.map((props, index) => (
					<li key={index}>
						<DashboardMenuItem {...props} />
					</li>
				))}
			</ul>
		</Card>
	);
};
export { SidebarDashboard, DASHBOARD_MENU };
export default DashboardLayout;
