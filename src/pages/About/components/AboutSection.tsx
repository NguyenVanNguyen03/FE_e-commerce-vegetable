import { FaTractor } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";
import aboutSection from "../../../assets/images/about/aboutSection.jpg";

const AboutSection = () => (
  <div className="max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center gap-16">
    <img
      src={aboutSection}
      alt="Salad"
      className="w-[480px] rounded-full shadow-lg"
    />
    <div className="flex-1">
      <h3 className="italic text-green-400 text-lg mb-2 font-semibold">
        About Us
      </h3>
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#274C5B] mb-4 leading-tight">
        We do Creative
        <br />
        Things for Success
      </h2>
      <p className="mb-2 text-gray-600">
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>
      <p className="mb-6 text-gray-600">
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        <div className="flex items-center gap-3">
          <FaTractor className="text-green-300 text-3xl" />
          <span className="font-bold text-[#274C5B]">
            Modern Agriculture
            <br />
            Equipment
          </span>
        </div>
        <div className="flex items-center gap-3">
          <GiPlantRoots className="text-green-300 text-3xl" />
          <span className="font-bold text-[#274C5B]">
            No growth
            <br />
            hormones are used
          </span>
        </div>
      </div>
      <button className="flex items-center gap-2 bg-[#274C5B] hover:bg-[#19303a] text-white px-8 py-3 rounded-xl font-semibold text-lg transition">
        Explore More
        <svg
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 9h10m0 0-4-4m4 4-4 4"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
);

export default AboutSection;
