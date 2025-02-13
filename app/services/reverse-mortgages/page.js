import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
        <img 
          src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-92044493.jpg" 
          alt="Cover"        
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Reverse Mortgages</h1>
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
          <h2 className="text-2xl font-semibold mb-4">Invaluable assistance to individuals considering a reverse mortgage</h2>
          <p className="text-gray-600">
          Finance Home Loans can provide invaluable assistance to individuals considering a reverse mortgage by offering expert guidance and tailored financial advice. Their team of experienced advisors can help homeowners understand the intricacies of reverse mortgages, including the eligibility criteria, potential benefits, and associated risks. By conducting a thorough assessment of the homeowner’s financial situation and long-term goals, Finance Home Loans can recommend the most suitable reverse mortgage products available in the market. This personalised approach ensures that clients make well-informed decisions that align with their financial needs and aspirations.
          </p>
          <p className="text-gray-600 mt-2">
          Furthermore, Finance Home Loans can assist with the entire application process, making it as smooth and stress-free as possible. They can help prepare and organise the necessary documentation, liaise with lenders on behalf of the client, and provide ongoing support throughout the approval process. By leveraging their industry expertise and established relationships with financial institutions, Finance Home Loans can often secure more favourable terms and conditions for their clients. This comprehensive support not only simplifies the process but also enhances the likelihood of a successful outcome, allowing homeowners to unlock the value of their property and enjoy greater financial flexibility in their retirement years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;