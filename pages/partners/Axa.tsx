
import React from 'react';
import { Heart, Zap, Shield } from 'lucide-react';

const Axa: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl font-black mb-8 italic tracking-tight uppercase">AXA <span className="text-blue-600">&</span> Embedded</h1>
          <p className="text-2xl text-slate-500 max-w-3xl mx-auto mb-16 leading-relaxed">
            Redefining the future of protection. AXA's global scale meets our agile infrastructure to deliver instant coverage to millions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Axa;
