
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Award, Users, X, Globe2, Briefcase, ChevronRight } from 'lucide-react';
import LeadFormModal from '../components/LeadFormModal';

interface PartnerInfo {
  name: string;
  path: string;
  description: string;
  contact: string;
  image: string;
  category: string;
  stats: { label: string; value: string }[];
}

const Home: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<PartnerInfo | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPartner(null);
        setIsLeadModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const partners: PartnerInfo[] = [
    { 
      name: 'insightsoftware', 
      path: '/partners/insightsoftware',
      category: 'Enterprise ERP',
      description: 'The world leader in financial reporting and enterprise performance management. Our integration embeds insurance directly into ERP workflows for automated risk mitigation.',
      contact: 'enterprise-risk@insightsoftware.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      stats: [{ label: 'Data Points', value: '1.2B+' }, { label: 'Risk Accuracy', value: '99.4%' }]
    },
    { 
      name: 'RealPage', 
      path: '/partners/realpage',
      category: 'Institutional Real Estate',
      description: 'Powering the real estate industry with modern liability protection. We automate tenant compliance across millions of units globally.',
      contact: 'compliance-desk@realpage.com',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      stats: [{ label: 'Units Protected', value: '4.5M+' }, { label: 'Claims Speed', value: '3x' }]
    },
    { 
      name: 'AppFolio', 
      path: '/partners/appfolio',
      category: 'Property Management',
      description: 'Institutional-grade protection for massive portfolios. We provide the infrastructure for AppFolio to manage risk at an unprecedented scale.',
      contact: 'solutions@appfolio.com',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
      stats: [{ label: 'Assets Managed', value: '$500B+' }, { label: 'Compliance', value: '100%' }]
    },
    { 
      name: 'DoorLoop', 
      path: '/partners/doorloop',
      category: 'Proptech API',
      description: 'The property management software developers love. Our API-first partnership allows for seamless lease-protection embedding.',
      contact: 'dev-support@doorloop.com',
      image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1200',
      stats: [{ label: 'API Uptime', value: '99.99%' }, { label: 'Dev Satisfaction', value: '4.9/5' }]
    }
  ];

  return (
    <div className="overflow-hidden bg-white selection:bg-blue-100 selection:text-blue-900">
      <LeadFormModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 lg:pt-56 lg:pb-72 border-b border-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 mb-10">
              <Award size={14} />
              <span className="text-xs font-semibold uppercase tracking-wider">The Standard for Embedded Infrastructure</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 mb-8 leading-[1.05] tracking-tight">
              Professional partnerships for the <span className="text-blue-600 font-serif italic">platform economy.</span>
            </h1>
            <p className="max-w-2xl text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed font-medium">
              Deploy institutional-grade insurance products in weeks. We provide the expert infrastructure required by the world's most sophisticated digital platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 group"
              >
                Inquire for Partnership <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                to="/solutions"
                className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_70%_20%,_rgba(30,64,175,0.05),_transparent_70%)] -z-10"></div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">Decades of Insurance <br/><span className="text-blue-500 font-serif italic">Expertise.</span></h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
                While most insurtechs are software companies experimenting with risk, we are an insurance institution powered by elite technology. Our leadership team brings over 40 years of combined experience at the world's leading carriers.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Shield className="text-blue-500" />, title: "Institutional Reliability", desc: "Stable, compliant frameworks designed for the long term." },
                  { icon: <Globe2 className="text-blue-500" />, title: "Global Regulatory Mastery", desc: "Seamless distribution across 140+ jurisdictions." },
                  { icon: <Briefcase className="text-blue-500" />, title: "Strategic Advisory", desc: "Expert underwriting logic tailored to your specific vertical." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000" alt="Professional Boardroom" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-blue-600 rounded-3xl shadow-xl">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-100 mb-2">Our Core Value</p>
                <p className="text-2xl font-bold italic">Long-term, frictionless value added for every partner.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">Strategic Case Studies</h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl">
              Integrations designed for scale and absolute trust. Discover the infrastructure behind the world's most sophisticated platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {partners.map((partner) => (
              <div 
                key={partner.name}
                onClick={() => setSelectedPartner(partner)}
                className="group relative h-[600px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl transition-all duration-700 hover:-translate-y-2"
              >
                <div className="absolute inset-0">
                  <img src={partner.image} alt={partner.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                </div>

                <div className="absolute inset-0 p-10 lg:p-12 flex flex-col justify-end text-white">
                  <div className="mb-6">
                    <span className="px-4 py-1.5 bg-blue-600/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold mb-6 leading-none tracking-tight">
                    {partner.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Case Study <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Detail Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 overflow-hidden">
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl transition-opacity duration-500"
            onClick={() => setSelectedPartner(null)}
          ></div>
          
          <div className="relative bg-white w-full max-w-7xl max-h-[92vh] rounded-[3.5rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col lg:flex-row animate-in zoom-in-95 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <button 
              onClick={() => setSelectedPartner(null)}
              className="absolute top-8 right-8 z-20 p-3 bg-slate-900/10 backdrop-blur-md rounded-full text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              <X size={20} />
            </button>

            <div className="lg:w-[45%] relative h-[350px] lg:h-auto overflow-hidden bg-slate-900">
              <img src={selectedPartner.image} alt={selectedPartner.name} className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="grid grid-cols-2 gap-8">
                   {selectedPartner.stats.map((s, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-5xl font-bold text-white mb-1 leading-none tracking-tight">{s.value}</span>
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{s.label}</span>
                      </div>
                   ))}
                </div>
              </div>
            </div>

            <div className="lg:w-[55%] p-10 lg:p-24 overflow-y-auto bg-white flex flex-col justify-center">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-widest mb-6">
                   Case Brief
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                  {selectedPartner.name}
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
                  {selectedPartner.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5">
                  <button 
                    onClick={() => { setSelectedPartner(null); setIsLeadModalOpen(true); }}
                    className="flex-1 bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
                  >
                    Request Briefing <ArrowRight size={20} />
                  </button>
                  <button 
                     className="px-8 py-5 rounded-2xl font-bold text-slate-900 border border-slate-200 hover:bg-slate-50 transition-colors"
                     onClick={() => setSelectedPartner(null)}
                  >
                     Close Explorer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[4rem] p-16 lg:p-32 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.1),_transparent_60%)]"></div>
            <h2 className="text-5xl lg:text-7xl font-bold mb-10 tracking-tight leading-none">Trust the experts in <br/><span className="text-blue-500 font-serif italic">platform risk.</span></h2>
            <div className="flex justify-center relative z-10">
              <button 
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-blue-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/20 transform hover:-translate-y-1 active:scale-95"
              >
                Inquire for Partnership
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
