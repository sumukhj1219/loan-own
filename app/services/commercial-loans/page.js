import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
        <img 
          src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-1463712307.jpg" 
          alt="Cover"        
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Commercial Loans</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 max-w-7xl md:grid-cols-2 gap-8 w-full mt-10 px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Enquiry Form</h2>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="w-full" />
            <Input type="email" placeholder="Your Email" className="w-full" />
            <Textarea placeholder="Your Message" className="w-full h-96" />
            <Button className="w-full">Submit</Button>
          </form>
        </div>
        
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Commercial Loans</h2>
          <p className="text-gray-600">
            When it comes to commercial loans, it’s crucial to have a loan package tailored to your specific needs. Whether you’re an individual or part of a partnership, we compare and find the right fit to help you achieve success. The overall process is similar to residential lending, requiring proof of basics like a deposit and the capacity to repay the loan. However, it does get more complicated further in. We can help you navigate these complexities by comparing offerings from over 50 lenders to find the best match for you. My expertise will streamline the process, making it as stress-free as possible to find the perfect solution.
          </p>
          <h3 className="text-xl font-semibold mt-4">Residential and Commercial Loans – Key Differences:</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li><strong>Vacancy Periods:</strong> Commercial properties often face longer vacancy periods compared to residential properties.</li>
            <li><strong>Maintenance Costs:</strong> In commercial properties, the lessee typically bears the costs for maintenance, rates, and repairs, which means the property owner sees more profit. In contrast, residential landlords usually incur these costs.</li>
            <li><strong>Lease Terms:</strong> Residential leases are typically 6-12 months, whereas commercial leases can extend for much longer periods.</li>
            <li><strong>GST:</strong> The purchase of a commercial property involves paying GST (Goods and Services Tax), which can increase the property costs by 10%.</li>
          </ul>
          <p className="text-gray-600 mt-4">Whether you’re looking to purchase a commercial property or simply need more information, get in touch with me today by filling out the online application form. I will be in touch soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
