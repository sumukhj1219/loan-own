import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Loan & Own | Mortgages",
  description: "Loan & Own Mortgages",
  openGraph: {
    title: "Loan & Own | Mortgages",
    description: "Loan & Own Mortgages",
    images: [
      {
        url: "/logo-loan.jpg",  // Path to your brand image
        width: 1260,
        height: 800,
        alt: "Loan & Own Brand Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",  
    title: "Loan & Own | Mortgages",
    description: "Loan & Own Mortgages",
    image: "/logo-loan.jpg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
