
import React from 'react';
import { Globe, ShieldCheck, Landmark } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">Regulatory Compliance</h1>
          <p className="text-xl text-slate-500 font-medium">Licensed infrastructure for global insurance distribution.</p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p className="mb-12 text-xl font-medium leading-relaxed">Embedded Insurtech operates as a technology layer that connects digital platforms with world-class insurance carriers. To facilitate this safely, we maintain a rigorous compliance framework that spans multiple jurisdictions and regulatory bodies.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
              <Landmark className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-2">Licensed MGA</h3>
              <p className="text-sm">We are a licensed Managing General Agent (MGA) in over 45 US states and maintain equivalent licensing in the UK and EU through our local subsidiaries.</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
              <Globe className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-2">Global Coverage</h3>
              <p className="text-sm">Through our "Pass-through Licensing" model, we enable platforms to distribute insurance globally while we handle the local filings and reporting.</p>
            </div>
          </div>

          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">Fiduciary Standards</h2>
          <p className="mb-8">We treat every dollar of premium with the highest level of care. Our automated reconciliation engine ensures that premium payments are correctly routed from the platform to the carrier, maintaining clean fiduciary accounts and audit trails that exceed industry standards.</p>

          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">Consumer Protection</h2>
          <p className="mb-8">All embedded insurance products must be clear, transparent, and provide genuine value to the end user. We work closely with carriers to ensure that policy wordings are modern, readable, and compliant with local consumer protection laws.</p>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
