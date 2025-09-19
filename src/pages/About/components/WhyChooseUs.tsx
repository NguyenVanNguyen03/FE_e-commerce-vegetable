import aboutSection from "../../../assets/images/about/aboutSection.jpg";


const WhyChooseUs = () => (
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 py-12">
    <div className="flex-1">
      <h3 className="italic text-green-400 text-xl mb-2 font-semibold">
        Why Choose us?
      </h3>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#274C5B] mb-4 leading-tight">
        We do not buy from the
        <br />
        open market & traders.
      </h2>
      <p className="mb-4 text-gray-600">
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard the 1500s, when an unknown
      </p>
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex items-start gap-3 bg-gray-100 rounded-full px-4 py-2 w-fit">
          <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-300">
            <span className="w-3 h-3 bg-green-300 rounded-full block"></span>
          </span>
          <div>
            <div className="font-bold text-[#274C5B]">100% Natural Product</div>
            <div className="text-gray-500 text-sm">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-gray-100 rounded-full px-4 py-2 w-fit">
          <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-300">
            <span className="w-3 h-3 bg-green-300 rounded-full block"></span>
          </span>
          <div>
            <div className="font-bold text-[#274C5B]">Increases resistance</div>
            <div className="text-gray-500 text-sm">
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      src={aboutSection}
      alt="Veggies"
      className="w-[400px] h-[320px] object-cover rounded-2xl shadow-lg"
    />
  </div>
);

export default WhyChooseUs;
