import carDetails from "../../Shared/carDetails.json";
import features from "../../Shared/features.json";

import { Separator } from "@/components/ui/separator";
import ListingDropdown from "./ListingDropdown";
import ListingInput from "./ListingInput";
import ListingTextarea from "./ListingTextarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Redo } from "lucide-react";

const AddListingPage = () => {
  return (
    <div className="px-4 md:px-16 my-10">
      <h2 className="text-2xl md:text-4xl font-bold">Add New Listing</h2>
      <form className="p-3 md:p-10 border rounded-xl mt-5">
        {/* Car Details */}
        <div>
          <h2 className="font-semibold text-xl mb-6">Car Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {carDetails.carDetails.map((item, index) => (
              <div key={index}>
                <label className="text-sm">{item?.label}</label>
                {item?.required && <span className="text-red-500"> * </span>}

                {item.fieldType === "text" || item.fieldType === "number" ? (
                  <ListingInput item={item} />
                ) : item.fieldType === "dropdown" ? (
                  <ListingDropdown item={item} />
                ) : item.fieldType === "textarea" ? (
                  <ListingTextarea item={item} />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-6" />
        {/* Features List */}
        <div>
          <h2 className="font-semibold text-xl my-6">Car Features</h2>

          <div className="grid grid-cols-2  md:grid-cols-3 gap-2">
            {features.features?.map((feature, index) => (
              <div key={index} className="flex gap-2 items-center">
                <Checkbox />
                <h2>{feature.label}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Car Images */}

        <div className="flex justify-end mt-10">
          <Button className="w-56 flex items-center gap-2">
            Submit
            <Redo size={18} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddListingPage;
