
import React from 'react';
import { Layers, ShieldAlert, PieChart, LayoutDashboard } from 'lucide-react';

const AppFolio: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-tight">Enterprise Scale with AppFolio</h1>
            <p className="text-xl text-slate-500 mb-12">
                Managing millions of units requires infrastructure that never sleeps. AppFolio uses Embedded Insurtech to provide institutional-grade protection at scale.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-6">
                    <p className="text-3xl font-bold text-blue-600 mb-1">2M+</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Policies Managed</p>
                </div>
                <div className="p-6">
                    <p className="text-3xl font-bold text-blue-600 mb-1">50ms</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">API Response Time</p>
                </div>
                <div className="p-6">
                    <p className="text-3xl font-bold text-blue-600 mb-1">100%</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Compliance Auto-fill</p>
                </div>
                <div className="p-6">
                    <p className="text-3xl font-bold text-blue-600 mb-1">$500M</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Liability Covered</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20">
                <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6"><ShieldAlert size={24}/></div>
                    <h3 className="text-2xl font-bold mb-4">Risk Mitigation</h3>
                    <p className="text-slate-500 leading-relaxed">AppFolio properties utilize our automated risk detection to identify uninsured tenants and prompt coverage during rent payment cycles.</p>
                </div>
                <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><PieChart size={24}/></div>
                    <h3 className="text-2xl font-bold mb-4">Liability Reporting</h3>
                    <p className="text-slate-500 leading-relaxed">Comprehensive dashboards for property managers to see exactly what percentage of their portfolio is covered and where risk exists.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AppFolio;
