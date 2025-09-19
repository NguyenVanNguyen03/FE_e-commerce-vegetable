import fruits from "../../../assets/images/about/fruits.jpg";

const offers = [
  { img: fruits, name: "Spicy" },
  { img: fruits, name: "Nuts & Feeds" },
  { img: fruits, name: "Fruits" },
  { img: fruits, name: "Vegetable" },
];

const WhatWeOffer = () => (
  <div className="bg-primary py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h3 className="italic text-secondary text-xl mb-2 text-center font-semibold">
        About Us
      </h3>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">
        What We Offer for You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {offers.map((offer) => (
          <div>
            <div
              key={offer.name}
              className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 w-60"
            >
              <img
                src={offer.img}
                alt={offer.name}
                className="w-36 h-36 object-contain mb-4"
              />
            </div>
            <p className="text-light font-medium text-lg text-center my-2">
              {offer.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default WhatWeOffer;
