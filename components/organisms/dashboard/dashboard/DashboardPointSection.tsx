import Typography from "@/components/atoms/Typography";
import DashboardPointCard from "@/components/molecules/DashboardPointCard";
import LearningFrequencyCard from "@/components/molecules/LearningFrequencyCard";
import MyCourseCard from "@/components/molecules/MyCourseCard";

const DashboardPointSection = () => {
  return (
    <>
      <section className={"w-full"}>
        <Typography size={"heading2"} thick={"regular"} as={"h4"}>
          Welcome back, <span className={"text-primary font-bold"}>Wade!</span>{" "}
        </Typography>
        <div className={"flex flex-col lg:flex-row mt-4 gap-8 "}>
          <DashboardPointCard />
          <LearningFrequencyCard />
        </div>
      </section>
    </>
  );
};

export default DashboardPointSection;
