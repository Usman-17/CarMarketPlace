import Header from "@/components/common/Header";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import MostSearchedCar from "@/components/MostSearchedCar";
import InfoSection from "@/components/InfoSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <MostSearchedCar />
      <InfoSection />
    </>
  );
};

export default HomePage;
