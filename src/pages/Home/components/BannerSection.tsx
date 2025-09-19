import bannerFruit from "../../../assets/images/bgr_natural.png";
import bannerVeg from "../../../assets/images/bgr_offer.png";

export default function BannerSection() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4">
        <div
          className="flex-1 rounded-3xl flex items-center p-8 min-h-[220px] shadow relative overflow-hidden animate-slide-in-right"
          style={{
            backgroundImage: `url(${bannerFruit})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#F85C70",
          }}
        >
          <div className="z-10">
            <h3 className="italic text-lg font-semibold mb-2 text-white">
              Natural!!
            </h3>
            <p className="text-2xl md:text-3xl font-bold leading-tight mb-0 text-white">
              Get Garden
              <br />
              Fresh Fruits
            </p>
          </div>
        </div>
        <div
          className="flex-1 rounded-3xl flex items-center p-8 min-h-[220px] shadow relative overflow-hidden animate-slide-in-left"
          style={{
            backgroundImage: `url(${bannerVeg})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#fff",
          }}
        >
          <div className="z-10">
            <h3 className="italic text-lg font-semibold mb-2 text-[#4CAF50]">
              Offer!!
            </h3>
            <p className="text-2xl md:text-3xl font-bold leading-tight mb-0 text-[#1A2C47]">
              Get 10% off
              <br />
              on Vegetables
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
