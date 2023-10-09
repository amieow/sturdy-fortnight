import {
	SelectMod,
	SelectContentMod,
	SelectGroupMod,
	SelectItemMod,
	SelectLabelMod,
	SelectTriggerMod,
	SelectValueMod,
} from "@/components/atoms/ui/Select";

const SelectDurationSort = () => (
	<SelectMod>
		<SelectTriggerMod className="lg:w-[180px] max-lg:bg-transparent">
			<SelectValueMod placeholder="Video Duration" />
		</SelectTriggerMod>
		<SelectContentMod>
			<SelectGroupMod>
				<SelectLabelMod>Video Duration</SelectLabelMod>
				<SelectItemMod value="1-2">1 - 2 Hours</SelectItemMod>
				<SelectItemMod value="2-4">2 - 4 Hours </SelectItemMod>
				<SelectItemMod value="4-8">4 - 8 Hours</SelectItemMod>
				<SelectItemMod value="12+">12+ Hours</SelectItemMod>
			</SelectGroupMod>
		</SelectContentMod>
	</SelectMod>
);

export default SelectDurationSort;
