
import React from 'react';
import { Lock, Server, ShieldAlert, Key } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">Security & Infrastructure</h1>
          <p className="text-xl text-slate-500 font-medium">Bank-grade protection for the next generation of risk management.</p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed font-medium">
          <p className="mb-12">Security is not a feature at Embedded Insurtech; it is the foundation. Our infrastructure is designed to handle sensitive financial and personal data with zero-compromise protocols.</p>

          <div className="space-y-8 mb-16">
            <div className="flex gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 items-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm"><Lock className="text-blue-600" /></div>
              <div>
                <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-2">SOC2 Type II Compliant</h3>
                <p className="text-sm">Our internal controls and data handling procedures are audited annually to maintain SOC2 Type II compliance, ensuring operational security at scale.</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 items-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm"><Server className="text-blue-600" /></div>
              <div>
                <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-2">Encryption at Rest & Transit</h3>
                <p className="text-sm">All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Our API keys are rotated regularly and managed via hardware security modules (HSM).</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 items-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm"><ShieldAlert className="text-blue-600" /></div>
              <div>
                <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-2">Zero-Trust Architecture</h3>
                <p className="text-sm">We employ a zero-trust network model. Access to production environments is strictly limited, audited, and requires multi-factor authentication (MFA) from verified hardware.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">Vulnerability Disclosure</h2>
          <p className="mb-8">We maintain a proactive bug bounty program and engage in regular third-party penetration testing. If you believe you have found a security vulnerability in our infrastructure, please report it immediately to our security team via <strong>security@embeddedinsurtech.com</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default Security;
