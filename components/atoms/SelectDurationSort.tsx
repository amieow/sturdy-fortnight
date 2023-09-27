import {
	Selects,
	SelectContents,
	SelectGroups,
	SelectItems,
	SelectLabels,
	SelectTriggers,
	SelectValues,
} from "@/components/atoms/Select";

const SelectDurationSort = () => (
	<Selects>
		<SelectTriggers className="w-[180px]">
			<SelectValues placeholder="Video Duration" />
		</SelectTriggers>
		<SelectContents>
			<SelectGroups>
				<SelectLabels>Video Duration</SelectLabels>
				<SelectItems value="1-2">1 - 2 Hours</SelectItems>
				<SelectItems value="2-4">2 - 4 Hours </SelectItems>
				<SelectItems value="4-8">4 - 8 Hours</SelectItems>
				<SelectItems value="12+">12+ Hours</SelectItems>
			</SelectGroups>
		</SelectContents>
	</Selects>
);

export default SelectDurationSort;
