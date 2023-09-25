import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select";

const SelectDateSort = () => (
  <Select>
    <SelectTrigger className="w-[130px]">
      <SelectValue placeholder="Upload Date" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Upload Date</SelectLabel>
        <SelectItem value="4">4 Weeks ago</SelectItem>
        <SelectItem value="3">3 Weeks ago </SelectItem>
        <SelectItem value="2">2 Weeks ago</SelectItem>
        <SelectItem value="1">1 Weeks ago</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default SelectDateSort;
