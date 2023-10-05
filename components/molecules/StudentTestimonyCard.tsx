import { Card, CardContent } from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import Image from "next/image";

export type StudenTestimonyCardType = {
  name: string;
  testimony: string;
  imageUrl: string;
};
const StudentTestimonyCard = ({
  name,
  testimony,
  imageUrl,
}: StudenTestimonyCardType) => (
  <Card
    className={"px-4 md:px-14 py-8 !bg-neutral06 rounded-3xl min-w-[350px] h-[300px]"}
  >
    <CardContent className={"space-y-2 !p-0 max-w-xs md:max-w-sm text-center"}>
      <Image
        src={imageUrl}
        alt={name}
        width={100}
        height={100}
        className={"rounded-full mx-auto"}
      />
      <Typography size={"textXl"} thick={"bold"} color={"primary"}>
        {name}
      </Typography>
      <Typography size={"textM"} color={"default"}>
        {testimony}
      </Typography>
    </CardContent>
  </Card>
);

export default StudentTestimonyCard;
