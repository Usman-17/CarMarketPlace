import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ListingDropdown = ({ item }) => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={item?.label} />
      </SelectTrigger>
      <SelectContent>
        {item?.options?.map((option, index) => (
          <div key={index}>
            <SelectItem value={option}>{option}</SelectItem>
          </div>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ListingDropdown;
