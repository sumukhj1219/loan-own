import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
        <img 
          src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-475903022.jpg" 
          alt="Cover"        
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Personal Loans</h1>
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
          <h2 className="text-2xl font-semibold mb-4">Personal Loans</h2>
          <p className="text-gray-600">
          At Premium Portfolio Finance we cater for your personal loan needs. As a dedicated Australian Mortgage Broker servicing the towns of Fremantle and its neighboring areas, we’re here to offer you a personalised and understanding approach to securing a personal loan that fits your unique circumstances.
          </p>
          <p className="text-gray-600 mt-2">
          A personal loan can serve as a flexible financial tool to help you meet a variety of needs, whether it’s funding home renovations, consolidating debt, or planning that dream holiday. At Premium Portfolio Finance, we specialize in navigating the myriads of personal loan products available in the market to find one that aligns with your specific goals and financial situation.
          </p>
          <p className="text-gray-600 mt-2">
          The first step in our service is a one-on-one consultation, where we take the time to understand your financial objectives and the purpose behind your loan. This allows us to tailor our search for loan options that not only provide competitive interest rates but also flexible repayment terms that can adapt to your lifestyle and budget.
          </p>
          <p className="text-gray-600 mt-2">
          We pride ourselves on our ability to simplify the complex financial landscape for our clients. We’ll walk you through the different types of personal loans, from secured to unsecured, and explain the various features and benefits that each lender offers. Our aim is to demystify the fine print and empower you with the knowledge to make an informed decision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;