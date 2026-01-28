
import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Settings, 
  ShieldAlert, 
  Cpu, 
  Link as LinkIcon, 
  Banknote, 
  Heart,
  ArrowRight,
  Sparkles,
  Flame,
  Zap,
  Target,
  Workflow,
  Eye,
  Activity,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import LeadFormModal from '../components/LeadFormModal';

const categories = [
  {
    title: "1. The Triggers",
    subtitle: "Businesses that create the 'Insurance Moment'",
    icon: <Building2 className="text-blue-600" />,
    description: "These businesses don't sell insurance—but they create the sudden urgency when a life event or transaction occurs.",
    examples: ["Real Estate Agents", "Mortgage Brokers", "Auto Dealerships", "Business Formation Services", "Event Venues"],
    strategy: "Embed at the transaction point when the user is already spending money and thinking about protection."
  },
  {
    title: "2. The Influencers",
    subtitle: "Professional advisors who carry the trust",
    icon: <Users className="text-purple-600" />,
    description: "These entities carry more trust than insurers. When they advise coverage, clients listen and act.",
    examples: ["CPAs & Tax Advisors", "Law Firms", "Wealth Managers", "Benefits Consultants", "Risk Managers"],
    strategy: "Provide tools for advisors to instantly generate quotes for their clients without leaving their advisory workflow."
  },
  {
    title: "3. Operational Workflows",
    subtitle: "Embedded in the day-to-day risk exposure",
    icon: <Settings className="text-green-600" />,
    description: "These tools surface risk before insurance is even discussed, often sitting inside accounting or payroll software.",
    examples: ["Payroll Providers", "HR Platforms", "Accounting Software", "Compliance Services", "Cybersecurity Vendors"],
    strategy: "Analyze operational data to identify gaps (e.g., missing Workers' Comp) and prompt coverage automatically."
  },
  {
    title: "4. Loss & Recovery Players",
    subtitle: "Interaction after the event occurs",
    icon: <ShieldAlert className="text-red-600" />,
    description: "The 'moment of truth' players. Customers are emotionally vulnerable and focused on recovery.",
    examples: ["Restoration Companies", "Auto Body Shops", "Medical Billing", "Public Adjusters", "Claims Admins"],
    strategy: "Streamline the payout and repair cycle through integrated claims and payment APIs."
  }
];

const influenceTiers = [
  {
    tier: 1,
    title: "Decision-Defining Moments",
    tagline: "Highest Value - No Status Quo",
    icon: <Flame className="text-orange-500" />,
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    accentColor: "text-orange-600",
    why: "Buyer has no status quo. Urgency is high. Defaults matter enormously.",
    examples: ["Property purchase / lease signing", "Business formation", "Asset acquisition", "Contract signing requiring COI"],
    controllers: ["Real estate agents & lenders", "Lawyers & CPAs", "Payroll/HR onboarding platforms", "Equipment lessors"]
  },
  {
    tier: 2,
    title: "Trusted Advisor Channels",
    tagline: "Very High Value - Override Price Sensitivity",
    icon: <Target className="text-red-500" />,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    accentColor: "text-red-600",
    why: "Short-circuits comparison shopping. Reduces skepticism. Frames coverage as 'responsible.'",
    examples: ["CPAs recommending coverage changes", "Lawyers flagging liability exposure", "Wealth managers structuring protection"],
    controllers: ["CPAs", "Corporate Lawyers", "Estate Planners", "Benefits Consultants"]
  },
  {
    tier: 3,
    title: "Workflow Lock-In Points",
    tagline: "Win by Inertia",
    icon: <Workflow className="text-blue-500" />,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    accentColor: "text-blue-600",
    why: "Decisions become defaults. Switching costs are real. Insurance feels 'built-in.'",
    examples: ["Payroll → workers' comp", "HRIS → benefits & EPLI", "Property management → landlord insurance"],
    controllers: ["Vertical SaaS Providers", "ERP Systems", "Payroll Software"]
  }
];

const Ecosystem: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="pt-20 bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <LeadFormModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.3em]">Market Strategy</span>
          </div>
          <h1 className="text-6xl lg:text-[9rem] font-black mb-10 tracking-tighter leading-[0.85] italic uppercase">The Adjacent<br />Ecosystem</h1>
          <p className="text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Insurance doesn't happen in a vacuum. We map the landscape to identify where protection is most valuable.
          </p>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.1),_transparent_70%)]"></div>
      </section>

      {/* 8 Categories Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col items-center mb-24 text-center">
            <h2 className="text-5xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">Strategic Adjacency</h2>
            <p className="text-slate-500 text-2xl font-medium max-w-2xl">From triggers to financing, insurance-adjacent businesses define the modern distribution landscape.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <div key={i} onClick={() => setIsLeadModalOpen(true)} className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-black mb-2 text-slate-900 leading-tight italic uppercase tracking-tighter">{cat.title}</h3>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">{cat.subtitle}</p>
                <p className="text-slate-500 leading-relaxed mb-8 font-medium">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">Target Vertical <ArrowRight size={14} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Influence Map */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black rounded-full uppercase tracking-widest mb-6">
                 High Leverage Analysis
              </div>
              <h2 className="text-6xl lg:text-8xl font-black text-slate-900 uppercase italic leading-[0.85] tracking-tighter mb-8">Influence<br />Heat Map</h2>
              <p className="text-2xl text-slate-500 font-medium">
                Ranked by conversion impact, pricing power, and long-term value.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {influenceTiers.map((tier) => (
              <div 
                key={tier.tier}
                onClick={() => setIsLeadModalOpen(true)}
                className={`cursor-pointer relative overflow-hidden rounded-[3rem] border-2 ${tier.borderColor} ${tier.bgColor} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group`}
              >
                <div className="flex flex-col lg:flex-row p-10 lg:p-16 gap-12">
                   <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-6">
                         <div className={`w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center font-black text-2xl ${tier.accentColor}`}>
                            {tier.tier}
                         </div>
                         {tier.icon}
                      </div>
                      <h3 className="text-4xl font-black text-slate-900 mb-2 uppercase leading-none italic tracking-tighter">{tier.title}</h3>
                      <p className={`text-sm font-black uppercase tracking-widest ${tier.accentColor}`}>{tier.tagline}</p>
                   </div>
                   <div className="lg:w-2/3">
                      <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">{tier.why}</p>
                      <div className="flex items-center gap-3 text-slate-900 font-black uppercase tracking-widest text-xs">
                         Build for this tier <ArrowRight size={16} className="text-blue-600" />
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 bg-blue-600 rounded-[5rem] p-20 lg:p-40 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="relative z-10 max-w-4xl">
                <h2 className="text-7xl lg:text-9xl font-black mb-16 leading-[0.8] tracking-tighter italic uppercase">Dominant<br />Touchpoints.</h2>
                <div className="flex flex-wrap gap-8">
                   <button 
                    onClick={() => setIsLeadModalOpen(true)}
                    className="bg-white text-blue-600 px-16 py-8 rounded-full font-bold text-2xl hover:bg-blue-50 transition-all flex items-center gap-3 active:scale-95 shadow-2xl"
                  >
                      Partner With Us <ArrowRight size={28} />
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;
