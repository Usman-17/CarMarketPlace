import { Categories } from "@/utils/data";

const Category = () => {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center mb-6">Browse By Type</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-6 md:px-8 lg:px-20">
        {Categories?.map((category) => (
          <div
            key={category?.id}
            className="border rounded-xl p-3 flex flex-col items-center hover:shadow-md cursor-pointer hover:text-primary transition-all"
          >
            <img
              src={category?.icon}
              alt={`${category?.name} icon`}
              width={35}
              height={35}
            />
            <h2 className="mt-2 font-medium text-sm">{category?.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
