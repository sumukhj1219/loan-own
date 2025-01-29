import { Roboto, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // You can add weights depending on the font's style
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Include light, regular, or bold weights
});

export const metadata = {
  title: "Loan & Own | Mortgages",
  description: "Loan & Own Mortgages",
  openGraph: {
    title: "Loan & Own | Mortgages",
    description: "Loan & Own Mortgages",
    // images: [
    //   {
    //     url: "/logo-loan.jpg",  
    //     width: 1260,
    //     height: 800,
    //     alt: "Loan & Own Brand Image",
    //   },
    // ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${ibmPlexSans.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
