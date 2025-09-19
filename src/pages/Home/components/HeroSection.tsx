import bgrHeroImage from "../../../assets/images/bgr_hero.png";
export default function HeroSection() {
  return (
    <section
      className="relative bg-light py-0 min-h-[400px] flex items-center"
      style={{
        backgroundImage: `url(${bgrHeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // width: "100vw",
        height: "70vh",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center min-h-[400px]">
        <div className="max-w-xl text-left py-16 bg-transparent animate-fade-in">
          <p className="text-secondary font-semibold mb-2">100% Natural Food</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            Choose the best <br /> healthier way of life
          </h1>
          <div className="mt-10">
            <a
              href="/shop"
              className="px-6 py-3 bg-accent text-primary font-semibold rounded shadow hover:bg-yellow-300 transition"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
