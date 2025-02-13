import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
        <img 
          src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/08/iStock-818588976.jpg" 
          alt="Cover"        
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Refinancing</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 max-w-7xl md:grid-cols-2 gap-8 w-full mt-10 px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Enquiry Form</h2>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="w-full" />
            <Input type="email" placeholder="Your Email" className="w-full" />
            <Input type="text" placeholder="Mobile" className="w-full" />
            <Input type="text" placeholder="Postal" className="w-full" />
            <Textarea placeholder="Your Message"  className="w-full h-96" />
            <Button className="w-full">Submit</Button>
          </form>
        </div>
        
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Refinancing</h2>
          <p className="text-gray-600">
          Refinancing can be a powerful strategy to take advantage of lower interest rates, access equity in your home, or adjust your loan structure to better align with changes in your personal circumstances. Whether you’re looking to reduce your monthly repayments, pay off your loan faster, or fund a major purchase or renovation, we have the expertise to assist you in making a smooth and efficient transition.
          </p>
          <p className="text-gray-600 mt-2">
          Our refinancing services begin with a comprehensive review of your existing home loan to evaluate its competitiveness in the current market. We’ll discuss your financial situation, your property’s equity, and your long-term financial goals. This initial assessment helps us identify potential refinancing opportunities that could offer significant savings or other benefits.
          </p>
          <p className="text-gray-600 mt-2">
          With a deep understanding of your unique requirements, we then scour the market, leveraging our extensive network of lending partners to find refinancing options that are the right fit for you. We consider not just the interest rates, but also the fees, features, and flexibility of each potential loan product. Our goal is to present you with options that not only lower your costs but also align with your lifestyle and future plans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;