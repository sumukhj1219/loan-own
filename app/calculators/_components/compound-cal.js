import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const COLORS = ["#82ca9d", "#8884d8"]; // Green for principal, blue for interest

export default function CompoundInterestCalculator() {
    // Initial values for the form inputs
    const initialInputs = {
        loanAmount: "150000",
        interestRate: "4.50",
        term: "25",
        compoundingFrequency: "12", // Monthly compounding
    };

    // State to manage form inputs
    const [inputs, setInputs] = useState(initialInputs);
    
    // State to manage chart data (Principal and Interest breakdown)
    const [chartData, setChartData] = useState([
        { name: "Principal", value: parseFloat(inputs.loanAmount) || 0 },
        { name: "Interest", value: 0 },
    ]);

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        calculateCompoundInterest();
    };

    const calculateCompoundInterest = () => {
        const principal = parseFloat(inputs.loanAmount) || 0;
        const rate = parseFloat(inputs.interestRate) / 100 || 0;
        const time = parseFloat(inputs.term) || 0;
        const n = parseFloat(inputs.compoundingFrequency) || 1; // Monthly compounding

        // Compound Interest formula
        const amount = principal * Math.pow(1 + rate / n, n * time);
        const interest = amount - principal;

        // Set chart data with Principal and Interest breakdown
        setChartData([
            { name: "Principal", value: principal },
            { name: "Interest", value: interest },
        ]);
    };

    // Run calculation once when the component mounts to set the initial chart data
    useEffect(() => {
        calculateCompoundInterest();
    }, []);

    return (
        <div className="flex flex-col  gap-8 p-8 rounded-lg shadow-lg">
            <Accordion type="single" collapsible defaultValue="compound-interest">
                <AccordionItem value="compound-interest">
                    <AccordionTrigger className="text-lg font-medium">
                        Compound Interest Calculator
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Form Section */}
                            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Compound Interest Calculator</h2>
                                <div className="space-y-4">
                                    {Object.keys(inputs).map((key) => (
                                        <div key={key}>
                                            <label className="block font-medium text-gray-700 capitalize">
                                                {key.replace(/([A-Z])/g, " $1").replace("compoundingFrequency", "Compounding Frequency (per year)")}: 
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

                            {/* Chart Section */}
                            <div className="w-full">
                                <Card className="p-6 bg-white rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Principal vs Interest Breakdown</h3>
                                    <CardContent>
                                        <ResponsiveContainer width="100%" height={350}>
                                            <PieChart>
                                                <Pie
                                                    data={chartData}
                                                    dataKey="value"
                                                    nameKey="name"
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius="40%"
                                                    outerRadius="60%"
                                                    fill="#8884d8"
                                                    label
                                                >
                                                    {chartData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                            </PieChart>
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
