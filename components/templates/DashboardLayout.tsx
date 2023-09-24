"use client";
import { ReactNode } from "react";
import { Card } from "@/components/atoms/Card";
import HomeIcon from "@/public/icon/home.svg";
import DashboardMenuItem, {
  DashboardMenuType,
} from "@/components/molecules/DashboardMenuItem";
import {
  Iconexit,
  Iconhistory,
  IconSetting,
  IconStatistic,
} from "@/components/atoms/icon";

const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <main className={"px-4 lg:px-24 py-24 flex flex-row lg:gap-12"}>
    <SidebarDashboard />
    <div className={"flex-grow"}>{children}</div>
  </main>
);

const items: DashboardMenuType[] = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <HomeIcon className={"h-6 w-6"} />,
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
    handleClick: () => {},
    icon: <Iconexit className={"h-6 w-6"} />,
  },
];
const SidebarDashboard = () => {
  return (
    <Card
      className={
        "w-[250px] min-w-[250px] px-8 py-12 bg-neutral02 dark:bg-neutral06 h-fit rounded-sm"
      }
    >
      <ul className={"space-y-10"}>
        {items.map((props, index) => (
          <li key={index}>
            <DashboardMenuItem {...props} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default DashboardLayout;
