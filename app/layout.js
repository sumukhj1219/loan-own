import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"], // Bebas Neue only supports a single weight
});

export const metadata = {
  title: "Loan & Own | Mortgages",
  description: "Loan & Own Mortgages",
  openGraph: {
    title: "Loan & Own | Mortgages",
    description: "Loan & Own Mortgages",
    images: [
      {
        url: "/logo-loan.jpg",
        width: 1260,
        height: 800,
        alt: "Loan & Own Brand Image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} antialiased`}>
        <Navbar />
        <div className="pt-20">{children}</div>
        <Footer />

      </body>
    </html>
  );
}
