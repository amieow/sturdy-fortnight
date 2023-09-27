import {
	Selects,
	SelectContents,
	SelectGroups,
	SelectItems,
	SelectLabels,
	SelectTriggers,
	SelectValues,
} from "@/components/atoms/Select";

const SelectPopularity = () => (
	<Selects>
		<SelectTriggers className="w-[130px]">
			<SelectValues placeholder="Popularity" />
		</SelectTriggers>
		<SelectContents>
			<SelectGroups>
				<SelectLabels>Popularity</SelectLabels>
				<SelectItems value="5">5 Stars</SelectItems>
				<SelectItems value="4">4 Stars</SelectItems>
				<SelectItems value="3">3 Stars</SelectItems>
				<SelectItems value="2">2 Stars</SelectItems>
				<SelectItems value="1">1 Stars</SelectItems>
			</SelectGroups>
		</SelectContents>
	</Selects>
);

export default SelectPopularity;
