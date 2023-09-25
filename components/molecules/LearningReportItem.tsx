import Image from "next/image";
import Typography from "@/components/atoms/Typography";
import { Progress } from "@/components/atoms/Progress";
import { IconStar } from "@/components/atoms/icon";

const LearningReportItem = () => (
  <div className={"rounded-2xl"}>
    <Image
      width={250}
      height={350}
      src={"/courses/course1.png"}
      alt={"Course"}
    />
    <Typography className={"text-center mx-auto my-4"} thick={"bold"}>
      UI/UX Design
    </Typography>
    <div className={"space-y-2"}>
      <Typography>John Cena S.Kom</Typography>
      <Progress value={50}></Progress>
      <div className={"flex justify-between items-center"}>
        <Typography size={"textS"}>50% Complete</Typography>
        <div className={"flex gap-2"}>
          <IconStar className={"w-4 h-4 text-primary"} />
          <IconStar className={"w-4 h-4 text-primary"} />
          <IconStar className={"w-4 h-4 text-primary"} />
          <IconStar className={"w-4 h-4 text-primary"} />
          <IconStar className={"w-4 h-4 text-primary"} />
        </div>
      </div>
      <Typography size={"textS"} color={"muted"} className={"flex justify-end"}>
        Leave a rating
      </Typography>
    </div>
  </div>
);

export default LearningReportItem;
