import { FiShoppingCart, FiHeadphones, FiCreditCard } from "react-icons/fi";
import { GiPlantSeed } from "react-icons/gi";

const features = [
  {
    icon: (
      <FiShoppingCart className="text-3xl text-[#274C5B] bg-yellow-100 rounded-full p-2 mb-2" />
    ),
    title: "Return Policy",
    desc: "Simply dummy text of the printintypesetting industry.",
  },
  {
    icon: (
      <GiPlantSeed className="text-3xl text-[#274C5B] bg-yellow-100 rounded-full p-2 mb-2" />
    ),
    title: "100% Fresh",
    desc: "Simply dummy text of the printintypesetting industry.",
  },
  {
    icon: (
      <FiHeadphones className="text-3xl text-[#274C5B] bg-yellow-100 rounded-full p-2 mb-2" />
    ),
    title: "Support 24/7",
    desc: "Simply dummy text of the printintypesetting industry.",
  },
  {
    icon: (
      <FiCreditCard className="text-3xl text-[#274C5B] bg-yellow-100 rounded-full p-2 mb-2" />
    ),
    title: "Secured Payment",
    desc: "Simply dummy text of the printintypesetting industry.",
  },
];

const Features = () => (
  <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
    {features.map((f) => (
      <div
        key={f.title}
        className="bg-white p-8 rounded-xl shadow-lg text-center"
      >
        <div className="flex justify-center">{f.icon}</div>
        <h4 className="font-bold mb-2 mt-2 text-lg text-primary">
          {f.title}
        </h4>
        <p className="text-gray-500">{f.desc}</p>
      </div>
    ))}
  </div>
);

export default Features;
