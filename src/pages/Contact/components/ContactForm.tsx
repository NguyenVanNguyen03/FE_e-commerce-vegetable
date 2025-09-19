import React from "react";

const ContactForm: React.FC = () => (
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8 pb-8">
    <div>
      <label className="block font-semibold text-primary mb-1">
        Full Name*
      </label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded px-4 py-2"
        placeholder="Your Name"
        required
      />
    </div>
    <div>
      <label className="block font-semibold text-primary mb-1">
        Your Email*
      </label>
      <input
        type="email"
        className="w-full border border-gray-300 rounded px-4 py-2"
        placeholder="example@yourmail.com"
        required
      />
    </div>
    <div>
      <label className="block font-semibold text-primary mb-1">Company*</label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded px-4 py-2"
        placeholder="yourcompany name here"
        required
      />
    </div>
    <div>
      <label className="block font-semibold text-primary mb-1">Subject*</label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded px-4 py-2"
        placeholder="how can we help"
        required
      />
    </div>
    <div className="md:col-span-2">
      <label className="block font-semibold text-primary mb-1">Message*</label>
      <textarea
        className="w-full border border-gray-300 rounded px-4 py-2 min-h-[120px]"
        placeholder="hello there!, would like to talk about how to..."
        required
      />
    </div>
    <div className="md:col-span-2 flex justify-start">
      <button
        type="submit"
        className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-dark transition"
      >
        Send Message
      </button>
    </div>
  </form>
);

export default ContactForm;
