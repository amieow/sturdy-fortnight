import {
	Selects,
	SelectContents,
	SelectGroups,
	SelectItems,
	SelectLabels,
	SelectTriggers,
	SelectValues,
} from "@/components/atoms/Select";

const SelectPriceSort = () => (
	<Selects>
		<SelectTriggers className="w-[130px]">
			<SelectValues placeholder="Price" />
		</SelectTriggers>
		<SelectContents>
			<SelectGroups>
				<SelectLabels>Price</SelectLabels>
				<SelectItems value="free">Free</SelectItems>
				<SelectItems value="paid">Paid</SelectItems>
			</SelectGroups>
		</SelectContents>
	</Selects>
);

export default SelectPriceSort;
