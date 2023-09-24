import { ReactNode } from "react";
import { Card } from "@/components/atoms/Card";

const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <main className={"px-4 lg:px-24 py-24 flex flex-row lg:gap-12"}>
    <SidebarDashboard />
    <div className={"flex-grow"}>{children}</div>
  </main>
);

const SidebarDashboard = () => (
  <Card className={"w-1/5 px-8 py-12 bg-neutral02 dark:bg-neutral06 h-fit"}>
    <ul className={"space-y-4"}>
      <li>Dashboard</li>
      <li>My Course</li>
      <li>Learning Report</li>
      <li>Settings</li>
      <li>Logout</li>
    </ul>
  </Card>
);

export default DashboardLayout;
