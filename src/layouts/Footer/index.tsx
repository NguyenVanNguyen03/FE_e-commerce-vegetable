import bannerFooter from "../../assets/images/banner_footer.jpg";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white pt-12">
      {/* Newsletter */}
      <div className="max-w-5xl mx-auto -mt-8 mb-12">
        <div
          className="rounded-2xl flex flex-col md:flex-row items-center justify-between px-8 py-10 shadow-lg relative overflow-hidden"
          style={{
            backgroundImage: `url(${bannerFooter})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 z-0 rounded-2xl"></div>
          <div className="text-white text-3xl font-bold mb-4 md:mb-0 z-10">
            <span>
              Subscribe to
              <br />
              our Newsletter.
            </span>
          </div>
          <form className="flex w-full md:w-auto gap-2 z-10">
            <input
              type="email"
              placeholder="Your Email Address"
              className="rounded-md px-6 py-3 text-gray-700 outline-none flex-1 min-w-0"
            />
            <button
              type="submit"
              className="bg-[#274C5B] hover:bg-[#1e3846] text-white font-semibold px-8 py-3 rounded-md "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 py-12 border-b border-gray-200 divide-y-0 md:divide-x md:divide-gray-200">
        {/* Contact Us */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right px-4 md:px-8 ">
          <h3 className="text-[#274C5B] font-bold text-2xl mb-4">Contact Us</h3>
          <div className="mb-2">
            <span className="font-semibold">Email</span>
            <br />
            <span className="text-gray-500">needhelp@Organia.com</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Phone</span>
            <br />
            <span className="text-gray-500">666 888 888</span>
          </div>
          <div>
            <span className="font-semibold">Address</span>
            <br />
            <span className="text-gray-500">88 road, borklyn street, USA</span>
          </div>
        </div>
        {/* Logo + Description + Social */}
        <div className="flex flex-col items-center text-center px-4 md:px-8">
          <a href="/" className="flex flex-col items-center mb-4">
            <span className="inline-block w-12 h-12 rounded-full border-2 border-green-300 flex items-center justify-center mb-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="14"
                  cy="14"
                  r="13"
                  stroke="#7EB693"
                  strokeWidth="2"
                />
                <path
                  d="M14 7V21"
                  stroke="#7EB693"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7 14H21"
                  stroke="#7EB693"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M9.5 9.5L18.5 18.5"
                  stroke="#7EB693"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M18.5 9.5L9.5 18.5"
                  stroke="#7EB693"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-3xl font-bold text-[#274C5B]">Veggio</span>
          </a>
          <p className="text-gray-500 mb-4 max-w-md">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#F4F4F4] flex items-center justify-center hover:bg-[#E0F2F1] transition"
            >
              <FaInstagram className="text-[#274C5B] text-xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#F4F4F4] flex items-center justify-center hover:bg-[#E0F2F1] transition"
            >
              <FaFacebookF className="text-[#274C5B] text-xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#F4F4F4] flex items-center justify-center hover:bg-[#E0F2F1] transition"
            >
              <FaTwitter className="text-[#274C5B] text-xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#F4F4F4] flex items-center justify-center hover:bg-[#E0F2F1] transition"
            >
              <FaPinterestP className="text-[#274C5B] text-xl" />
            </a>
          </div>
        </div>
        {/* Utility Pages */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8">
          <h3 className="text-[#274C5B] font-bold text-2xl mb-4">
            Utility Pages
          </h3>
          <ul className="text-gray-500 space-y-2">
            <li>
              <a href="#" className="hover:text-[#274C5B]">
                Style Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#274C5B]">
                404 Not Found
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#274C5B]">
                Password Protected
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#274C5B]">
                Licences
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#274C5B]">
                Changelog
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm py-6 ">
        Copyright © <span className="font-bold text-[#274C5B]">Veggio</span> |
        Designed by <span className="font-bold">VictorFlow</span> Templates -
        Powered by <span className="font-bold">Webflow</span>
      </div>
    </footer>
  );
}
