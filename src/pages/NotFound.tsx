import React from "react";
import { useNavigate } from "react-router-dom";
import banner404 from "../assets/images/notfound.png";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-light min-h-[800px] flex items-center justify-center animate-fade-in">
      <div
        className="w-full max-w-full h-[800px] flex items-center justify-center relative rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${banner404})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-right justify-end h-full ">
          {/* Empty left for spacing on desktop */}
          <div className="flex-1" />
          {/* 404 Content */}
          <div className="flex-1 flex flex-col items-center md:items-right justify-center text-center md:text-left ">
            <div className="text-[100px] md:text-[160px] font-bold text-primary leading-none mb-2">
              404
            </div>
            <div className="text-4xl md:text-5xl font-bold text-dark mb-2">
              Page not found
            </div>
            <div className="text-gray-500 mb-6 text-base md:text-base">
              The page you are looking for doesn't exist or has been moved
            </div>
            <button
              className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-dark transition"
              onClick={() => navigate("/")}
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
