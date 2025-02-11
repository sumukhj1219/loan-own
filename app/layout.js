import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Loan & Own Mortgages | Easy Home Loans & Financing",
  description:
    "Get the best mortgage rates and home loan options with Loan & Own Mortgages. Easy financing solutions tailored for you.",
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Loan & Own Mortgages",
        "url": "https://www.lnomortgages.com.au",
        "logo": "https://www.lnomortgages.com.au/logo-loan.jpg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-123-456-789",
          "contactType": "Customer Support",
        },
      }),
    },
  ],
  keywords: [
    "home loans",
    "mortgages",
    "australian loans",
    "loan financing",
    "mortgage brokers",
    "first-time home buyers",
    "low interest loans",
  ],
  openGraph: {
    title: "Loan & Own Mortgages | Easy Home Loans & Financing",
    description:
      "Find the perfect mortgage solution with Loan & Own. Secure low rates and expert financing advice today!",
    images: [
      {
        url: "/favicon.ico",
        width: 1260,
        height: 800,
        alt: "Loan & Own Mortgages Logo",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${bebasNeue.variable} antialiased`}>
        <Navbar />
        <div className="pt-20">{children}</div>
        <Chatbot />
        <Footer />
      </body>

    </html>
  );
}
