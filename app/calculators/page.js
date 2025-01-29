"use client"
import { useState } from "react";

export default function RentVsBuyCalculator() {
  const [rent, setRent] = useState(1200);
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(5);
  const [propertyTax, setPropertyTax] = useState(1.2);
  const [hoaFees, setHoaFees] = useState(100);
  const [homeInsurance, setHomeInsurance] = useState(1200);

  const calculateBuyCost = () => {
    const loanAmount = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const mortgagePayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const monthlyPropertyTax = (homePrice * (propertyTax / 100)) / 12;
    const monthlyHomeInsurance = homeInsurance / 12;
    return (
      mortgagePayment +
      monthlyPropertyTax +
      monthlyHomeInsurance +
      parseFloat(hoaFees)
    );
  };

  const buyCost = calculateBuyCost();
  const rentCost = parseFloat(rent);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Rent vs. Buy Calculator</h2>
      <div className="grid grid-cols-2 gap-4">
        <label>
          Monthly Rent ($):
          <input
            type="number"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
        <label>
          Home Price ($):
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
        <label>
          Down Payment ($):
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
        <label>
          Loan Term (years):
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
        <label>
          Interest Rate (%):
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
        <label>
          Property Tax (% per year):
          <input
            type="number"
            value={propertyTax}
            onChange={(e) => setPropertyTax(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
        <label>
          HOA Fees ($ per month):
          <input
            type="number"
            value={hoaFees}
            onChange={(e) => setHoaFees(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
        <label>
          Home Insurance ($ per year):
          <input
            type="number"
            value={homeInsurance}
            onChange={(e) => setHomeInsurance(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Monthly Costs</h3>
        <p>Renting: ${rentCost.toFixed(2)}</p>
        <p>Buying: ${buyCost.toFixed(2)}</p>
        <p className="mt-2 font-bold">
          {buyCost > rentCost
            ? "Renting may be more affordable."
            : "Buying may be a better long-term option."}
        </p>
      </div>
    </div>
  );
}
