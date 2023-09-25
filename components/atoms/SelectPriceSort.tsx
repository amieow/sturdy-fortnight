import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select";

const SelectPriceSort = () => (
  <Select>
    <SelectTrigger className="w-[130px]">
      <SelectValue placeholder="Price" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Price</SelectLabel>
        <SelectItem value="free">Free</SelectItem>
        <SelectItem value="paid">Paid</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default SelectPriceSort;
