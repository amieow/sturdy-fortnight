import Typography from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";

export default function MyCourseItem() {
  return (
    <div className={"relative flex flex-row border-b-[1px] py-8 gap-4"}>
      <div className={"w-44 h-28 bg-primary rounded-xl"}></div>
      <div>
        <Typography size={"heading4"} as={"h4"}>
          UX Fundamental 101
        </Typography>
        <div className={"space-y4"}>
          <Typography size={"textS"} color={"muted"}>
            0% Complete<span className={"ml-2 text-accent"}>500/1000 *</span>
          </Typography>
          <Typography size={"textS"} color={"muted"}>
            Last chapter : Not started yet
          </Typography>
        </div>
      </div>
      <div className={"absolute right-4 bottom-4"}>
        <Button size={"medium"}>Learn Now</Button>
      </div>
    </div>
  );
}
