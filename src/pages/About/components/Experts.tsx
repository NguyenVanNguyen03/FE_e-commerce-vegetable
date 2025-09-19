import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
interface Expert {
  name: string;
  role: string;
  img: string;
}

interface ExpertsProps {
  experts: Expert[];
}

const Experts = ({ experts }: ExpertsProps) => (
  <div className="max-w-6xl mx-auto py-16">
    <h3 className="italic text-secondary text-xl mb-2 text-center font-semibold">
      Team
    </h3>
    <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 text-center">
      Our Organic Experts
    </h2>
    <p className="text-dark text-center mb-10 max-w-2xl mx-auto">
      Simply dummy text of the printing and typesetting industry. Lorem had
      ceased to been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {experts.map((expert) => (
        <div
          key={expert.name}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
        >
          <img
            src={expert.img}
            alt={expert.name}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-2">
            <div className="flex-1">
              <h4 className="font-bold text-primary">{expert.name}</h4>
              <p className="italic text-secondary">{expert.role}</p>
            </div>
            <div className="flex gap-3 text-primary text-lg">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Experts;
