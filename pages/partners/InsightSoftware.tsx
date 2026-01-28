
import React from 'react';
import { Shield, TrendingUp, Cpu, CheckCircle2 } from 'lucide-react';

const InsightSoftware: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-8">InsightSoftware + Embedded<span className="text-blue-600">Insurtech</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              Integrating enterprise-grade financial protection directly into ERP and reporting workflows. Helping businesses manage risk where they manage their numbers.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold">Request Partner Overview</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Financial Intelligence Meets Insurance</h2>
              <p className="text-slate-500 mb-8">
                InsightSoftware users can now access business interruption and credit insurance directly within their reporting dashboards. By leveraging real-time financial data, Embedded Insurtech provides accurate quotes and instant binding.
              </p>
              <ul className="space-y-4">
                {[
                  "Automated risk assessment via ERP data",
                  "Business interruption coverage for mid-market",
                  "Seamless premium reconciliation",
                  "Consolidated reporting for insurance spend"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-100 rounded-3xl p-12 aspect-square flex items-center justify-center">
              <Shield className="text-blue-600 w-32 h-32 opacity-20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightSoftware;
