
import React from 'react';
import { Gavel } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest mb-6">
            Operational Standards v3.2
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">Terms of Service</h1>
          <p className="text-xl text-slate-500 font-medium">The legal framework for our platform and infrastructure partnerships.</p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none font-medium text-slate-600 leading-relaxed">
          <p className="mb-8">By accessing the Embedded Insurtech infrastructure, APIs, or software services, you agree to be bound by these Terms of Service. If you are entering into these terms on behalf of a company, you represent that you have the authority to bind such entity.</p>

          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">1. License and Access</h2>
          <p className="mb-8">We grant you a limited, non-exclusive, non-transferable license to integrate our APIs into your digital platform for the purpose of offering insurance products to your users. Any unauthorized scraping, reverse-engineering, or interference with our infrastructure is strictly prohibited.</p>

          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">2. API Usage & Limits</h2>
          <p className="mb-8">Developer accounts are subject to rate limits as defined in our technical documentation. We reserve the right to suspend access if usage patterns suggest a threat to the stability or security of our global infrastructure.</p>

          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">3. Insurance Regulatory Compliance</h2>
          <p className="mb-8">Embedded Insurtech is a technology provider and, in specific jurisdictions, a licensed Managing General Agent (MGA). All insurance products offered through our platform are underwritten by our carrier partners. Partners must not misrepresent the nature of the coverage or provide unlicensed insurance advice.</p>

          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">4. Intellectual Property</h2>
          <p className="mb-8">The Embedded Insurtech name, logo, and all proprietary logic engines (including our adjacency mapping technology) are the intellectual property of Embedded Insurtech. Partners retain ownership of their platform data, while granting us the necessary rights to process that data for underwriting purposes.</p>

          <div className="p-10 bg-slate-900 rounded-[3rem] text-white">
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4 flex items-center gap-3">
              <Gavel size={24} className="text-blue-500" /> Legal Jurisdiction
            </h3>
            <p className="text-slate-400 text-sm">These terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes arising hereunder shall be resolved exclusively in the federal or state courts located in San Francisco, California.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
