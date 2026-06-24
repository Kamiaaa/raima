import Carousel from "./components/Carousel";
import PromotionalBanner from "./components/PromotionalBanner";
import ServicesSection from "./components/Services";
import TopContries from "./components/TopContries";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Carousel/>
      <ServicesSection />
      <TopContries />
      <WhyChooseUs />
      <PromotionalBanner />
    </>
  );
}
