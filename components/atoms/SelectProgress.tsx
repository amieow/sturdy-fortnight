import {
	Selects,
	SelectContents,
	SelectGroups,
	SelectItems,
	SelectLabels,
	SelectTriggers,
	SelectValues,
} from "@/components/atoms/Select";

const SelectProgress = () => (
	<Selects>
		<SelectTriggers className="w-[130px]">
			<SelectValues placeholder="Progress" />
		</SelectTriggers>
		<SelectContents>
			<SelectGroups>
				<SelectLabels>Progress</SelectLabels>
				<SelectItems value="start">Start</SelectItems>
				<SelectItems value="finish">Finish</SelectItems>
				<SelectItems value="in progress">In Progress</SelectItems>
			</SelectGroups>
		</SelectContents>
	</Selects>
);

export default SelectProgress;
