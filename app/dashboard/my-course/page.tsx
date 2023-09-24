import DashboardPointSection from "@/components/organisms/dashboard/dashboard/DashboardPointSection";
import DashboardMyCourseSection from "@/components/organisms/dashboard/dashboard/DashboardMyCourseSection";
import MyCourseCard from "@/components/molecules/MyCourseCard";
import { MY_COURSES } from "@/content/course";

const MyCoursePage = () => {
  return (
    <MyCourseCard title={"My Course"} isBordered={true} courses={MY_COURSES} />
  );
};

export default MyCoursePage;
