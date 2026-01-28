
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Globe2, Layers, BarChart4, ShieldCheck, Zap } from 'lucide-react';
import LeadFormModal from '../components/LeadFormModal';

const SolutionsPage: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="pt-20 bg-white selection:bg-blue-100 selection:text-blue-900">
      <LeadFormModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
      
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full mb-8">
                 <ShieldCheck size={14} className="text-blue-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Strategic Solutions</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black mb-10 tracking-tighter leading-none italic uppercase">Solving for<br /><span className="text-blue-600">Scale.</span></h1>
              <p className="text-2xl text-slate-400 mb-12 leading-relaxed font-medium">
                Infrastructure that adapts to your growth. From MVP to global enterprise, we provide the building blocks to dominate your vertical.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                 <button 
                  onClick={() => setIsLeadModalOpen(true)}
                  className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
                 >
                   Talk to a Solutions Architect <ArrowRight size={20} />
                 </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-800 rounded-[4rem] overflow-hidden shadow-2xl relative">
                 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60" alt="Data" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                 <div className="absolute bottom-12 left-12 right-12">
                    <div className="space-y-6">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center"><Zap /></div>
                          <div>
                             <p className="text-2xl font-black italic tracking-tighter">99.99%</p>
                             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Core API Uptime</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center"><Globe2 /></div>
                          <div>
                             <p className="text-2xl font-black italic tracking-tighter">140+</p>
                             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Countries Licensed</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-7xl font-black mb-6 uppercase italic tracking-tighter">Vertical Deep Dives</h2>
            <p className="text-slate-500 text-2xl font-medium max-w-3xl mx-auto">
              We solve the hard problems—licensing, underwriting, and claims—so you can focus on building world-class products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                title: "Institutional Real Estate",
                icon: <Layers className="text-blue-600" />,
                desc: "Manage massive portfolios with automated tenant compliance. We provide the master policies that fill the gaps in individual renter coverage, ensuring asset owners are always protected.",
                tags: ["Compliance", "Portfolio Logic", "Claims Flow"]
              },
              {
                title: "The Transaction Layer",
                icon: <BarChart4 className="text-blue-600" />,
                desc: "Embed protection at the atomic level of the transaction. Whether it's shipping, returns, or fraud, our API triggers coverage based on real-time spending telemetry.",
                tags: ["Marqeta Sync", "Stripe Auth", "Real-time Underwriting"]
              }
            ].map((sol, i) => (
              <div key={i} className="group p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer" onClick={() => setIsLeadModalOpen(true)}>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {sol.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase italic tracking-tighter">{sol.title}</h3>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">{sol.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {sol.tags.map((tag, j) => (
                    <span key={j} className="px-4 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-slate-50">
         <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-6xl font-black mb-10 uppercase italic tracking-tighter">Your program,<br />our infrastructure.</h2>
            <p className="text-2xl text-slate-500 mb-16 font-medium">
               Join 500+ platforms that have transformed their economics with Embedded Insurtech.
            </p>
            <button 
              onClick={() => setIsLeadModalOpen(true)}
              className="bg-slate-900 text-white px-16 py-8 rounded-full font-bold text-2xl hover:bg-blue-600 transition-all shadow-2xl"
            >
               Request Custom Strategy Deck
            </button>
         </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
