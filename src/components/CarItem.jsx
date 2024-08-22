import { Cog, ExternalLink, Fuel, Gauge } from "lucide-react";
import { Separator } from "./ui/separator";

const CarItem = ({ car }) => {
  return (
    <div className="rounded-xl bg-white border hover:shadow-md  cursor-pointer">
      <h2 className="absolute m-2 bg-primary px-3 py-0.5 rounded-full text-xs text-white">
        New
      </h2>
      <img
        src={car.image}
        alt="car"
        loading="lazy"
        decoding="async"
        width="100%"
        height={250}
        className="rounded-t-xl"
      />
      <div className="p-4">
        <h2 className="font-bold text-black text-lg mb-2">{car.name}</h2>
        <Separator />

        <div className="flex gap-5 justify-between mt-3">
          <div className="flex flex-col items-center">
            <Fuel size={20} className="mb-1" />
            <h2 className="text-md">{car.miles}</h2>
          </div>

          <div className="flex flex-col items-center">
            <Gauge size={20} className="mb-1" />
            <h2 className="text-md">{car.fuelType}</h2>
          </div>

          <div className="flex flex-col items-center">
            <Cog size={20} className="mb-1" />
            <h2 className="text-md">{car.gearType}</h2>
          </div>
        </div>

        <Separator className="my-2" />

        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg">${Math.round(car.price)}</h2>
          <h2 className="text-primary text-sm flex items-center gap-1 cursor-pointer">
            View Details
            <ExternalLink size={14} />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
