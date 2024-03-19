import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HowItWorks from "@/components/UI/HomePage/HowItWorks/HowItWorks";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctor from "@/components/UI/HomePage/TopRatedDoctor/TopRatedDoctor";
import WhyUs from "@/components/UI/HomePage/WhyUs/WhyUs";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Specialist />
      <TopRatedDoctor />
      <WhyUs />
      <HowItWorks />
    </div>
  );
};

export default HomePage;
