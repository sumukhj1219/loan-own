import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
        <img 
          src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-88621530.jpg" 
          alt="Cover"        
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Car/Vehicle Loans</h1>
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
          <h2 className="text-2xl font-semibold mb-4">About Vehicle Loans</h2>
          <p className="text-gray-600">
          We recognize that purchasing a vehicle is a significant financial commitment, and our goal is to make this process as seamless and stress-free as possible. We begin by sitting down with you to understand your financial situation, needs, and aspirations. Whether you’re buying your first car, upgrading to accommodate a growing family, or seeking your dream ride, we have the expertise to guide you through the journey.
          </p>
          <p className="text-gray-600 mt-2">One of the primary services we offer is sourcing the most competitive car loan rates available. We collaborate with a diverse panel of lenders, including major banks, specialty car financiers, and boutique lenders, to provide a variety of options tailored to your financial circumstances. Our longstanding relationships with these lenders often allow us to negotiate better terms on your behalf, potentially saving you thousands over the life of your loan.</p>
          <p className="text-gray-600 mt-2">We also pride ourselves on our ability to simplify the complex. Car loan products come with a myriad of features, terms, and conditions that can be overwhelming to navigate. Our job is to cut through the jargon and explain your options in clear, easy-to-understand language. We’ll discuss the pros and cons of fixed versus variable interest rates, the impact of loan terms on your repayments, and the potential benefits of additional features like redraw facilities or early repayment options.</p>
        </div>
      </div>
    </div>
  );
};

export default Page;