import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col  items-center p-10 py-20  gap-1 h-[620px] w-full bg-[#eef0fc]">
        <h2 className="text-lg">Find cars for sale and for rent near you</h2>
        <h2 className="text-[60px] font-bold">Find Your Dream Car</h2>
        <SearchBar />

        <img src="/tesla.png" alt="car" className="mt-10" />
      </div>
    </div>
  );
};

export default Hero;
