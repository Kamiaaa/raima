


import Carousel from "./components/Carousel";
import PromotionalBanner from "./components/PromotionalBanner";
import ServicesSection from "./components/Services";
import TopContries from "./components/TopContries";

import VisaServices from "./components/VisaServices";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Carousel/>
      <ServicesSection />
      <TopContries />
      <VisaServices />
      <WhyChooseUs />
      <PromotionalBanner />
    </>
  );
}
