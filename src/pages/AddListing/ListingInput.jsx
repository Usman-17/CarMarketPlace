import { Input } from "@/components/ui/input";

const ListingInput = ({ item }) => {
  return (
    <div className="mt-1">
      <Input
        name={item?.name}
        type={item?.fieldType}
        required={item?.required}
      />
    </div>
  );
};

export default ListingInput;
