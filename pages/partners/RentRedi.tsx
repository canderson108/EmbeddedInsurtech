
import React from 'react';
import { Home, ShieldCheck, Zap, Heart } from 'lucide-react';

const RentRedi: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-6">LANDLORD SOLUTIONS</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">Empowering Landlords with RentRedi</h1>
            <p className="text-xl text-slate-600 mb-10">
              RentRedi and Embedded Insurtech have teamed up to make insurance the easiest part of property management for independent landlords.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-blue-200">See the Integration</button>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-2 rounded-[2rem] shadow-2xl rotate-2">
              <img src="https://picsum.photos/id/160/600/600" className="rounded-[1.8rem]" alt="RentRedi Interface" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">Protection built for the RentRedi ecosystem</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto"><Home size={24} /></div>
              <h4 className="font-bold">Renters Insurance</h4>
              <p className="text-sm text-slate-500">Tenants can buy policy in 60 seconds.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto"><ShieldCheck size={24} /></div>
              <h4 className="font-bold">Security Deposit</h4>
              <p className="text-sm text-slate-500">Alternatives to traditional cash deposits.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto"><Zap size={24} /></div>
              <h4 className="font-bold">Master Policy</h4>
              <p className="text-sm text-slate-500">Gap protection for non-compliant units.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto"><Heart size={24} /></div>
              <h4 className="font-bold">Pet Insurance</h4>
              <p className="text-sm text-slate-500">Coverage for the furry residents.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentRedi;
