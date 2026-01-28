
import React, { useState } from 'react';
import { Terminal, Code, Cpu, Globe, Lock, Workflow, Database, ShieldCheck, Zap, Building2, Users } from 'lucide-react';
import LeadFormModal from '../components/LeadFormModal';

const Developers: React.FC = () => {
  const [activeTab, setActiveTab] = useState('proptech');
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const verticalExamples = {
    proptech: {
      title: "PropTech Integration",
      icon: <Building2 />,
      endpoint: "POST /v1/lease-protection",
      description: "Trigger renters insurance or security deposit alternatives directly during the lease execution flow.",
      code: `// PROPEL YOUR LEASING WORKFLOW
const protection = await insurtech.lease.protect({
  lease_id: "ls_9876",
  tenant: {
    name: "Alex Smith",
    credit_score: 720
  },
  property: {
    monthly_rent: 2400.00,
    zip: "90210"
  },
  // Automatically select best tier
  coverage_type: "deposit_replacement" 
});

console.log(protection.is_approved); // true`
    },
    payroll: {
      title: "HR & Payroll Logic",
      icon: <Users />,
      endpoint: "PATCH /v1/workers-comp/sync",
      description: "Dynamic premium adjustments based on real-time payroll data, preventing end-of-year audit surprises.",
      code: `// DYNAMIC WORKERS' COMP
await insurtech.payroll.sync({
  employer_id: "emp_5521",
  pay_period: "2024-Q1",
  gross_wages: 1250000.00,
  class_codes: {
    "8810": 950000.00, // Clerical
    "8742": 300000.00  // Sales
  }
});

// Premiums adjust in real-time
const update = await insurtech.billing.getSummary();`
    },
    erp: {
      title: "ERP & Ledger Triggers",
      icon: <Database />,
      endpoint: "POST /v1/parametric/business-interruption",
      description: "Protect businesses from revenue shocks by triggering payouts based on verified ledger anomalies.",
      code: `// PARAMETRIC REVENUE PROTECTION
const claimTrigger = await insurtech.parametric.monitor({
  ledger_account_id: "acc_biz_99",
  revenue_threshold: 0.75, // 25% drop trigger
  verification_source: "insightsoftware_erp",
  payout_cap: 50000.00
});

// Automatic payout on verified anomaly
insurtech.on('trigger_event', (event) => {
  console.log("Payout Initiated: " + event.id);
});`
    }
  };

  const current = verticalExamples[activeTab as keyof typeof verticalExamples];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <LeadFormModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} initialInterest={activeTab} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black rounded-full uppercase tracking-widest mb-6">
              Developer Ecosystem
            </div>
            <h1 className="text-6xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter italic uppercase">Engineered<br />for Adjacency</h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              Don't just build an integration; build a vertical-defining insurance product with our industry-specific logic engines.
            </p>
            
            <div className="space-y-4 mb-12">
               {Object.keys(verticalExamples).map((key) => (
                  <button 
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full flex items-center gap-4 p-5 rounded-3xl border-2 transition-all text-left ${activeTab === key ? "bg-white border-blue-600 shadow-xl shadow-blue-100" : "bg-transparent border-transparent text-slate-400 hover:text-slate-600"}`}
                  >
                    <div className={`p-3 rounded-xl ${activeTab === key ? "bg-blue-600 text-white" : "bg-slate-200"}`}>
                      {verticalExamples[key as keyof typeof verticalExamples].icon}
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-tight">{verticalExamples[key as keyof typeof verticalExamples].title}</h4>
                      <p className="text-xs font-medium opacity-60">Custom logic available</p>
                    </div>
                  </button>
               ))}
            </div>

            <button 
              onClick={() => setIsLeadModalOpen(true)}
              className="w-full bg-slate-900 text-white py-5 rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
            >
              Get Sandbox Access <Zap size={20} />
            </button>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-slate-950 rounded-[3rem] p-10 lg:p-14 shadow-[0_48px_80px_-16px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute top-8 left-10 flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
              </div>
              
              <div className="mt-12 mb-8 flex justify-between items-center border-b border-white/10 pb-6">
                 <div>
                   <span className="text-blue-400 font-mono text-sm block mb-1">{current.endpoint}</span>
                   <h3 className="text-white text-xl font-bold uppercase italic tracking-tighter">{current.title} API</h3>
                 </div>
                 <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-black rounded-full border border-blue-500/30 uppercase tracking-widest">
                    V3.2 Stable
                 </div>
              </div>

              <pre className="text-blue-300 font-mono text-sm lg:text-base overflow-x-auto leading-loose animate-in fade-in duration-500">
                <code>{current.code}</code>
              </pre>

              <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/5">
                 <p className="text-slate-400 text-sm font-medium italic">
                    <span className="text-blue-400 font-bold uppercase mr-2 tracking-widest text-xs">Best Practice:</span>
                    {current.description}
                 </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 group cursor-pointer" onClick={() => setIsLeadModalOpen(true)}>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe size={24} />
                </div>
                <h4 className="text-2xl font-black mb-3 uppercase italic tracking-tight">Global SDKs</h4>
                <p className="text-slate-500 font-medium mb-6">Native libraries for Node, Python, and Ruby with vertical modules.</p>
                <div className="flex items-center gap-2 text-blue-600 font-bold">Download <Code size={16}/></div>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 group cursor-pointer" onClick={() => setIsLeadModalOpen(true)}>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lock size={24} />
                </div>
                <h4 className="text-2xl font-black mb-3 uppercase italic tracking-tight">Security First</h4>
                <p className="text-slate-500 font-medium mb-6">Bank-grade encryption and regional compliance silos built-in.</p>
                <div className="flex items-center gap-2 text-blue-600 font-bold">Review Specs <ShieldCheck size={16}/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
