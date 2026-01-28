
import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest mb-6">
            Last Updated: March 2024
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">Privacy Policy</h1>
          <p className="text-xl text-slate-500 font-medium">Your trust is our most valuable asset. Here's how we protect your data.</p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">1. Introduction</h2>
            <p>At Embedded Insurtech, we are committed to protecting the privacy and security of the personal data we process. This Privacy Policy explains how we collect, use, and share information when you use our infrastructure, APIs, and digital platform services.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">2. Information We Collect</h2>
            <p>In order to provide embedded insurance services, we collect data points necessary for underwriting and policy administration. This includes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, and physical address.</li>
              <li><strong>Transactional Data:</strong> Information regarding the underlying purchase or platform activity that triggers the insurance moment.</li>
              <li><strong>Underwriting Telemetry:</strong> Industry-specific data points (e.g., property details for PropTech, payroll figures for HRTech).</li>
              <li><strong>Technical Data:</strong> IP addresses, device identifiers, and API request logs.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">3. How We Use Data</h2>
            <p>We use your information to facilitate real-time underwriting, bind insurance policies, process claims, and comply with regulatory requirements. We do not sell your personal data to third parties for marketing purposes. Our use of data is strictly governed by the "Moment of Truth" principle—only processing what is necessary to protect the user at the trigger event.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">4. Global Compliance (GDPR/CCPA)</h2>
            <p>We operate globally and adhere to the highest standards of data protection, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). Users have the right to access, rectify, or delete their personal data held by our systems.</p>
          </section>

          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="flex gap-4 items-start">
              <Shield className="text-blue-600 shrink-0" size={32} />
              <div>
                <h3 className="font-black text-slate-900 uppercase italic tracking-tight mb-2">Data Protection Officer</h3>
                <p className="text-sm text-slate-500 font-medium">For inquiries regarding your data or to exercise your rights, please contact our DPO at <strong>privacy@embeddedinsurtech.com</strong>.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
