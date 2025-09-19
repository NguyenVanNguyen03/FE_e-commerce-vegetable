const stats = [
  { label: "100% Organic", value: "100%" },
  { label: "Active Product", value: "285" },
  { label: "Organic Orchads", value: "350+" },
  { label: "Years of Farming", value: "25+" },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-wrap justify-center gap-8 px-4 stagger-children">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center animate-scale-in"
          >
            <span className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stat.value}
            </span>
            <span className="text-gray text-lg font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
