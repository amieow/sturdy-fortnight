import {
	SelectMod,
	SelectContentMod,
	SelectGroupMod,
	SelectItemMod,
	SelectLabelMod,
	SelectTriggerMod,
	SelectValueMod,
} from "@/components/atoms/ui/Select";

const SelectDateSort = () => (
	<SelectMod>
		<SelectTriggerMod className="w-[130px] max-lg:bg-transparent">
			<SelectValueMod placeholder="Upload Date" />
		</SelectTriggerMod>
		<SelectContentMod>
			<SelectGroupMod>
				<SelectLabelMod>Upload Date</SelectLabelMod>
				<SelectItemMod value="4">4 Weeks ago</SelectItemMod>
				<SelectItemMod value="3">3 Weeks ago </SelectItemMod>
				<SelectItemMod value="2">2 Weeks ago</SelectItemMod>
				<SelectItemMod value="1">1 Weeks ago</SelectItemMod>
			</SelectGroupMod>
		</SelectContentMod>
	</SelectMod>
);

export default SelectDateSort;
