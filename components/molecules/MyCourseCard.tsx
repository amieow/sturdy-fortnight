import { Card, CardContent, CardHeader } from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { Combobox } from "@/components/atoms/Combobox";
import MyCourseItem, {
  MyCourseItemType,
} from "@/components/molecules/MyCourseItem";
import { MY_COURSES } from "@/content/course";
import SelectRecent from "@/components/atoms/SelectRecent";
import SelectProgress from "@/components/atoms/SelectProgress";


export default function MyCourseCard({
  title,
  courses,
  isBordered,
}: {
  title: string;
  courses: MyCourseItemType[];
  isBordered?: boolean;
}) {
  return (
    <Card>
      <CardHeader className={"!space-y-4 !pb-0"}>
        <div className={"flex flex-row justify-between"}>
          <Typography as={"h4"} size={"heading4"} thick={"bold"}>
            {title}
          </Typography>
          <div className={"flex gap-2 items-center"}>
            <Typography>Sort By</Typography>
            <SelectProgress />

          </div>
        </div>
        <div className={"mt-4"}>{isBordered && <hr />}</div>
      </CardHeader>
      <CardContent className={"!pt-0"}>
        {courses.map((props, index) => (
          <MyCourseItem {...props} key={index} />
        ))}
      </CardContent>
    </Card>
  );
}
