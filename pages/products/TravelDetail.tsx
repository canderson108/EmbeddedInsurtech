
import React, { useState } from 'react';
import { Plane, ShieldCheck, Zap, ArrowRight, MapPin, Globe, Compass } from 'lucide-react';
import LeadFormModal from '../../components/LeadFormModal';

const TravelDetail: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="pt-24 bg-white selection:bg-blue-100 selection:text-blue-900">
      <LeadFormModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} initialInterest="travel" />
      
      <section className="py-24 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full mb-8">
             <Globe size={14} className="text-blue-400" />
             <span className="text-xs font-bold uppercase tracking-widest">Global Mobility</span>
          </div>
          <h1 className="text-7xl lg:text-[10rem] font-black mb-10 tracking-tighter leading-none italic uppercase">Instant<br />Payouts.</h1>
          <p className="text-2xl text-slate-200 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
            The new era of travel protection: parametric triggers and "Cancel for Any Reason" flexibility for the modern traveler.
          </p>
          <button 
            onClick={() => setIsLeadModalOpen(true)}
            className="bg-blue-600 text-white px-12 py-6 rounded-full font-bold text-2xl hover:bg-blue-700 transition-all shadow-2xl"
          >
            Partner With Us
          </button>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter italic uppercase">Zero-Friction Travel</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
              The travel industry is plagued by "static" insurance—long policies with hundreds of exclusions that only payout after weeks of paperwork. **Embedded Insurtech** is disrupting this with parametric triggers. Imagine a traveler whose flight is delayed by 2 hours; our system detects the delay via real-time flight data and instantly pushes a $50 lounge credit or hotel voucher to their digital wallet. No claim form. No waiting.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
              This "Moment of Truth" (Category 5 influence) creates irrational loyalty. When a platform takes care of a crisis before the user even asks, they become a customer for life. By embedding these triggers into OTAs (Online Travel Agencies) and booking engines, we turn travel insurance from a grudging purchase into a high-value utility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
               <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform"></div>
                  <Compass className="text-blue-600 mb-6 relative z-10" size={40} />
                  <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase italic tracking-tight relative z-10">CFAR Payouts</h4>
                  <p className="text-slate-500 font-medium relative z-10">"Cancel For Any Reason" logic allows for instant partial refunds, boosting booking confidence.</p>
               </div>
               <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform"></div>
                  <Zap className="text-orange-600 mb-6 relative z-10" size={40} />
                  <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase italic tracking-tight relative z-10">Parametric Delay</h4>
                  <p className="text-slate-500 font-medium relative z-10">Automatic compensation for flight or rail delays triggered by external data feeds.</p>
               </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              We provide the global regulatory licenses to distribute travel protection in 100+ jurisdictions. Whether you are a boutique booking platform or a global airline, Embedded Insurtech handles the multi-currency, multi-region complexity. Your users stay protected, and your platform captures a new stream of high-margin revenue at the Tier 1 trigger moment: the booking confirmation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelDetail;
