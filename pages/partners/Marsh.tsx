
import React from 'react';
import { Globe, Shield, Users, BarChart } from 'lucide-react';

const Marsh: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter">Marsh + Embedded<span className="text-blue-500">Insurtech</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-12">
              The world's leading insurance broker meets the world's leading embedded infrastructure. Scaling global risk solutions for the modern enterprise.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Brokerage Reinvented</h2>
            <p className="text-slate-600 text-lg mb-8">
                By integrating Marsh's deep industry knowledge with Embedded Insurtech's real-time API, we enable multinational corporations to deploy insurance products across 100+ countries.
            </p>
        </div>
      </section>
    </div>
  );
};

export default Marsh;
