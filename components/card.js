import React from "react";

const Card = ({ image, title, description }) => {
    const items = [
        {
            image: "https://d3debuvrkv6iuf.cloudfront.net/media/2024/10/iStock-1390080450.jpg",
            title: "I'M LOOKING TO BUY",
            description: "Selecting a home is a significant decision, and securing the right mortgage is equally important. Our team, with access to over 50 lenders, can assist you in finding a great deal or the perfect lender for your home loan."
        },
        {
            image:"https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iNVESTING.png",
            title:"I'M LOOKING TO INVEST IN PROPERTY",
            description:"Many Australians are seeking to get ahead by investing in real estate. With a variety of products and lenders available, now is an opportune time to strategically grow your investment property portfolio."
        },
        {
            image:"https://d3debuvrkv6iuf.cloudfront.net/media/2024/10/iStock-1427687210.jpg",
            title:"I'M LOOKING TO REFINANCE",
            description:"As a mortgage broker, we provide clients with competitive rates and access to a broad selection of products available on the market. By not refinancing, you could be losing thousands of dollars annually. Contact us today to explore your options."
        }
    ]
    return (
        <div className="max-w-6xl mx-auto p-6 flex">
      {items.map((item) => (
        <div
          key={item.image}
          className="w-[350px] m-4 bg-white shadow-md overflow-hidden"
        >
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
            <p className="text-md font-thin mt-2">{item.description}</p>
          </div>

          <div className="p-4 flex justify-center">
            <button className="bg-blue-800 text-white text-sm font-medium py-2 px-6 rounded shadow hover:bg-blue-900 transition">
              Get Started
            </button>
          </div>
        </div>
      ))}
    </div>
    );
};

export default Card;
