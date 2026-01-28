
import React, { useState } from 'react';
import { Smartphone, ShieldCheck, Zap, ArrowRight, Code, Database, Activity } from 'lucide-react';
import LeadFormModal from '../../components/LeadFormModal';

const SaaSDetail: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="pt-24 bg-white selection:bg-blue-100 selection:text-blue-900">
      <LeadFormModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} initialInterest="saas" />
      
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full mb-8">
                <Code size={14} className="text-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Vertical SaaS Logic</span>
              </div>
              <h1 className="text-6xl lg:text-9xl font-black mb-10 tracking-tighter leading-none italic uppercase">Inertia &<br /><span className="text-blue-600">Integrations.</span></h1>
              <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                The rise of native insurance for ERP, HRIS, and Property Management platforms.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center">
               <button 
                onClick={() => setIsLeadModalOpen(true)}
                className="w-48 h-48 rounded-full bg-blue-600 flex flex-col items-center justify-center text-center p-6 hover:scale-110 hover:bg-blue-700 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.4)]"
               >
                 <span className="text-xs font-black uppercase tracking-widest mb-2">Build With</span>
                 <span className="text-3xl font-black uppercase italic tracking-tighter">OUR API</span>
               </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter italic uppercase">Workflow Lock-In</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
              Software is eating the world, but risk is eating software. For Vertical SaaS platforms, insurance is the ultimate "Category 3" workflow lock-in point. When insurance is embedded into an operational tool—like payroll, accounting, or property management—it stops being a product and starts being a default.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
              **Embedded Insurtech** provides the logic engine for SaaS vendors to offer Cyber Liability, E&O, and parametric Business Interruption. By analyzing the telemetry within your software, we can identify risk before the user even thinks about it. For example, an ERP system can detect a sudden drop in transaction volume (a "Category 4" Risk Revelation moment) and trigger a parametric payout if the disruption is caused by a verified infrastructure failure.
            </p>

            <div className="my-20 space-y-8">
               <div className="p-8 border-l-4 border-blue-600 bg-slate-50 rounded-r-[2rem]">
                  <h4 className="text-xl font-black text-slate-900 mb-2 uppercase italic">Cyber Liability</h4>
                  <p className="text-slate-500 font-medium">Native protection for data breaches, integrated with your security dashboard.</p>
               </div>
               <div className="p-8 border-l-4 border-blue-600 bg-slate-50 rounded-r-[2rem]">
                  <h4 className="text-xl font-black text-slate-900 mb-2 uppercase italic">Errors & Omissions</h4>
                  <p className="text-slate-500 font-medium">Protection for professional service platforms where advice is the product.</p>
               </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              This isn't about selling leads to brokers. This is about providing a full-stack insurance experience where the policy is bound via API and claims are managed through your support portal. When insurance feels "built-in," the switching cost of your software skyrockets. Your platform becomes the central nervous system for both operations and risk.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSDetail;
