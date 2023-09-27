import {
	SelectMod,
	SelectContentMod,
	SelectGroupMod,
	SelectItemMod,
	SelectLabelMod,
	SelectTriggerMod,
	SelectValueMod,
} from "@/components/atoms/Select";

const SelectCategories = () => (
	<SelectMod>
		<SelectTriggerMod className="w-[130px]">
			<SelectValueMod placeholder="Categories" />
		</SelectTriggerMod>
		<SelectContentMod>
			<SelectGroupMod>
				<SelectLabelMod>Categories</SelectLabelMod>
				<SelectItemMod value="1">Category 1</SelectItemMod>
			</SelectGroupMod>
		</SelectContentMod>
	</SelectMod>
);

export default SelectCategories;
