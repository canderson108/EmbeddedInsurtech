
import React from 'react';
import { Package, Smartphone, Plane, ShieldCheck, Home as HomeIcon, CreditCard } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      title: "E-commerce Protection",
      desc: "Shipping protection, extended warranties, and product liability integrated into your checkout flow.",
      icon: <Package className="text-blue-600" />,
      tag: "Popular"
    },
    {
      title: "Fintech & Banking",
      desc: "Account protection, transaction insurance, and cardholder benefits for modern banks.",
      icon: <CreditCard className="text-purple-600" />,
      tag: "Enterprise"
    },
    {
      title: "SaaS & Cyber",
      desc: "Seamless cyber liability and business interruption insurance for software platforms.",
      icon: <Smartphone className="text-green-600" />,
    },
    {
      title: "Travel & Leisure",
      desc: "Instant trip cancellation, flight delay, and activity protection for travel agencies.",
      icon: <Plane className="text-orange-600" />,
    },
    {
      title: "Gig Economy",
      desc: "Accident and health protection tailored for freelance and gig marketplaces.",
      icon: <ShieldCheck className="text-red-600" />,
    },
    {
      title: "Real Estate Tech",
      desc: "Renters insurance and security deposit alternatives for property management systems.",
      icon: <HomeIcon className="text-indigo-600" />,
    },
  ];

  return (
    <div className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6">Our Insurance Products</h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Broad coverage across multiple verticals, powered by a single API integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="group border border-slate-100 rounded-3xl p-10 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                {p.tag && <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">{p.tag}</span>}
              </div>
              <p className="text-slate-500 leading-relaxed mb-8">
                {p.desc}
              </p>
              <button className="text-blue-600 font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                Learn More <span className="text-xl">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
