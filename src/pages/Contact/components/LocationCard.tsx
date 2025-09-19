import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import bgr_location from "../../../assets/images/contact/bgr-location.png";

interface Location {
  city: string;
  address: string;
}

const locations: Location[] = [
  {
    city: "New York, USA",
    address: "299 Park Avenue New York, New York 10171",
  },
  { city: "London, UK", address: "30 Stamford Street, London SE1 9LQ" },
];

const LocationCard: React.FC = () => (
  <div className="relative w-full h-96 rounded-3xl overflow-hidden flex items-center mb-12">
    <img
      src={bgr_location}
      alt="Our Farms"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-10 bg-white bg-opacity-90 rounded-2xl p-8 ml-8 max-w-md shadow-lg">
      <div className="text-secondary italic font-semibold mb-1">Location</div>
      <h3 className="text-2xl font-bold text-primary mb-2">Our Farms</h3>
      <p className="text-gray-600 mb-4">
        Established fact that a reader will be distracted by the readable
        content of a page when looking at a layout. The point of using.
      </p>
      <ul className="space-y-2">
        {locations.map((loc, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-primary mt-1" />
            <div>
              <div className="font-semibold text-primary">{loc.city}</div>
              <div className="text-gray-500 text-sm">{loc.address}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default LocationCard;
