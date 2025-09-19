import React from "react";

interface BannerProps {
  title: string;
  image: string;
}

const Banner: React.FC<BannerProps> = ({ title, image }) => (
  <div className="relative h-80 flex items-center justify-center mb-8 animate-fade-in">
    <img
      src={image}
      alt="Banner"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
    <h1 className="relative z-10 text-5xl font-bold text-primary drop-shadow-lg">
      {title}
    </h1>
  </div>
);

export default Banner;
