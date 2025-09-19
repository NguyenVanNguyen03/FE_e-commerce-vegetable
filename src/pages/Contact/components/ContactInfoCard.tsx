import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

interface Props {
  image: string;
}

const ContactInfoCard: React.FC<Props> = ({ image }) => (
  <div className="flex flex-col md:flex-row gap-8 items-center">
    <img
      src={image}
      alt="Contact"
      className="w-96 h-96 object-cover rounded-2xl"
    />
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-primary mb-2">
        We'd love to talk about how we can work together.
      </h2>
      <p className="text-gray-600 mb-6">
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex items-center gap-3 bg-light rounded-lg px-4 py-3 max-w-xs shadow-md border border-secondary">
          <FaEnvelope className="text-primary text-xl " />
          <div>
            <div className="font-semibold text-primary ">Massege</div>
            <div className="text-gray-500 text-sm">support@organic.com</div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-light rounded-lg px-4 py-3 max-w-xs shadow-md border border-secondary">
          <FaPhone className="text-primary text-xl" />
          <div>
            <div className="font-semibold text-primary">Contact Us</div>
            <div className="text-gray-500 text-sm">+01 123 456 789</div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <a href="#">
          <FaInstagram className="text-primary text-xl" />
        </a>
        <a href="#">
          <FaFacebook className="text-primary text-xl" />
        </a>
        <a href="#">
          <FaTwitter className="text-primary text-xl" />
        </a>
        <a href="#">
          <FaPinterest className="text-primary text-xl" />
        </a>
      </div>
    </div>
  </div>
);

export default ContactInfoCard;
