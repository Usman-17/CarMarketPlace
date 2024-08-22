import { useRef } from "react";
import CarItem from "./CarItem";
import FakeData from "@/utils/FakeData";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const MostSearchedCar = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <div className="mx-8 sm:mx-24">
      <h2 className="font-bold text-2xl sm:text-3xl text-center mt-16 mb-7">
        Most Searched Cars
      </h2>

      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {FakeData.carList.map((car, index) => (
            <CarouselItem
              className="flex-[1_0_100%] sm:flex-[1_0_48%] md:flex-[1_0_48%] lg:flex-[1_0_24%]"
              key={index}
            >
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default MostSearchedCar;
