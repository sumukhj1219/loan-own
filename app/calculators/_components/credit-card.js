import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function CreditCardRepaymentCalculator() {
    // Initial form input values
    const initialInputs = {
        cardFee: "0",
        interestRate: "18.00",
        balanceOutstanding: "10000",
        minRepaymentPercentage: "2.50",
        minRepaymentAmount: "10",
        initialMinRepayment: "250",
        higherRepayment: "300",
    };

    // State to manage form inputs
    const [inputs, setInputs] = useState(initialInputs);
    
    // State to manage chart data (credit card balance and repayment schedule)
    const [chartData, setChartData] = useState([]);

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        calculateRepaymentSchedule();
    };

    const calculateRepaymentSchedule = () => {
        const balance = parseFloat(inputs.balanceOutstanding) || 0;
        const interestRate = parseFloat(inputs.interestRate) / 100 / 12 || 0;
        const minRepaymentPercentage = parseFloat(inputs.minRepaymentPercentage) / 100 || 0;
        const minRepaymentAmount = parseFloat(inputs.minRepaymentAmount) || 0;
        const initialMinRepayment = parseFloat(inputs.initialMinRepayment) || 0;
        const higherRepayment = parseFloat(inputs.higherRepayment) || 0;

        let currentBalance = balance;
        let totalRepayment = initialMinRepayment;
        let data = [];
        let months = 0;

        while (currentBalance > 0) {
            // Calculate interest for the current month
            const interest = currentBalance * interestRate;
            
            // Update the balance after the repayment
            currentBalance = currentBalance + interest - totalRepayment;
            
            // Store data for chart (month, balance after payment)
            data.push({
                month: months + 1,
                balance: currentBalance < 0 ? 0 : currentBalance, // Prevent negative balance
                repayment: totalRepayment,
            });
            
            // Increase repayment after a certain number of months
            if (months > 0 && months % 6 === 0) {
                totalRepayment = higherRepayment; // Switch to higher repayment after 6 months
            }

            months++;
        }

        setChartData(data);
    };

    // Calculate on first render
    useEffect(() => {
        calculateRepaymentSchedule();
    }, []);

    return (
        <div className="flex flex-col gap-8 p-8  rounded-lg shadow-lg">
            <Accordion type="single" collapsible defaultValue="credit-card-repayment">
                <AccordionItem value="credit-card-repayment">
                    <AccordionTrigger className="text-lg font-medium">
                        Credit Card Repayment Calculator
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Form Section */}
                            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Credit Card Repayment Calculator</h2>
                                <div className="space-y-4">
                                    {Object.keys(inputs).map((key) => (
                                        <div key={key}>
                                            <label className="block font-medium text-gray-700 capitalize">
                                                {key.replace(/([A-Z])/g, " $1").replace("minRepaymentPercentage", "Min Repayment (%)")}: 
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

                            {/* Graph Section */}
                            <div className="w-full">
                                <Card className="p-6 bg-white rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Credit Card Repayment Over Time</h3>
                                    <CardContent>
                                        <ResponsiveContainer width="100%" height={350}>
                                            <LineChart data={chartData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" label={{ value: "Months", position: "insideBottom", offset: -5 }} />
                                                <YAxis label={{ value: "Balance ($)", angle: -90, position: "insideLeft" }} />
                                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                                <Legend verticalAlign="top" align="right" />
                                                <Line
                                                    type="monotone"
                                                    dataKey="balance"
                                                    stroke="#8884d8"
                                                    activeDot={{ r: 8 }}
                                                    name="Balance"
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="repayment"
                                                    stroke="#82ca9d"
                                                    activeDot={{ r: 8 }}
                                                    name="Repayment"
                                                />
                                            </LineChart>
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
