import {
	Selects,
	SelectContents,
	SelectGroups,
	SelectItems,
	SelectLabels,
	SelectTriggers,
	SelectValues,
} from "@/components/atoms/Select";

const SelectDateSort = () => (
	<Selects>
		<SelectTriggers className="w-[130px]">
			<SelectValues placeholder="Upload Date" />
		</SelectTriggers>
		<SelectContents>
			<SelectGroups>
				<SelectLabels>Upload Date</SelectLabels>
				<SelectItems value="4">4 Weeks ago</SelectItems>
				<SelectItems value="3">3 Weeks ago </SelectItems>
				<SelectItems value="2">2 Weeks ago</SelectItems>
				<SelectItems value="1">1 Weeks ago</SelectItems>
			</SelectGroups>
		</SelectContents>
	</Selects>
);

export default SelectDateSort;
