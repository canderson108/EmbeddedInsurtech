
import React, { useState } from 'react';
import { ShoppingCart, ShieldCheck, Zap, ArrowRight, Package, Truck, RotateCcw } from 'lucide-react';
import LeadFormModal from '../../components/LeadFormModal';

const EcommerceDetail: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="pt-24 bg-white selection:bg-blue-100 selection:text-blue-900">
      <LeadFormModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} initialInterest="ecommerce" />
      
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black rounded-full uppercase tracking-widest mb-8">
                Retail Distribution
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter uppercase italic">The Logistics<br />of Trust.</h1>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
                Why Embedded Insurance is the secret weapon for modern retailers and marketplaces to boost AOV and customer lifetime value.
              </p>
              <button 
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-3 group"
              >
                Launch Protection <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <img src="https://images.unsplash.com/photo-1556742049-04ff4361c26a?auto=format&fit=crop&q=80&w=800" alt="E-commerce" className="rounded-[3rem] shadow-2xl" />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
                 <p className="text-3xl font-black text-blue-600 mb-1">2.4%</p>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Average Increase in Checkout Conversion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter italic uppercase">Beyond the Transaction</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
              In the hyper-competitive world of e-commerce, the checkout button is no longer the finish line—it’s the start of a relationship. Modern consumers don’t just buy products; they buy peace of mind. **Embedded Insurtech** allows platforms to offer shipping protection, extended warranties, and returns coverage at the exact moment of peak intent.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
              By integrating protection directly into the checkout flow, retailers can turn a cost center into a significant revenue driver. Unlike traditional insurance that feels like a separate burden, embedded protection feels like a premium service. For marketplaces, this is a "Category 1" trigger moment: where risk is created (shipping) and urgency is high.
            </p>
            <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-blue-50 rounded-3xl text-center">
                <Package className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-bold text-slate-900 uppercase tracking-tight italic">Product Protection</h4>
              </div>
              <div className="p-8 bg-blue-50 rounded-3xl text-center">
                <Truck className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-bold text-slate-900 uppercase tracking-tight italic">Transit Coverage</h4>
              </div>
              <div className="p-8 bg-blue-50 rounded-3xl text-center">
                <RotateCcw className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-bold text-slate-900 uppercase tracking-tight italic">Return Insurance</h4>
              </div>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
              Our API allows you to customize the coverage based on item value, destination, and buyer history. This dynamic underwriting ensures that premiums are always optimized for conversion while maintaining a healthy loss ratio. Whether it's high-ticket electronics needing accidental damage protection or fashion labels offering "return-from-home" guarantees, Embedded Insurtech handles the regulatory complexity, leaving you to focus on the customer experience.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Statistics show that customers who opt-in for protection are 35% more likely to return for a second purchase. They trust the platform more, knowing that if a package is stolen or a product fails, they are covered. This is the new standard of retail distribution.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDetail;
