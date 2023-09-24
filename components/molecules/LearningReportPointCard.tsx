import { Card } from "@/components/atoms/Card";
import Image from "next/image";
import Typography from "@/components/atoms/Typography";
import { Iconinfo } from "@/components/atoms/icon";
import { Button } from "@/components/atoms/Button";

const LearningReportPointCard = () => (
  <Card className={"flex-grow p-8"}>
    <div
      className={
        "flex flex-row max-w-fit justify-between items-start gap-4 bg-neutral05 rounded-xl p-3"
      }
    >
      <div className={"flex gap-3"}>
        <div
          className={
            "rounded-full w-12 h-12 bg-primary border-neutral01 border-[1px]"
          }
        >
          <Image
            width={150}
            height={150}
            src={"/profil.png"}
            alt={"Image Profil"}
          />
        </div>
        <div>
          <Typography size={"textS"} color={"muted"}>
            Your Point Today
          </Typography>
          <Typography size={"heading4"} thick={"bold"}>
            500
          </Typography>
        </div>
      </div>

      <Iconinfo className={"text-neutral03 w-6 h-6"} />
    </div>

    <div
      className={"rounded-xl w-full border-[1px] border-neutral03 h-4 mt-12"}
    ></div>
  </Card>
);

export default LearningReportPointCard;
