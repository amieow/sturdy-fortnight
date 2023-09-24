import { ReactNode } from "react";
import DashboardLayout from "@/components/templates/DashboardLayout";

const Layout = ({ children }: { children: ReactNode }) => (
  <DashboardLayout>{children}</DashboardLayout>
);

export default Layout;
