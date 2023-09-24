import { Card, CardContent, CardHeader } from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { Combobox } from "@/components/atoms/Combobox";
import MyCourseItem from "@/components/molecules/MyCourseItem";

export default function MyCourseCard() {
  return (
    <Card>
      <CardHeader className={"!space-y-4 !pb-0"}>
        <div className={"flex flex-row justify-between"}>
          <Typography as={"h4"} size={"heading4"} thick={"bold"}>
            My Course
          </Typography>
          <div className={"flex gap-2 items-center"}>
            <Typography>Sort By</Typography>
            <Combobox />
          </div>
        </div>
        <div className={"mt-4"}>
          <hr />
        </div>
      </CardHeader>
      <CardContent className={"!pt-0"}>
        <MyCourseItem />
        <MyCourseItem />
        <MyCourseItem />
      </CardContent>
    </Card>
  );
}
