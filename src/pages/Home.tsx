import CarouselCitySection from "../components/CarouselCitySection";
import BenefitsSection from "../components/BenefitsSection";
import Navbar from "../components/Navbar";
import RecomendOfficeSection from "../components/RecomendOfficeSection";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <CarouselCitySection />
      <BenefitsSection />
      <RecomendOfficeSection />
    </>
  );
};

export default Home;
