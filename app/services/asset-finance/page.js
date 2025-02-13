import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
        <img 
          src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-642454136.jpg" 
          alt="Cover"        
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Asset Finance</h1>
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
          <h2 className="text-2xl font-semibold mb-4">About Asset Finance</h2>
          <p className="text-gray-600">
            Asset Finance is a type of credit that supports small to medium-sized enterprises, self-employed individuals, and contractors in acquiring essential equipment for their business operations. This can include vehicles like trucks and utes, machinery such as forklifts, and even outfitting an entire warehouse.
          </p>
          <h3 className="text-xl font-semibold mt-4">We offer several financing options:</h3>
          <p className="text-gray-600 mt-2"><strong>Commercial Hire Purchase:</strong> With this option, you can hire the asset and use it while making payments over time. Ownership transfers to you after the final payment. This loan type offers flexibility in customising payment plans, choosing the duration, deciding on a down payment, and determining the balloon payment amount. This customisation helps business owners manage their cash flow more effectively.</p>
          <p className="text-gray-600 mt-2"><strong>Chattel Mortgage:</strong> This approach is popular among businesses, as the loan is secured by the asset itself, providing immediate ownership. You can set the loan term, typically up to five years, and arrange repayments to suit your needs. This can also be structured to provide cash flow relief when required, offering on-the-spot flexibility.</p>
          <p className="text-gray-600 mt-2"><strong>Finance Lease:</strong> In this option, the lender retains ownership of the asset, while the client is responsible for its eventual sale or disposal at the end of the lease term. This is ideal for businesses needing equipment or high-cost assets without depleting their capital reserves.</p>
          <p className="text-gray-600 mt-4">Interested in learning more? I’m dedicated to understanding you, your business, and your goals. I’m here to offer advice and guide you towards the best financing solution for your needs.</p>
          <p className="text-gray-600 mt-4">For further details or to start the application process, please use our online contact form or give us a call, and we will get in touch promptly.</p>
        </div>
      </div>
    </div>
  );
};

export default Page;