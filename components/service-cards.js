import React from "react";

const ServiceCards = () => {
  const items = [
    {
      image:
        "https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-2074072839-1.jpg",
      title: "FIRST HOME BUYERS",
      description:
        "Finance Home Loans can provide invaluable support to first-time home buyers by offering tailored loan options and competitive interest rates, making the dream of owning a home more accessible.",
    },
    {
      image:
        "https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/Screenshot-2024-09-11-161550.png",
      title: "PRE-APPROVAL",
      description:
        "Finance Home Loans can assist customers with home loan pre-approval by streamlining the application process and offering expert advice, ensuring they are well-prepared and confident when making an offer on their desired property.",
    },
    {
        image:"https://d3debuvrkv6iuf.cloudfront.net/media/2023/08/iStock-818588976.jpg",
        title: "REFINANCING",
        description:
          "Finance Home Loans can aid customers with home loan refinancing by providing options to secure lower interest rates or better loan terms, ultimately helping to reduce monthly repayments and improve overall financial stability.",
      },
      {
        image:"https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-92044493.jpg",
        title: "REVERSE MORTGAGES",
        description:
          "Reverse mortgages are loans for homeowners aged 62 or older that allow them to convert part of their home equity into cash without having to sell their home or make monthly mortgage payments.",
      },
      {
        image:"https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-1372189857.jpg",
        title: "SELF MANAGED SUPER FUNDS -SMSF",
        description:
          "Finance Home Loans can help customers with self-managed super funds by providing expert advice and tailored loan products, enabling them to optimise their retirement savings and investment strategies.",
      },
      {
        image:"https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iNVESTING.png",
        title: "INVESTING IN PROPERTY",
        description:
          "Finance Home Loans can support customers in investing in property by offering tailored loan products and expert guidance, enabling them to maximise their investment potential and achieve long-term financial growth.",
      },
      {
        image:"https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-2032134224.jpg",
        title: "HOME LOAN HEALTH CHECK",
        description:
          "Finance Home Loans can assist customers with a home loan health check by reviewing their current mortgage terms and identifying opportunities for savings or improvements, ensuring their loan remains competitive and suited to their financial needs.",
      },
      {
        image:"https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-1992544821.jpg",
        title: "CONSTRUCTION LOANS",
        description:
          "Finance Home Loans can assist customers with construction loans by providing specialised funding solutions and expert advice, ensuring a smooth and efficient process from project inception to completion.",
      },
      {
        image:"https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-88621530.jpg",
        title: "CAR/VEHICLE FINANCE",
        description:
          "Finance Home Loans can assist customers with car loans by offering competitive rates and tailored repayment plans, making it easier for them to purchase their desired vehicle while managing their financial commitments effectively.",
      },
      {
        image:"https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-1463712307.jpg",
        title: "COMMERCIAL LOANS",
        description:
          "Finance Home Loans can assist customers with commercial loans by offering customised lending solutions and professional guidance, helping them to secure the necessary funding for their business ventures and growth.",
      },
      {
        image:"https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-475903022.jpg",
        title: "PERSONAL LOANS",
        description:
          "Finance Home Loans can help customers with personal loans by offering competitive interest rates and flexible repayment options, enabling them to manage their personal finances more effectively and achieve their financial goals.",
      },
      {
        image:"https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-642454136.jpg",
        title: "ASSET FINANCE",
        description:
          "Finance Home Loans can assist customers with asset finance by providing tailored loan options and expert advice, enabling them to acquire essential assets for their personal or business needs efficiently and affordably.",
      },
      
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-wrap gap-x-6 justify-center">
      {items.map((item) => (
        <div
          key={item.image}
          className="max-w-xs flex flex-col rounded-lg m-4 bg-white  overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />

          <div className="flex flex-col flex-grow p-4">
            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
            <p className="text-md font-thin mt-2 flex-grow">{item.description}</p>
          </div>

          <div className="p-4">
            <button className="bg-green-900  text-white text-sm font-medium py-2 px-6 rounded shadow hover:bg-green-800 transition w-full">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
