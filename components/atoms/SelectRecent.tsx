import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select";

const SelectRecent = () => (
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Recently Accessed" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Recently Accessed</SelectLabel>
        <SelectItem value="start">Start</SelectItem>
        <SelectItem value="finish">Finish</SelectItem>
        <SelectItem value="in progress">In Progress</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default SelectRecent;
