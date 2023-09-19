import Typography from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";

const LearningPathFilterSection = () => (
  <section className={"pt-20 pb-12 px-4 md:px-24"}>
    <Typography size={"heading1"} as={"h1"} thick={"bold"}>
      Learning Paths
    </Typography>
    <div className={"flex flex-row gap-20 mt-8"}>
      <Typography
        size={"heading4"}
        as={"h6"}
        thick={"bold"}
        className={"max-w-lg"}
      >
        What are you waiting for, now is the time to develop your skills
        according to your learning interests.
      </Typography>
      <div className={"flex flex-row gap-8 w-full"}>
        <Button variant={"primary"} size={"extraLarge"} className={"w-1/2"}>
          Website Development
        </Button>
        <Button variant={"secondary"} size={"extraLarge"} className={"w-1/2"}>
          UI/UX Design & Research
        </Button>
      </div>
    </div>
  </section>
);

export default LearningPathFilterSection;
