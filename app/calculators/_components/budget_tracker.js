import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function BudgetPlanner() {
    // Initial data for the form
    const initialInputs = {
        netSalary: "5000",
        netBonuses: "1000",
        netSalaryPartner: "3000",
        netBonusesPartner: "500",
        investmentIncome: "200",
        pensionsAllowances: "400",
        rentalIncome: "0",
        otherIncome: "100",
    };

    // Initialize state with the initial data
    const [inputs, setInputs] = useState(initialInputs);

    // Initialize chart data with the corresponding values from the inputs
    const [totalIncomeData, setTotalIncomeData] = useState([
        { name: "Net Salary", value: parseFloat(initialInputs.netSalary) || 0 },
        { name: "Net Bonuses", value: parseFloat(initialInputs.netBonuses) || 0 },
        { name: "Net Salary (Partner)", value: parseFloat(initialInputs.netSalaryPartner) || 0 },
        { name: "Net Bonuses (Partner)", value: parseFloat(initialInputs.netBonusesPartner) || 0 },
        { name: "Investment Income", value: parseFloat(initialInputs.investmentIncome) || 0 },
        { name: "Pensions & Allowances", value: parseFloat(initialInputs.pensionsAllowances) || 0 },
        { name: "Rental Income", value: parseFloat(initialInputs.rentalIncome) || 0 },
        { name: "Other Income", value: parseFloat(initialInputs.otherIncome) || 0 },
    ]);

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        calculateTotalIncome();
    };

    const calculateTotalIncome = () => {
        const data = [
            { name: "Net Salary", value: parseFloat(inputs.netSalary) || 0 },
            { name: "Net Bonuses", value: parseFloat(inputs.netBonuses) || 0 },
            { name: "Net Salary (Partner)", value: parseFloat(inputs.netSalaryPartner) || 0 },
            { name: "Net Bonuses (Partner)", value: parseFloat(inputs.netBonusesPartner) || 0 },
            { name: "Investment Income", value: parseFloat(inputs.investmentIncome) || 0 },
            { name: "Pensions & Allowances", value: parseFloat(inputs.pensionsAllowances) || 0 },
            { name: "Rental Income", value: parseFloat(inputs.rentalIncome) || 0 },
            { name: "Other Income", value: parseFloat(inputs.otherIncome) || 0 },
        ];

        setTotalIncomeData(data);
    };

    // Run calculation once when the component mounts to set the initial chart data
    useEffect(() => {
        calculateTotalIncome();
    }, []);

    return (
        <div className="flex flex-col  gap-8 p-8  rounded-lg shadow-lg">
            <Accordion type="single" collapsible defaultValue="budget">
                <AccordionItem value="budget">
                    <AccordionTrigger className="text-lg font-medium">
                        Budget Planner
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Form Section */}
                            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Budget Planner</h2>
                                <div className="space-y-4">
                                    {Object.keys(inputs).map((key) => (
                                        <div key={key}>
                                            <label className="block font-medium text-gray-700 capitalize">
                                                {key.replace(/([A-Z])/g, " $1").replace("Net", "")}:
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
                            <div className="w-full ">
                                <Card className="p-6 bg-white rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Total Income Breakdown</h3>
                                    <CardContent>
                                        <ResponsiveContainer width="100%" height={350}>
                                            <BarChart data={totalIncomeData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                                <XAxis dataKey="name" />
                                                <YAxis label={{ value: "$ Amount", angle: -90, position: "insideLeft" }} />
                                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                                <Legend verticalAlign="top" align="right" />
                                                <Bar dataKey="value" fill="#82ca9d" name="Income Sources" barSize={30} radius={[5, 5, 0, 0]} />
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
