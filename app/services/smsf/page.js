import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
                <img
                    src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/iStock-1372189857.jpg"
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Self-managed super funds</h1>
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
                    <h2 className="text-2xl font-semibold mb-4">Self-managed super funds - SMSF</h2>
                    <p className="text-gray-600">
                        Self-Managed Super Funds (SMSFs) operate similarly to other superannuation funds. Throughout your career, you make contributions to your fund, which are then invested to accumulate wealth, ultimately providing for your retirement years.
                    </p>
                    <p className="text-gray-600 mt-2">
                        Are you considering starting a new SMSF? Absolutely, it’s possible! When you establish a new SMSF with the help of your accountant or financial planner, you can apply for an SMSF loan. You’ll need to provide a history of contributions from your previous super funds and obtain confirmation from your financial advisor or accountant that your assets are being transferred to your new SMSF.
                    </p>
                    <p className="text-gray-600 mt-2">
                        The property must be acquired with the intent of investment and must be rented out to an unrelated party at market rates.

                        The investment should not involve property development or construction, and vacant land is typically excluded.

                        The investment must satisfy the ‘sole purpose test’ of the Australian Taxation Office (ATO), ensuring the fund is maintained solely for providing retirement benefits to its members.

                        The property cannot be bought from, sold to, or occupied by a fund member, their family, or any close associates. However, a commercial property owned by the SMSF may be rented to a business owned by a fund member, provided it complies with certain conditions and the rent reflects current market values.

                        When purchasing through an SMSF, only properties with a single title per contract are permitted. For example, if you wish to buy a duplex that spans two titles and is being sold as one, you would need to restructure the purchase into two distinct transactions with separate loans.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;