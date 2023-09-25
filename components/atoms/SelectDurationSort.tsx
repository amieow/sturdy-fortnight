import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select";

const SelectDurationSort = () => (
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Video Duration" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Video Duration</SelectLabel>
        <SelectItem value="1-2">1 - 2 Hours</SelectItem>
        <SelectItem value="2-4">2 - 4 Hours </SelectItem>
        <SelectItem value="4-8">4 - 8 Hours</SelectItem>
        <SelectItem value="12+">12+ Hours</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default SelectDurationSort;
