import sp1 from "../../../assets/images/sp1.jpg";
import sp2 from "../../../assets/images/sp2.jpg";
import sp3 from "../../../assets/images/sp3.jpg";

const services = [
  { name: "Organic Juice", img: `${sp1}` },
  { name: "Organic Food", img: `${sp2}` },
  { name: "Nuts Cookis", img: `${sp3}` },
];

export default function ServiceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl shadow-md overflow-hidden flex items-center justify-center min-h-[260px]"
              style={{
                backgroundImage: `url(${service.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/0"></div>
              <div
                className="relative z-10 px-8 py-4 bg-white rounded-xl shadow text-center flex items-center justify-center text-lg font-semibold text-[#274C5B]"
                style={{ minWidth: 200 }}
              >
                {service.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
