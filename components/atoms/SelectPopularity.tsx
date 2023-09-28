import {
	SelectMod,
	SelectContentMod,
	SelectGroupMod,
	SelectItemMod,
	SelectLabelMod,
	SelectTriggerMod,
	SelectValueMod,
} from "@/components/atoms/ui/Select";

const SelectPopularity = () => (
	<SelectMod>
		<SelectTriggerMod className="w-[130px]">
			<SelectValueMod placeholder="Popularity" />
		</SelectTriggerMod>
		<SelectContentMod>
			<SelectGroupMod>
				<SelectLabelMod>Popularity</SelectLabelMod>
				<SelectItemMod value="5">5 Stars</SelectItemMod>
				<SelectItemMod value="4">4 Stars</SelectItemMod>
				<SelectItemMod value="3">3 Stars</SelectItemMod>
				<SelectItemMod value="2">2 Stars</SelectItemMod>
				<SelectItemMod value="1">1 Stars</SelectItemMod>
			</SelectGroupMod>
		</SelectContentMod>
	</SelectMod>
);

export default SelectPopularity;
