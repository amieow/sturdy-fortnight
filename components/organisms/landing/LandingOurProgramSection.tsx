import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import OurProgramCard, {
  OurProgramCardType,
} from "@/components/molecules/OurProgramCard";

const tasks: OurProgramCardType[] = [
  {
    title: "Final Task",
    subtitle:
      "You can include tasks from us as valuable additions to your portfolio.",
  },
  {
    title: "School Points",
    subtitle:
      "Exchange your School Points for your upcoming course or our exclusive vouchers.",
  },
  {
    title: "Community Forum",
    subtitle:
      "Connect with individuals across the globe and broaden your network",
  },
  {
    title: "Job Connector",
    subtitle: "Realize your dream job today with Job Connector!",
  },
];
const LandingOurProgramSection = () => (
  <section className={"bg-neutral02 dark:bg-neutral07"}>
    <div
      className={
        "container py-8 md:py-16 space-y-10 mx-8 md:mx-24 flex flex-col md:flex-row gap-4 md:gap-24"
      }
    >
      <div className={"md:basis-1/2 space-y-8"}>
        <Typography
          size={"heading1"}
          fontFamily={"inter"}
          color={"primary"}
          as={"h2"}
          thick={"bold"}
        >
          What’s on Our Program?
        </Typography>

        <div className={"space-y-8 max-w-sm md:max-w-full"}>
          {tasks.map((props, index) => (
            <OurProgramCard {...props} key={index} />
          ))}
        </div>
      </div>
      <div
        className={
          "md:basis-1/2 relative  h-[150px] md:h-auto !m-0 w-[calc(100vw-32px)] md:w-full"
        }
      >
        <Image fill src={"/our-program.png"} alt={"Our Program Image"} />
      </div>
    </div>
  </section>
);

export default LandingOurProgramSection;
