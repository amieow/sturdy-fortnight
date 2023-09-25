import MyCourseCard from "@/components/molecules/MyCourseCard";
import DashboardNotificationCard from "@/components/molecules/DashboardNotificationCard";
import { MY_COURSE_OVERVIEWS } from "@/content/course";

export default function DashboardMyCourseSection() {
  return (
    <section className={"flex flex-row mt-8 gap-8 "}>
      {/*COURSE CARD*/}
      <div className={"w-2/3"}>
        <MyCourseCard
          title={"My Course"}
          courses={MY_COURSE_OVERVIEWS}
          isBordered={false}
        />
      </div>
      {/*NOTIFICATION*/}
      <div className={"w-1/3"}>
        <DashboardNotificationCard />
      </div>
    </section>
  );
}
