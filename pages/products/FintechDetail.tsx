
import React, { useState } from 'react';
import { CreditCard, ShieldCheck, Zap, ArrowRight, Wallet, BarChart3, Lock } from 'lucide-react';
import LeadFormModal from '../../components/LeadFormModal';

const FintechDetail: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="pt-24 bg-white selection:bg-blue-100 selection:text-blue-900">
      <LeadFormModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} initialInterest="fintech" />
      
      <section className="py-24 bg-blue-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 mb-8">
              <Zap size={16} className="text-blue-400" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Financial Loyalty</span>
            </div>
            <h1 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter leading-none italic uppercase">Beyond<br />Banking.</h1>
            <p className="text-2xl text-slate-400 mb-12 leading-relaxed font-medium">
              How neobanks and lenders are using embedded insurance to drive interchange and capture the primary account.
            </p>
            <button 
              onClick={() => setIsLeadModalOpen(true)}
              className="bg-blue-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl flex items-center gap-4"
            >
              Request Demo <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(37,99,235,0.15),_transparent_70%)]"></div>
      </section>

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter italic uppercase">Interchange & Influence</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
              The modern fintech landscape is a battle for the "primary account." To win, neobanks must move beyond free transfers and pretty cards. **Embedded Insurtech** enables financial institutions to embed value-added protection directly into card tiers and transaction logic.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
              Imagine a card that automatically offers purchase protection on every high-value swipe, or a business account that bundles E&O insurance for freelancers as part of their monthly subscription. This isn't just about protection; it's about shifting the unit economics of a bank account. By offering these "Category 2" trusted advisor services, banks can justify subscription fees and increase interchange by incentivizing high-value spend on protected cards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
               <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100">
                  <Wallet className="text-blue-600 mb-6" size={40} />
                  <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">Deposit Protection</h4>
                  <p className="text-slate-500 font-medium">Supplementary protection for deposits that exceed standard regulatory limits.</p>
               </div>
               <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100">
                  <Lock className="text-blue-600 mb-6" size={40} />
                  <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">Fraud Insurance</h4>
                  <p className="text-slate-500 font-medium">Instant coverage for card-not-present fraud, reducing operational friction.</p>
               </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Our infrastructure integrates with your ledger and card issuing platform (like Marqeta or Stripe) to trigger coverage in real-time. Whether it's gadget insurance triggered by a purchase at an Apple Store or travel protection activated when a flight is booked, we handle the claims and compliance on the backend. This creates a "Risk Revelation Moment" (Tier 4) where the user sees the value of their bank account exactly when they are most aware of their spending risk.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FintechDetail;
