import {
	SelectMod,
	SelectContentMod,
	SelectGroupMod,
	SelectItemMod,
	SelectLabelMod,
	SelectTriggerMod,
	SelectValueMod,
} from "@/components/atoms/ui/Select";

const SelectProgress = () => (
	<SelectMod>
		<SelectTriggerMod className="w-[130px]">
			<SelectValueMod placeholder="Progress" />
		</SelectTriggerMod>
		<SelectContentMod>
			<SelectGroupMod>
				<SelectLabelMod>Progress</SelectLabelMod>
				<SelectItemMod value="start">Start</SelectItemMod>
				<SelectItemMod value="finish">Finish</SelectItemMod>
				<SelectItemMod value="in progress">In Progress</SelectItemMod>
			</SelectGroupMod>
		</SelectContentMod>
	</SelectMod>
);

export default SelectProgress;
