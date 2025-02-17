import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function LoanComparisonCalculator() {
    // Initial data for the form
    const initialInputs = {
        loanAmount: "150000",
        loanTerm: "25",
        introInterestRate: "4.50",
        introTerm: "12",
        standardRate: "5.50",
        upfrontFees: "600",
        ongoingFees: "10",
        endFees: "0",
    };

    // Initialize state with the initial data
    const [inputs, setInputs] = useState(initialInputs);

    // Initialize chart data with the corresponding values from the inputs
    const [comparisonData, setComparisonData] = useState([
        { name: "Loan Amount", value: parseFloat(initialInputs.loanAmount) || 0 },
        { name: "Upfront Fees", value: parseFloat(initialInputs.upfrontFees) || 0 },
        { name: "Ongoing Fees", value: parseFloat(initialInputs.ongoingFees) || 0 },
        { name: "End Fees", value: parseFloat(initialInputs.endFees) || 0 },
    ]);

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        calculateLoanCosts();
    };

    const calculateLoanCosts = () => {
        const loanAmount = parseFloat(inputs.loanAmount) || 0;
        const loanTerm = parseFloat(inputs.loanTerm) || 0;
        const introInterestRate = parseFloat(inputs.introInterestRate) || 0;
        const introTerm = parseFloat(inputs.introTerm) || 0;
        const standardRate = parseFloat(inputs.standardRate) || 0;
        const upfrontFees = parseFloat(inputs.upfrontFees) || 0;
        const ongoingFees = parseFloat(inputs.ongoingFees) || 0;
        const endFees = parseFloat(inputs.endFees) || 0;

        // Calculate total interest for intro period and standard period
        const introMonthlyRate = introInterestRate / 100 / 12;
        const standardMonthlyRate = standardRate / 100 / 12;
        const monthsIntro = introTerm;
        const monthsStandard = loanTerm * 12 - introTerm;

        // Monthly payments for intro and standard periods
        const introMonthlyPayment = (loanAmount * introMonthlyRate) / (1 - Math.pow(1 + introMonthlyRate, -monthsIntro));
        const standardMonthlyPayment = (loanAmount * standardMonthlyRate) / (1 - Math.pow(1 + standardMonthlyRate, -monthsStandard));

        // Calculate total cost (interest + fees)
        const totalIntroCost = introMonthlyPayment * monthsIntro + upfrontFees + ongoingFees * monthsIntro + endFees;
        const totalStandardCost = standardMonthlyPayment * monthsStandard + ongoingFees * monthsStandard;

        // Update chart data
        setComparisonData([
            { name: "Loan Amount", value: loanAmount },
            { name: "Upfront Fees", value: upfrontFees },
            { name: "Ongoing Fees", value: ongoingFees * loanTerm * 12 },
            { name: "End Fees", value: endFees },
            { name: "Intro Period Total Cost", value: totalIntroCost },
            { name: "Standard Period Total Cost", value: totalStandardCost },
        ]);
    };

    // Run calculation once when the component mounts to set the initial chart data
    useEffect(() => {
        calculateLoanCosts();
    }, []);

    return (
        <div className="flex flex-col  gap-8 p-8  rounded-lg shadow-lg">
            <Accordion type="single" collapsible defaultValue="loan-comparison">
                <AccordionItem value="loan-comparison">
                    <AccordionTrigger className="text-lg font-medium">
                        Loan Comparison Calculator
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Form Section */}
                            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Loan Comparison</h2>
                                <div className="space-y-4">
                                    {Object.keys(inputs).map((key) => (
                                        <div key={key}>
                                            <label className="block font-medium text-gray-700 capitalize">
                                                {key.replace(/([A-Z])/g, " $1").replace("Intro", "")}:
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
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Loan Cost Comparison</h3>
                                    <CardContent>
                                        <ResponsiveContainer width="100%" height={350}>
                                            <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                                <XAxis dataKey="name" />
                                                <YAxis label={{ value: "$ Amount", angle: -90, position: "insideLeft" }} />
                                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                                <Legend verticalAlign="top" align="right" />
                                                <Bar dataKey="value" fill="#82ca9d" name="Costs" barSize={30} radius={[5, 5, 0, 0]} />
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
