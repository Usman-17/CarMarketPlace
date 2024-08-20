import { Button } from "./components/ui/button";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-10 h-[100vh]">
        <div className="text-9xl">App</div>
        <Button>Click</Button>
      </div>
    </>
  );
};

export default App;
