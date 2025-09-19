import avatar from "../../../assets/images/bgr_about.jpg";

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-secondary font-semibold mb-2">
          Testimonial
        </h3>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-8">
          What Our Customer Saying?
        </h2>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8 flex flex-col items-center">
          <img
            src={`${avatar}`}
            alt="Customer"
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <p className="text-gray mb-4 text-center">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
          </p>
          <span className="font-bold text-primary">Sara Taylor</span>
          <span className="text-gray text-sm">Consumer</span>
        </div>
      </div>
    </section>
  );
}
