
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Globe, Zap, Database, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StrategyDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'vision',
      title: "The Vision of Embedded Protection",
      subtitle: "Executive Summary",
      content: (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Redefining risk for the <span className="text-blue-600 font-serif italic">digital first</span> economy.</h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
              Embedded Insurtech is the premier infrastructure layer for digital platforms. We don't just provide APIs; we provide a bridge between sophisticated software and institutional-grade risk management.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span>Strategic Alignment over Lead Generation</span>
              </div>
              <div className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span>Institutional Regulatory Mastery</span>
              </div>
              <div className="flex items-center gap-4 text-slate-900 font-bold">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span>Built by Insurance Veterans</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex items-center justify-center">
             <Shield className="text-blue-600 w-48 h-48 opacity-20" />
          </div>
        </div>
      )
    },
    {
      id: 'market',
      title: "The Platform Opportunity",
      subtitle: "Market Context",
      content: (
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Vertical SaaS is the new distribution.</h2>
            <p className="text-lg text-slate-500">The shift from centralized insurance agents to native platform distribution represents a $170B opportunity by 2030.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
              <p className="text-5xl font-bold text-blue-600 mb-3">$170B</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Addressable Market</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
              <p className="text-5xl font-bold text-blue-600 mb-3">82%</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Customer Trust in Platforms</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
              <p className="text-5xl font-bold text-blue-600 mb-3">3.5x</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">AOV Increase Potential</p>
            </div>
          </div>
          <p className="text-center text-slate-400 italic">"The insurance moment occurs inside the software where the risk is created."</p>
        </div>
      )
    },
    {
      id: 'infrastructure',
      title: "Modern Infrastructure",
      subtitle: "Technical Architecture",
      content: (
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="col-span-1 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Unified API Layer</h2>
            <p className="text-slate-500 font-medium">A single integration point for multi-carrier, multi-jurisdiction distribution.</p>
            <div className="space-y-4">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">Dynamic Underwriting</h4>
                <p className="text-sm text-blue-800/70">Real-time quote engines powered by platform telemetry.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Parametric Triggers</h4>
                <p className="text-sm text-slate-500">Instant payouts based on external data verification.</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-slate-950 rounded-[3rem] p-12 relative overflow-hidden flex items-center justify-center">
             <div className="grid grid-cols-2 gap-8 relative z-10 w-full">
                <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center">
                  <Database className="text-blue-500 mx-auto mb-4" />
                  <p className="text-white font-bold uppercase tracking-widest text-xs">Carrier Logic</p>
                </div>
                <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center">
                  <Globe className="text-blue-500 mx-auto mb-4" />
                  <p className="text-white font-bold uppercase tracking-widest text-xs">Global Licenses</p>
                </div>
                <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center">
                  <Zap className="text-blue-500 mx-auto mb-4" />
                  <p className="text-white font-bold uppercase tracking-widest text-xs">Instant Binding</p>
                </div>
                <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center">
                  <Shield className="text-blue-500 mx-auto mb-4" />
                  <p className="text-white font-bold uppercase tracking-widest text-xs">Zero-Drift Compliance</p>
                </div>
             </div>
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.1),_transparent_70%)]"></div>
          </div>
        </div>
      )
    },
    {
      id: 'verticals',
      title: "Strategic Deep Dives",
      subtitle: "Vertical Specialization",
      content: (
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Institutional Real Estate</h3>
            <p className="text-slate-500 mb-8 font-medium">Automating tenant compliance and master policies for massive portfolios.</p>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm font-bold text-slate-700 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span>Automatic Renters Verification</span>
              </div>
              <div className="flex gap-3 text-sm font-bold text-slate-700 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span>Owner Interest Gap Protection</span>
              </div>
            </div>
          </div>
          <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Fintech & Banking</h3>
            <p className="text-slate-500 mb-8 font-medium">Embedding protection into the card-swipe and payroll moments.</p>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm font-bold text-slate-700 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span>Transaction Purchase Protection</span>
              </div>
              <div className="flex gap-3 text-sm font-bold text-slate-700 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span>Real-time Workers' Comp Adjustments</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'roadmap',
      title: "Implementation Path",
      subtitle: "4-Week Strategy",
      content: (
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {[
              { week: "01", title: "Alignment", desc: "Identify key insurance moments & triggers." },
              { week: "02", title: "Sandbox", desc: "API integration and technical mapping." },
              { week: "03", title: "Compliance", desc: "Regulatory review and licensing sync." },
              { week: "04", title: "Go-Live", desc: "Native product launch to ecosystem." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg text-center">
                <p className="text-4xl font-bold text-blue-600 mb-4 font-serif italic">{step.week}</p>
                <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">{step.title}</h4>
                <p className="text-sm text-slate-500 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: "Let's Build the Future.",
      subtitle: "Next Steps",
      content: (
        <div className="text-center py-12">
          <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-10 tracking-tight leading-none">Ready for an <span className="text-blue-600 font-serif italic">Expert</span> partnership?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-blue-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
              Request Full Strategy Brief <ArrowRight size={24} />
            </button>
            <Link to="/" className="bg-white text-slate-900 border border-slate-200 px-12 py-6 rounded-full font-bold text-xl hover:bg-slate-50 transition-all flex items-center justify-center">
              Back to Main Site
            </Link>
          </div>
          <p className="mt-16 text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">Standardized by Embedded Insurtech Institutional Desk</p>
        </div>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Slide Header */}
        <div className="mb-12 flex justify-between items-end border-b border-slate-100 pb-8">
          <div>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-3">{slides[currentSlide].subtitle}</p>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{slides[currentSlide].title}</h1>
          </div>
          <div className="text-slate-400 font-bold text-sm">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col justify-center animate-in fade-in slide-in-from-right-12 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {slides[currentSlide].content}
        </div>

        {/* Navigation */}
        <div className="mt-16 flex justify-between items-center">
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === idx ? "w-12 bg-blue-600" : "w-4 bg-slate-100"}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyDeck;
