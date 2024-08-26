import { Button } from "@/components/ui/button";
import { Redo } from "lucide-react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="px-10 md:px-16 my-10">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold">My Listing</h2>

        <Link to={"/add-listing"}>
          <Button className="flex items-center gap-2">
            Add new Listing
            <Redo size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
