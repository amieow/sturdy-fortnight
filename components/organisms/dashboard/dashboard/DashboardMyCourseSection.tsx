import MyCourseCard from "@/components/molecules/MyCourseCard";
import DashboardNotificationCard from "@/components/molecules/DashboardNotificationCard";

export default function DashboardMyCourseSection() {
  return (
    <div className={"flex flex-row mt-8 gap-8 "}>
      {/*COURSE CARD*/}
      <div className={"w-2/3"}>
        <MyCourseCard />
      </div>
      {/*NOTIFICATION*/}
      <div className={"w-1/3"}>
        <DashboardNotificationCard />
      </div>
    </div>
  );
}
