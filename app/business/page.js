import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
                <img
                    src="./sydney-aus.jpg"
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Our Loan Mortgages Story</h1>
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
                        <Textarea placeholder="Your Message" className="w-full h-96" />
                        <Button className="w-full">Submit</Button>
                    </form>
                </div>

                <div className="p-6 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">About LNO Mortgages Business
                        Your Trusted Partner in Finance and Lending
                    </h2>
                    <p className="text-gray-600">
                        LNO Mortgages is built on trust, transparency, and expertise. Whether you're a first-time homebuyer, an investor, or a business owner looking for commercial finance, we simplify the lending process and find the best financial solutions for your needs.
                        We work with a broad network of lenders, giving you access to a diverse range of loan products, from home loans and investment loans to business and commercial financing.
                    </p>
                    <p className="text-gray-600 mt-2">
                        Investing in property through an SMSF can be a powerful wealth-building strategy, but navigating the complexities of SMSF lending requires expert knowledge. At LNO Mortgages, we provide tailored SMSF loan solutions to help you grow your retirement savings while ensuring full compliance with Australian regulations.
                        Why Choose LNO Mortgages?<br></br>
                        
                        ✅ Personalized Service – We take the time to understand your goals and financial situation to offer the best lending solutions.<br></br>
                        ✅ Access to Multiple Lenders – With an extensive panel of lenders, we help you secure competitive interest rates and loan terms.<br></br>
                        ✅ Expert Guidance – Our industry knowledge ensures you get the right loan with a stress-free application process.<br></br>
                        ✅ Fast & Transparent Process – We handle the complexities, keeping you informed at every step.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;