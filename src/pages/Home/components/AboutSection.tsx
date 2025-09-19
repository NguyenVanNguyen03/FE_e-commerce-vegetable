import bgrAbout from "../../../assets/images/bgr_about.jpg";

import { FaLeaf, FaClipboardCheck } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="py-12 bg-slate-50 animate-slide-in-bottom">
      <div className="container mx-auto flex flex-col w-full md:flex-row items-center gap-8 px-4 ">
        {/* Ảnh nền bên trái full, không bo góc */}
        <div className="flex-1 flex justify-center items-center min-h-[400px]">
          <div
            className="w-full h-[300px] md:h-[400px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgrAbout})`,
              minWidth: 300,
              maxWidth: 840,
              borderRadius: 10,
            }}
          ></div>
        </div>
        {/* Nội dung bên phải */}
        <div className="flex-1 max-w-xl">
          <h3 className="text-[#6EB356] text-xl font-semibold italic mb-2">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#274C5B] mb-4 leading-tight">
            We Believe in Working
            <br />
            Accredited Farmers
          </h2>
          <p className="text-[#525C60] mb-6">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to beenthe industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4 bg-white rounded-xl shadow p-4 animate-fade-in">
              <span className="bg-[#F9F8F8] p-3 rounded-xl text-[#7EB693] text-2xl">
                <FaLeaf />
              </span>
              <div>
                <div className="font-bold text-[#274C5B]">
                  Organic Foods Only
                </div>
                <div className="text-[#525C60] text-sm">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-xl shadow p-4 animate-fade-in">
              <span className="bg-[#F9F8F8] p-3 rounded-xl text-[#7EB693] text-2xl">
                <FaClipboardCheck />
              </span>
              <div>
                <div className="font-bold text-[#274C5B]">
                  Quality Standards
                </div>
                <div className="text-[#525C60] text-sm">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </div>
              </div>
            </div>
          </div>
          <a
            href="/shop"
            className="bg-[#274C5B] text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-[#1A2C47] transition text-lg"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
