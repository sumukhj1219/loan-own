import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function RentVsBuyCalculator() {
    const [inputs, setInputs] = useState({
        rent: "1500",
        annualRentIncrease: "2",
        homePrice: "300000",
        downPayment: "60000",
        interestRate: "4.5",
        loanTerm: "30",
        propertyTax: "1.2",
        maintenance: "0.5",
    });

    const [chartData, setChartData] = useState(
        Array.from({ length: 7 }, (_, i) => ({
            years: i * 5,
            rentSavings: i * 20000,
            homeEquity: i * 30000,
        }))
    );

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        calculate();
    };

    const calculate = () => {
        const rent = parseFloat(inputs.rent) || 0;
        const annualRentIncrease = parseFloat(inputs.annualRentIncrease) || 0;
        const homePrice = parseFloat(inputs.homePrice) || 0;
        const downPayment = parseFloat(inputs.downPayment) || 0;
        const interestRate = parseFloat(inputs.interestRate) || 0;
        const loanTerm = parseFloat(inputs.loanTerm) || 0;
        const propertyTax = parseFloat(inputs.propertyTax) || 0;
        const maintenance = parseFloat(inputs.maintenance) || 0;

        const newChartData = Array.from({ length: 7 }, (_, i) => {
            const years = i * 5;
            return {
                years,
                rentSavings: calculateTotalRent(rent, annualRentIncrease, years),
                homeEquity: calculateTotalBuyCost(homePrice, downPayment, interestRate, loanTerm, propertyTax, maintenance, years),
            };
        });

        setChartData(newChartData);
    };

    const calculateTotalRent = (rent, annualIncrease, years) => {
        let total = 0;
        for (let i = 0; i < years; i++) {
            total += rent * 12;
            rent *= 1 + annualIncrease / 100;
        }
        return total;
    };

    const calculateTotalBuyCost = (price, downPayment, rate, term, tax, maintenance, years) => {
        const loanAmount = price - downPayment;
        const monthlyRate = rate / 100 / 12;
        const months = term * 12;
        const monthlyMortgage = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
        const totalMortgage = monthlyMortgage * 12 * years;
        const totalPropertyTax = (price * (tax / 100)) * years;
        const totalMaintenance = (price * (maintenance / 100)) * years;
        return totalMortgage + totalPropertyTax + totalMaintenance + downPayment;
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 p-8 rounded-lg shadow-lg">
            <Accordion type="single" collapsible defaultValue="calculator">
                <AccordionItem value="calculator">
                    <AccordionTrigger className="text-lg font-medium">
                        Rent vs Buy Calculator
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Rent vs Buy Calculator</h2>
                                <div className="space-y-4">
                                    {Object.keys(inputs).map((key) => (
                                        <div key={key}>
                                            <label className="block font-medium text-gray-700 capitalize">
                                                {key.replace(/([A-Z])/g, " $1")}:
                                            </label>
                                            <Input
                                                className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
                                                type="number"
                                                name={key}
                                                value={inputs[key]}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full ">
                                <Card className="p-6 bg-white rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Financial Projection</h3>
                                    <CardContent>
                                        <ResponsiveContainer width="100%" height={350}>
                                            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                                <XAxis
                                                    dataKey="years"
                                                    ticks={[0, 5, 10, 15, 20, 25, 30]}
                                                    label={{ value: "Years", position: "insideBottom", offset: -5 }}
                                                />
                                                <YAxis
                                                    label={{ value: "$ Amount", angle: -90, position: "insideLeft" }}
                                                />
                                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                                <Legend verticalAlign="top" align="right" />
                                                <Bar dataKey="rentSavings" fill="#82ca9d" name="Rent - Savings" barSize={30} radius={[5, 5, 0, 0]} />
                                                <Bar dataKey="homeEquity" fill="#8884d8" name="Buy - Home Equity" barSize={30} radius={[5, 5, 0, 0]} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
