import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
        <img 
          src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iNVESTING.png" 
          alt="Cover"        
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Investing in property</h1>
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
          <h2 className="text-2xl font-semibold mb-4">Investing in property</h2>
          <p className="text-gray-600">
          Investing in property can be one of the most significant financial decisions you’ll make, offering the potential for capital growth and rental income. It’s an opportunity to build long-term wealth, and our role is to help you navigate this journey with confidence and strategic foresight.
          </p>
          <p className="text-gray-600 mt-2">
          Our services begin with a personalized consultation to understand your investment goals, whether you’re aiming to diversify your portfolio, secure a steady income stream, or capitalize on potential tax advantages. We consider your financial position, risk tolerance, and investment timeline to craft a property investment strategy that aligns with your objectives.
          </p>
          <p className="text-gray-600 mt-2">
          Leveraging our extensive knowledge of the local property market and our broad network of industry contacts, we identify opportunities that match your investment criteria. We provide insights into various property types and locations, analyze market trends, and offer forecasts to help you make informed decisions.
          </p>
          <p className="text-gray-600 mt-2">
          Financing your property investment is where our expertise truly shines. We assess your borrowing capacity, compare competitive loan options, and structure your finance in a way that maximizes your investment’s potential while mitigating risks. Whether it’s interest-only loans, fixed-rate or variable loans, or leveraging equity from your existing properties, we ensure your investment loan works for you and your financial situation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;