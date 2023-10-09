import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectGroup,
	SelectSeparator,
	SelectLabel,
} from "./Select";
import Typography from "./Typography";
import SelectPopularity from "./SelectPopularity";
import SelectDateSort from "./SelectDateSort";
import SelectDurationSort from "./SelectDurationSort";
import SelectPriceSort from "./SelectPriceSort";

export default function SelectSortCourse() {
	return (
		<Select>
			<SelectTrigger className="gap-5 bg-transparent">
				<Typography>Sort By</Typography>
			</SelectTrigger>
			<SelectContent className=" bg-neutral07">
				<SelectGroup className="flex flex-col gap-4 w-fit ">
					<SelectLabel className=" text-left">Sort By</SelectLabel>
					<SelectPopularity />
					<span className="bg-white h-px w-full bg-opacity-25"></span>
					<SelectDateSort />
					<span className="bg-white h-0.5 w-full bg-opacity-25"></span>
					<SelectDurationSort />
					<span className="bg-white h-px w-full bg-opacity-25"></span>
					<SelectPriceSort />
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
