import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "../ui/button";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="flex items-center justify-between shadow-sm p-5">
      <img src="/logo.svg" alt="logo" width={150} height={100} />

      <ul className="hidden md:flex gap-12">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Home
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Search
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          New Us
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Preowned
        </li>
      </ul>

      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Button>Submit Listing</Button>
        </div>
      ) : (
        <Button>Submit Listing</Button>
      )}
    </div>
  );
};

export default Header;
