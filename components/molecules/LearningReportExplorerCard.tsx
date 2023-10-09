import Typography from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Card } from "@/components/atoms/Card";

const LearningReportExplorerCard = () => (
  <Card className={"p-6 w-full lg:w-[280px] space-y-2"}>
    <div className={"flex flex-row justify-between gap-4"}>
      <div>
        <Typography size={"textS"}>350 More Point to be</Typography>
        <Typography as={"h4"} size={"heading4"} thick={"bold"}>
          Explorer
        </Typography>
      </div>
      <Button variant={"primary"} className={"!bg-accent"} size={"large"}>
        <StarFilledIcon className={"text-white w-6 h-6"} />
      </Button>
    </div>
    <div className={"ml-4"}>
      <ul className={"list-disc text-textL text-neutral02"}>
        <li>Access to the discussion forum for interaction.</li>
        <li>Limited access to the resource library.</li>
        <li>5% discount to every course in this platform.</li>
      </ul>
    </div>
  </Card>
);

export default LearningReportExplorerCard;
