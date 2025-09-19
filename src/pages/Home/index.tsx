import HeroSection from "./components/HeroSection";
import BannerSection from "./components/BannerSection";
import AboutSection from "./components/AboutSection";
import ProductSection from "./components/ProductSection";
import StatsSection from "./components/StatsSection";
import TestimonialSection from "./components/TestimonialSection";
import ServiceSection from "./components/ServiceSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <BannerSection />
      <AboutSection />
      <ProductSection />
      <StatsSection />
      <TestimonialSection />
      <ServiceSection />
      <BlogSection />
    </div>
  );
}
