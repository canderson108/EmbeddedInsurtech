
import React from 'react';
import { Shield, Award } from 'lucide-react';

const Chubb: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8"><Award size={32} /></div>
          <h1 className="text-5xl font-extrabold mb-8">Chubb: The Gold Standard</h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Chubb's world-class underwriting and claims service, delivered through Embedded Insurtech's high-performance digital pipeline.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Chubb;
