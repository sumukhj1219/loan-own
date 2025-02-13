import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs =
    [
        {
            question: "How does an Offset account work?",
            answer: "An offset account is a type of bank account linked to your mortgage that helps reduce the interest you pay on your home loan. Instead of earning interest on the funds in this account, the balance is subtracted from your mortgage principal. For instance, if you have a $300,000 mortgage and $20,000 in your offset account, you’ll only be charged interest on $280,000. This can lead to significant savings on interest over the life of the loan and allow you to pay off your mortgage more quickly. Plus, the money in the offset account remains easily accessible, offering flexibility for your financial needs."
        },
        {
            question: "What is the difference between an offset and redraw?",
            answer: "An offset account and a redraw facility are both features that can help reduce the interest paid on a home loan, but they operate differently. An offset account is a separate transaction account linked to your mortgage, where the balance is deducted from your loan principal for interest calculation purposes. This can lower the interest you owe and help you pay off your loan faster while keeping your funds easily accessible. On the other hand, a redraw facility allows you to make extra repayments on your mortgage and then withdraw those additional funds if needed. While both options offer flexibility and potential interest savings, an offset account provides immediate access to your money, whereas a redraw facility may have limitations on the amount and frequency of withdrawals."
        },
        {
            question: "What is a Family Pledge or Family Guarantee loan?",
            answer: "A Family Pledge or Family Guarantee loan is a type of home loan designed to help individuals, especially first-time buyers, enter the property market with the assistance of a family member, typically a parent. In this arrangement, the family member uses the equity in their property as additional security for the borrower’s loan. This can potentially eliminate the need for a large deposit and avoid the cost of Lenders Mortgage Insurance (LMI). The family member’s property is not used to cover the entire loan, but rather a portion of it, reducing the risk involved. This type of loan can make homeownership more accessible by leveraging family support, but it also involves careful consideration and commitment from both parties, as the guarantor’s property is at risk if the borrower defaults on the loan."
        },
        {
            question: "How does negative gearing work?",
            answer: "Negative gearing is a financial strategy commonly used in real estate investment, where the costs of owning and managing a property exceed the rental income it generates. Essentially, an investor borrows money to purchase a property, and if the expenses—including mortgage interest, maintenance, and other costs—are higher than the rental income, the property is considered negatively geared. The advantage of negative gearing lies in the tax benefits: the loss incurred can be offset against the investor’s other income, such as salary, thereby reducing their overall taxable income. This can result in significant tax savings, making the investment more attractive despite the initial losses. However, the strategy relies on the expectation that the property’s value will appreciate over time, eventually leading to capital gains that outweigh the ongoing losses."
        },
        {
            question: "How does an SMSF loan work?",
            answer: "A Self-Managed Super Fund (SMSF) loan is a type of loan that allows SMSFs to borrow money to purchase investment properties, such as residential or commercial real estate. This is done through a structure known as a Limited Recourse Borrowing Arrangement (LRBA), where the lender’s recourse is limited to the asset purchased with the borrowed funds, protecting the other assets within the SMSF. The property is held in a separate trust until the loan is repaid. Rental income from the property and other fund earnings can be used to make loan repayments. An SMSF loan can enhance the fund’s investment portfolio by leveraging property assets, but it also involves strict compliance with superannuation laws and regulations, and careful financial planning to ensure the long-term benefits outweigh the risks and costs"
        },
        {
            question: "How do brokers get paid?",
            answer: `Yes, we are generally paid by the lender once a loan settles. This is not added to your loan, fees, or interest rate in any way…

The current mortgage broker commission structure is made up of an upfront fee, clawback and an ongoing trail commission.

Australian lenders pay a commission to brokers for the introduction of new home loans.This means we, as your broker, are paid by your lender for helping you find a suitable loan.This is what we call an upfront commission.

Mortgage brokers also receive what is known as trail commission on some loans.This is a deferred payment that the lender pays the broker over the life of the loan, it is part of the total upfront commission amount that is paid monthly to assist cash flow for our business.

This means that if your broker helps you secure a home loan, the broker will receive the initial upfront commission and then for every month you are still in that loan, your broker will receive a trail commission from the lender.

If you decide that you no longer want to stay with the same home loan, or if you default on the loan payments, you reach a level of arrears, or if you pay off the loan altogether or have an equivalent amount to the loan balance in a linked offset account your broker will no longer receive trail commission.

Brokers do not receive any payment if your loan does not proceed through to settlement, so we work very hard to get the loan approved ….and to ensure that the loan is in line with your financial position and suits your current and future needs.

A current application can take many hours of work to research and put together the proposal and compliance requirements to present to a client, and 20+ hours from initial enquiry to settlement.

In our industry we are also at the mercy of ‘clawback’ and ‘nett of offset’.

                A ‘Clawback’ is a recovery of previous commission paid and is charged by lenders to mortgage brokers for home loans that are repaid, closed or refinanced within 2 years of the settlement date.The clawback amount varies from lender to lender, however most banks will clawback 100% of any upfront commission paid to the broker in the first year- meaning we have put in all that hard work to get your loan approved for no monetary benefit, we are working for free!

If the loan is paid out after the first 12 months and up to 24 months, then the Clawback applied is generally 50 % of the commission paid to the broker.

 

Clawback example:

You settle on your new home and loan in January of 2021. A commission is paid to us as your broker around the end of February 2021.

We are now in March 2022, and the market has moved significantly over the past year.You receive an offer to sell the home to your neighbour, which is too good to refuse.The sale settles in April 2022, and you have made a nice tidy profit of $200,000 +

    Unfortunately, due to the clawback regulations in this industry, myself, as your broker would be ‘Clawed back’ 50 % of our initial commission from your lender, a long 15 months after it was paid to us.

The impact is the same if you refinance via a branch or other broker inside the 2 - year period, so I really appreciate it if you are happy with my service that you come back to me if you are looking to refinance or take a small top up loan or make any changes.

I am bound by Best Interest Duty to always put your interests first and so if you want to refinance for a better rate I will always look at the whole picture, try to get you the best rate possible with your current lender first to save you incurring the cost and hassle of refinancing, and then give you comparisons and options with a range of other lenders as well.

Our regulators and industry bodies are still working on a solution to ‘Clawback’ as we are the only profession I know of whose income / livelihood is at risk for up to 24 months after the work has been completed.

Nett of offset:

If you have a linked offset account with your loan the broker is only paid trail commission based on the difference between the loan balance and the offset balance at any point in the life of the loan.

For example, if you draw down a loan of $500,000 but have $400,000 in the offset account at any point then the trail payment is only paid on the $100,000 difference, if the offset has $500,000 funds from the settlement date deposited then there will be no upfront commission paid either.`
        },
        {
            question:"What does a mortgage broker do?",
            answer:"A mortgage broker helps you find and secure the best home loan by comparing options from multiple lenders, handling paperwork, and negotiating rates on your behalf."
        },
        {
            question:"Why should I use a mortgage broker instead of going directly to a bank?",
            answer:"Brokers offer access to many lenders and loan products, often securing better rates and terms than a single bank"
        },
        {
            question:"How do mortgage brokers get paid?",
            answer:"Brokers typically receive a commission from the lender when a loan is settled, which means their services are usually free for borrowers."
        },
        {
            question:"Do mortgage brokers charge a fee?",
            answer:"In most cases, brokers do not charge borrowers a direct fee. However, some may charge a fee for complex cases. Always ask upfront"
        },
        {
            question:"Is using a mortgage broker safe?",
            answer:"Yes, licensed mortgage brokers in Australia follow strict regulations set by ASIC and are often members of industry bodies like FBAA or MFAA."
        },
        {
            question:"What is the minimum deposit required for a home loan?",
            answer:"Most lenders require at least a 5–10% deposit, but a 20% deposit helps you avoid Lenders Mortgage Insurance (LMI)."
        },
        {
            question:"What is Lenders Mortgage Insurance (LMI)?",
            answer:"LMI is a fee charged by lenders when your deposit is less than 20%. It protects the lender if you default on the loan"
        },
        {
            question:"How much can I borrow?",
            answer:"Your borrowing capacity depends on factors like income, expenses, credit score, and existing debts. A mortgage broker can assess your situation."
        },
]

const FaqQuestions = () => {
    return (
        <div className="max-w-4xl mx-auto min-h-screen py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
}

export default FaqQuestions