import React from "react";

export const metadata = {
  title: "Privacy Policy | Loan & Own Mortgages",
  description: "Learn how Loan & Own Mortgages collects, uses, and protects your personal information.",
};

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">Privacy Policy</h1>

      <p className="mb-4 font-medium">Loan and Own Mortgages Pty Ltd</p>
      <p className="mb-8 text-sm italic">Last Updated: May 5, 2025</p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Loan and Own Mortgages Pty Ltd (ABN: [Insert ABN]) (“we”, “us”, “our”) respects your privacy.
          This Privacy Policy outlines how we collect, use, disclose, and protect your personal information
          across our platforms including our website and LinkedIn marketing.
          We comply with the Privacy Act 1988 (Cth), Australian Privacy Principles (APPs), GDPR, and CCPA.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">2. What Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Full name</li>
          <li>Contact details (email, phone)</li>
          <li>Job title, company</li>
          <li>Geolocation and IP address</li>
          <li>Loan or financial information</li>
          <li>Device and browser data</li>
          <li>Interaction data from our website and LinkedIn</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">3. How We Collect Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Directly via website forms or communication</li>
          <li>Through third-party sources such as credit agencies</li>
          <li>Via cookies and tracking tools</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">4. Why We Collect Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>To assess and process mortgage inquiries</li>
          <li>To provide personalized services and offers</li>
          <li>For legal compliance and internal analytics</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">5. Legal Basis for Processing (GDPR)</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Consent (e.g. marketing opt-ins)</li>
          <li>Performance of a contract</li>
          <li>Legitimate business interests</li>
          <li>Compliance with legal obligations</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">6. Disclosure of Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Our employees and accredited mortgage brokers</li>
          <li>Lender partners (with your consent)</li>
          <li>CRM and analytics tools we use</li>
          <li>Government agencies where legally required</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your data. Depending on your location, 
          you may also opt-out of certain data processing. To make a request, contact us at 
          <a href="mailto:privacy@lnomortgages.com.au" className="text-blue-600 underline ml-1">privacy@lnomortgages.com.au</a>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">8. Security Measures</h2>
        <p>
          We implement encryption (SSL), access restrictions, and regular security reviews to 
          safeguard your personal information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">9. Data Retention</h2>
        <p>
          Your data is retained only as long as necessary to fulfill the purposes outlined in this policy
          or to meet legal requirements.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">10. Cookies and Analytics</h2>
        <p>
          We use LinkedIn Insight Tag, Google Analytics, and cookies to understand user behavior and 
          improve our marketing effectiveness. You can manage cookies via your browser settings.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">11. Access & Corrections</h2>
        <p>
          You may request access to the personal information we hold about you. We aim to respond within 25 working days. 
          A processing fee may apply in some cases.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">12. Updates to This Policy</h2>
        <p>
          This Privacy Policy may be updated from time to time. Please check this page periodically for changes.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-2">13. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or your data, please contact:
        </p>
        <p className="mt-2">
          <strong>Loan and Own Mortgages Pty Ltd</strong><br />
          Email: <a href="mailto:privacy@lnomortgages.com.au" className="text-blue-600 underline">privacy@lnomortgages.com.au</a><br />
          Website: <a href="https://www.lnomortgages.com.au" className="text-blue-600 underline">www.lnomortgages.com.au</a>
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
