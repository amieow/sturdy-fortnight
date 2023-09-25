import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select";

const SelectCategories = () => (
  <Select>
    <SelectTrigger className="w-[130px]">
      <SelectValue placeholder="Categories" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Categories</SelectLabel>
        <SelectItem value="1">Category 1</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default SelectCategories;
