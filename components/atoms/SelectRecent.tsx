import {
	Selects,
	SelectContents,
	SelectGroups,
	SelectItems,
	SelectLabels,
	SelectTriggers,
	SelectValues,
} from "@/components/atoms/Select";

const SelectRecent = () => (
	<Selects>
		<SelectTriggers className="w-[180px]">
			<SelectValues placeholder="Recently Accessed" />
		</SelectTriggers>
		<SelectContents>
			<SelectGroups>
				<SelectLabels>Recently Accessed</SelectLabels>
				<SelectItems value="start">Start</SelectItems>
				<SelectItems value="finish">Finish</SelectItems>
				<SelectItems value="in progress">In Progress</SelectItems>
			</SelectGroups>
		</SelectContents>
	</Selects>
);

export default SelectRecent;
