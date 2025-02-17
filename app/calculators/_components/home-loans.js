import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function HomeLoanOffsetCalculator() {
    // Initial form input values
    const initialInputs = {
        loanAmount: "400000",
        interestRate: "5.50",
        loanTerm: "30",
        repaymentFrequency: "12", // Monthly repayments
        offsetBalance: "50000", // Offset account balance
    };

    // State to manage form inputs
    const [inputs, setInputs] = useState(initialInputs);
    
    // State to manage chart data (loan balance over time with offset balance)
    const [chartData, setChartData] = useState([]);
    
    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        calculateLoanBalance();
    };

    const calculateLoanBalance = () => {
        const principal = parseFloat(inputs.loanAmount) || 0;
        const rate = parseFloat(inputs.interestRate) / 100 / 12 || 0;
        const term = parseFloat(inputs.loanTerm) || 0;
        const frequency = parseFloat(inputs.repaymentFrequency) || 12;
        const offsetBalance = parseFloat(inputs.offsetBalance) || 0;

        const monthlyRepayment = (principal * rate) / (1 - Math.pow(1 + rate, -term * frequency));
        let remainingBalance = principal;
        let offsetBalanceRemaining = offsetBalance;
        const data = [];

        for (let month = 1; month <= term * frequency; month++) {
            // Apply offset balance to reduce interest calculation
            const interestToPay = (remainingBalance - offsetBalanceRemaining) * rate;
            remainingBalance = remainingBalance + interestToPay - monthlyRepayment;

            // Push data for chart (month, loan balance after offset, and offset balance)
            data.push({
                month: month,
                loanBalance: remainingBalance < 0 ? 0 : remainingBalance, // Ensure no negative values
                offsetBalance: offsetBalanceRemaining,
            });
        }

        setChartData(data);
    };

    // Calculate on first render
    useEffect(() => {
        calculateLoanBalance();
    }, []);

    return (
        <div className="flex flex-col gap-8 p-8 rounded-lg shadow-lg">
            <Accordion type="single" collapsible defaultValue="home-loan-offset">
                <AccordionItem value="home-loan-offset">
                    <AccordionTrigger className="text-lg font-medium">
                        Home Loan Offset Calculator
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Form Section */}
                            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Home Loan Offset Calculator</h2>
                                <div className="space-y-4">
                                    {Object.keys(inputs).map((key) => (
                                        <div key={key}>
                                            <label className="block font-medium text-gray-700 capitalize">
                                                {key.replace(/([A-Z])/g, " $1").replace("repaymentFrequency", "Repayment Frequency (per year)")}: 
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
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Loan Balance Over Time</h3>
                                    <CardContent>
                                        <ResponsiveContainer width="100%" height={350}>
                                            <LineChart data={chartData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" label={{ value: "Months", position: "insideBottom", offset: -5 }} />
                                                <YAxis label={{ value: "Loan Balance ($)", angle: -90, position: "insideLeft" }} />
                                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                                <Legend verticalAlign="top" align="right" />
                                                <Line
                                                    type="monotone"
                                                    dataKey="loanBalance"
                                                    stroke="#8884d8"
                                                    activeDot={{ r: 8 }}
                                                    name="Loan Balance (with Offset)"
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="offsetBalance"
                                                    stroke="#82ca9d"
                                                    activeDot={{ r: 8 }}
                                                    name="Offset Balance"
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
