import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
        <img 
          src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-1992544821.jpg" 
          alt="Cover"        
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Construction Loans</h1>
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
          <h2 className="text-2xl font-semibold mb-4">About Contruction Loans</h2>
          <p className="text-gray-600">
          We offer personalized service that begins with a comprehensive assessment of your financial situation. Construction loans require meticulous planning, as they are disbursed in stages corresponding to different phases of the build. We’ll sit down with you to discuss your plans, budget, and timeline to ensure we secure a loan that aligns with the cash flow requirements of your construction project
          </p>
          <p className="text-gray-600 mt-2">
          Once we have a clear understanding of your project, we’ll explain the various loan structures available to you. A construction loan typically involves a progress payment system, meaning funds are released at key milestones throughout the build. This is where our expertise becomes invaluable; we help you understand how these drawdowns work, ensuring that you have the necessary funds available when your builder is ready to move onto the next stage.
          </p>
          <p className="text-gray-600 mt-2">
          We have a strong network of over 50 lenders offering a variety of construction loan products. Our role is to navigate these options and present you with the most competitive and suitable choices. Whether you need a loan that allows for interest-only payments during the construction period or one that offers a line of credit for additional flexibility, we’ve got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;