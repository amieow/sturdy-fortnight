import {
	SelectMod,
	SelectContentMod,
	SelectGroupMod,
	SelectItemMod,
	SelectLabelMod,
	SelectTriggerMod,
	SelectValueMod,
} from "@/components/atoms/ui/Select";

const SelectPriceSort = () => (
	<SelectMod>
		<SelectTriggerMod className="w-[130px]">
			<SelectValueMod placeholder="Price" />
		</SelectTriggerMod>
		<SelectContentMod>
			<SelectGroupMod>
				<SelectLabelMod>Price</SelectLabelMod>
				<SelectItemMod value="free">Free</SelectItemMod>
				<SelectItemMod value="paid">Paid</SelectItemMod>
			</SelectGroupMod>
		</SelectContentMod>
	</SelectMod>
);

export default SelectPriceSort;
