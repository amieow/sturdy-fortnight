import {
	SelectMod,
	SelectContentMod,
	SelectGroupMod,
	SelectItemMod,
	SelectLabelMod,
	SelectTriggerMod,
	SelectValueMod,
} from "@/components/atoms/Select";

const SelectRecent = () => (
	<SelectMod>
		<SelectTriggerMod className="w-[180px]">
			<SelectValueMod placeholder="Recently Accessed" />
		</SelectTriggerMod>
		<SelectContentMod>
			<SelectGroupMod>
				<SelectLabelMod>Recently Accessed</SelectLabelMod>
				<SelectItemMod value="start">Start</SelectItemMod>
				<SelectItemMod value="finish">Finish</SelectItemMod>
				<SelectItemMod value="in progress">In Progress</SelectItemMod>
			</SelectGroupMod>
		</SelectContentMod>
	</SelectMod>
);

export default SelectRecent;
