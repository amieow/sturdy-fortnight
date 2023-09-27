import {
	Selects,
	SelectContents,
	SelectGroups,
	SelectItems,
	SelectLabels,
	SelectTriggers,
	SelectValues,
} from "@/components/atoms/Select";

const SelectCategories = () => (
	<Selects>
		<SelectTriggers className="w-[130px]">
			<SelectValues placeholder="Categories" />
		</SelectTriggers>
		<SelectContents>
			<SelectGroups>
				<SelectLabels>Categories</SelectLabels>
				<SelectItems value="1">Category 1</SelectItems>
			</SelectGroups>
		</SelectContents>
	</Selects>
);

export default SelectCategories;
