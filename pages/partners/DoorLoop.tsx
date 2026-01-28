
import React from 'react';
import { Key, MousePointer2, Settings2, Sparkles } from 'lucide-react';

const DoorLoop: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mb-10">
              <Key size={40} />
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8">One Click Insurance for DoorLoop</h1>
            <p className="text-xl text-slate-400 max-w-3xl mb-12">
              Transforming DoorLoop into a comprehensive protection powerhouse. Embedded Insurtech handles the underwriting, while DoorLoop provides the perfect interface.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-10 h-full">
                {Array.from({length: 100}).map((_, i) => (
                    <div key={i} className="border border-white/20 aspect-square"></div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">The Developer-First Rental App</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                DoorLoop's modern stack paired with Embedded Insurtech's APIs creates a seamless experience. No more clunky forms or slow approvals.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600"><MousePointer2 size={20}/></div>
                  <p className="font-medium text-slate-800">Direct integration into the lease-signing flow.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600"><Settings2 size={20}/></div>
                  <p className="font-medium text-slate-800">Automated policy renewals and cancellations.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600"><Sparkles size={20}/></div>
                  <p className="font-medium text-slate-800">Dynamic pricing based on property data.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
               <h4 className="font-bold mb-6 text-slate-400 text-sm uppercase tracking-widest">DoorLoop Admin View</h4>
               <div className="h-6 w-full bg-slate-100 rounded mb-4"></div>
               <div className="h-24 w-full bg-blue-50 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">Policy Active: #LP-2045</span>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-slate-50 rounded-xl"></div>
                  <div className="h-20 bg-slate-50 rounded-xl"></div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoorLoop;
