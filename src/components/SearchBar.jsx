import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import { Search } from "lucide-react";
import { carMakes, Pricing } from "@/utils/data";

const SearchBar = () => {
  return (
    <div className="bg-white rounded-md md:rounded-full flex flex-col md:flex-row gap-10 px-5 items-center p-2  md:p-5 w-[60%]">
      {/* 1 */}
      <Select>
        <SelectTrigger className="w-full text-lg border-none focus:ring-0">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="old">Old</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      {/* 2 */}
      <Select>
        <SelectTrigger className="w-full text-lg border-none focus:ring-0">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>

        <SelectContent>
          {carMakes?.map((maker) => (
            <SelectItem key={maker.id} value={maker.name}>
              {maker.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      {/* 3 */}
      <Select>
        <SelectTrigger className="w-full text-lg border-none focus:ring-0">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Pricing?.map((price) => (
            <SelectItem key={price.id} value={price.amount}>
              {price.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div>
        <Search
          size={44}
          className="bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchBar;
