import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";

const HomePage = () => {
  return (
    <div>
      <SignInButton mode="modal" forceRedirectUrl="/">
        <Button>Sign In</Button>
      </SignInButton>
    </div>
  );
};

export default HomePage;
