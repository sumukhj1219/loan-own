import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import Chatbot from "@/components/chatbot";
import Script from "next/script";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Loan & Own Mortgages | Easy Home Loans & Financing",
  description:
    "Get the best mortgage rates and home loan options with Loan & Own Mortgages. Easy financing solutions tailored for you.",
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
        <Script
          id="linkedin-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "7217332";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `,
          }}
        />
        <Script
          id="linkedin-script"
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${bebasNeue.variable} antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=7217332&fmt=gif"
          />
        </noscript>
        <Navbar />
        <div className="pt-20">{children}</div>
        {/* <Chatbot /> */}
        <Footer />
      </body>
    </html>
  );
}
