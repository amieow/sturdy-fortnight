import { Card, CardContent } from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";

export type OurProgramCardType = {
  title: string;
  subtitle: string;
};
const OurProgramCard = ({ title, subtitle }: OurProgramCardType) => (
  <Card className={"px-4 md:px-14 py-8 !bg-neutral08"}>
    <CardContent className={"space-y-1 !p-0 max-w-xs md:max-w-sm"}>
      <Typography size={"heading4"} thick={"bold"}>
        {title}
      </Typography>
      <Typography size={"textL"}>{subtitle}</Typography>
    </CardContent>
  </Card>
);

export default OurProgramCard;
