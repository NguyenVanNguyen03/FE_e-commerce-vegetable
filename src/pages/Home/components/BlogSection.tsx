import sp1 from "../../../assets/images/sp1.jpg";
import sp2 from "../../../assets/images/sp2.jpg";
const blogs = [
  {
    title: "The Benefits of Vitamin C & How to Get It",
    desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    img: `${sp1}`,
    date: "25 Nov",
  },
  {
    title: "Our Favourite Summertime Tomato",
    desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    img: `${sp2}`,
    date: "25 Nov",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h3 className="text-secondary font-semibold mb-2 animate-fade-in">
          News
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 animate-fade-in">
          Discover weekly content about organic food, & more
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 stagger-children">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <span className="text-xs text-gray mb-1 block">
                  {blog.date}
                </span>
                <h4 className="font-bold text-lg text-primary mb-2">
                  {blog.title}
                </h4>
                <p className="text-gray mb-2">{blog.desc}</p>
                <button className="bg-accent text-primary px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-dark transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
