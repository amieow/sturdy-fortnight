import { Card } from "@/components/atoms/Card";
import Image from "next/image";
import Typography from "@/components/atoms/Typography";
import { Iconinfo, IconStar } from "@/components/atoms/icon";
import { Button } from "@/components/atoms/Button";
import { StarFilledIcon } from "@radix-ui/react-icons";

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
      className={
        "rounded-xl w-full border-[1px] border-neutral03 h-6 mt-12 flex gap-4"
      }
    >
      {[1, 1, 1, 1, 1].map((item, index) => (
        <div key={index} className={"relative w-[100px]"}>
          <div
            className={
              "w-6 h-6 bg-primary rounded-full mx-auto items-center justify-center flex "
            }
          >
            <StarFilledIcon className={"w-4 h-4"} />
          </div>
          <div className={"absolute mx-auto mt-2 text-center w-full"}>
            <Typography>1000</Typography>
            <Typography size={"textXl"} as={"h4"}>
              Explorer
            </Typography>
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export default LearningReportPointCard;
