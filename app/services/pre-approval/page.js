import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
        <img 
          src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/Screenshot-2024-09-11-161550.png" 
          alt="Cover"        
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Pre Approval</h1>
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
          <h2 className="text-2xl font-semibold mb-4">Pre approval of Loans</h2>
          <p className="text-gray-600">
          Pre-approval is an incredible time saver when it comes to purchasing a property. If you are eligible for pre-approval on a mortgage, it provides you with the freedom and flexibility to make a purchase with confidence. Often, it positions you as a “serious buyer” in the eyes of sellers, giving you an edge in competitive situations such as property auctions.
          </p>
          <p className="text-gray-600 mt-2">
          The process of getting pre-approved is straightforward. Although there are forms to fill out, I am here to guide you through each step and will gladly assist you at all stages. Here’s what you can expect:
          </p>
          <p className="text-gray-600 mt-2">
          Pre-approval not only saves you time but also enhances your bargaining power, making you a more attractive prospect to sellers. It’s a valuable tool that can give you a head start in the property mark
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;