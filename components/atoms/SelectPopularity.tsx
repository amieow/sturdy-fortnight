import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select";

const SelectPopularity = () => (
  <Select>
    <SelectTrigger className="w-[130px]">
      <SelectValue placeholder="Popularity" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Popularity</SelectLabel>
        <SelectItem value="5">5 Stars</SelectItem>
        <SelectItem value="4">4 Stars</SelectItem>
        <SelectItem value="3">3 Stars</SelectItem>
        <SelectItem value="2">2 Stars</SelectItem>
        <SelectItem value="1">1 Stars</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default SelectPopularity;
