import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
        <img 
          src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-2074072839-1.jpg" 
          alt="Cover"        
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">First Home Buyers</h1>
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
          <h2 className="text-2xl font-semibold mb-4">First Home Buyers</h2>
          <p className="text-gray-600">
          Welcome to Finance Home Loans, where we specialise in guiding first-time homebuyers like you through the exciting journey of purchasing your very own property.
          </p>
          <p className="text-gray-600 mt-2">
          Our services are tailored to meet your unique needs as a first-time homebuyer. We begin by scheduling a one-on-one consultation to discuss your financial situation, your home-buying goals, and any concerns you may have. This initial conversation is crucial, as it helps us understand your aspirations and lay out a clear path towards homeownership.
          </p>
          <p className="text-gray-600 mt-2">
          We pride ourselves on our deep knowledge of the local property market and the lending landscape, which allows us to provide you with up-to-date advice on government incentives you may be eligible for, such as the First Home Owner Grant (FHOG) or stamp duty concessions. These can significantly reduce the upfront costs of buying your first home and are an essential part of the buying process.
          </p>
          <p className="text-gray-600 mt-2">
          At Finance Home Loans, we have established relationships with a wide range of lenders, from major banks to specialist finance providers. This means we can compare and contrast a variety of loan products to find one that suits your financial circumstances. Whether you’re looking for a fixed-rate loan to secure your repayments or a variable rate that offers flexibility, we have the expertise to navigate the options and pinpoint the right solution for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;