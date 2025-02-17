"use client"
import React from 'react';
import RentVsBuyCalculator from './_components/rent_buy';
import BudgetPlanner from './_components/budget_tracker';
import LoanComparisonCalculator from './_components/calc-loan';
import CompoundInterestCalculator from './_components/compound-cal';
import ExtraRepaymentCalculator from './_components/extra-rep';
import HomeLoanOffsetCalculator from './_components/home-loans';
import CreditCardRepaymentCalculator from './_components/credit-card';

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Cover Image Section */}
      <div className="w-full h-[60vh] relative shadow-lg overflow-hidden">
        <img 
          src="./home-calc.jpg" 
          alt="Cover"        
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            Home Calculators
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center max-w-7xl px-4 py-8  rounded-lg mt-8 space-y-12">
        <h3 className="text-lg sm:text-xl md:text-2xl text-center text-gray-700 font-medium mb-8">
          Using our online calculators, you can find out just how much you would have to invest each month. With this knowledge, you can plan your investments in such a way that you reach your financial goals in the most effective and efficient manner.
        </h3>

        <div className="w-full space-y-10">
          <RentVsBuyCalculator />
          <BudgetPlanner />
          <LoanComparisonCalculator />
          <CompoundInterestCalculator />
          <ExtraRepaymentCalculator />
          <HomeLoanOffsetCalculator />
          <CreditCardRepaymentCalculator />
        </div>
      </div>
    </div>
  );
};

export default Page;
