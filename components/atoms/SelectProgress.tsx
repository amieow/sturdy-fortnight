import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select";

const SelectProgress = () => (
  <Select>
    <SelectTrigger className="w-[130px]">
      <SelectValue placeholder="Progress" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Progress</SelectLabel>
        <SelectItem value="start">Start</SelectItem>
        <SelectItem value="finish">Finish</SelectItem>
        <SelectItem value="in progress">In Progress</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default SelectProgress;
