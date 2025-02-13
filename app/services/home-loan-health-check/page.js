import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
        <img 
          src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-2032134224.jpg" 
          alt="Cover"        
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Home Loan Health Check</h1>
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
          <h2 className="text-2xl font-semibold mb-4">Home Loan Health Check</h2>
          <p className="text-gray-600">
          At Finance Home Loans, our guiding principle is rooted in Building Relationships. This core belief sets us apart from others in the industry, as we prioritize forging strong, lasting connections with our clients.
          </p>
          <p className="text-gray-600 mt-2">
          To demonstrate our commitment to your financial well-being, we proudly offer a Complimentary Financial Fitness Check—our gift to you, with no obligation.
          </p>
          <p className="text-gray-600 mt-2">
          Our process begins with a detailed review of your personal information, followed by an in-depth analysis of your current financial situation, including your assets and liabilities. We thoroughly examine your credit score and credit history, as well as assess your banking habits and overall expenditure patterns.
          </p>
          <p className="text-gray-600 mt-2">
          Education is a cornerstone of our service. Our seasoned team is eager to share their expertise, enlightening you on the specific criteria our lenders look for and guiding you on how to align with their policy requirements. Rest assured, this Health Check is purely informational and does not require you to fill out a loan application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;