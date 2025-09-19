import Banner from "../../components/Banner";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Features from "./components/Features";
import Experts from "./components/Experts";
import WhatWeOffer from "./components/WhatWeOffer";
import avatar from "../../assets/images/about/avatar.jpg";
import banner from "../../assets/images/about/banner_about.png";
const experts = [
  {
    name: "Giovani Bacardo",
    role: "Farmer",
    img: avatar,
  },
  {
    name: "Marianne Loreno",
    role: "Designer",
    img: avatar,
  },
  {
    name: "Riga Pelore",
    role: "Farmer",
    img: avatar,
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <Banner title="About Us" image={banner} />
      <AboutSection />
      <div className="bg-light py-16">
        <WhyChooseUs />
        <Features />
      </div>
      <Experts experts={experts} />
      <WhatWeOffer />
    </div>
  );
}
