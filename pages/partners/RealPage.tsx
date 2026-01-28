
import React from 'react';
import { Building2, Users, ClipboardCheck, BarChart4 } from 'lucide-react';

const RealPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-8">Modernizing Real Estate Insurance with RealPage</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
            Automating compliance and liability protection for the world's largest property portfolios.
          </p>
          <img src="https://picsum.photos/id/122/1200/400" className="rounded-3xl shadow-2xl mx-auto border-4 border-white/10" alt="RealPage Partnership" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Building2 className="text-blue-600" />,
                title: "Portfolio Liability",
                desc: "Enterprise-wide liability coverage that scales automatically as assets are added to the RealPage platform."
              },
              {
                icon: <Users className="text-green-600" />,
                title: "Tenant Compliance",
                desc: "Automated verification of renters insurance with instant fallback coverage to protect the asset owner."
              },
              {
                icon: <ClipboardCheck className="text-purple-600" />,
                title: "Claims Automation",
                desc: "Integrated claims reporting directly from the maintenance and property management console."
              }
            ].map((box, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50">
                <div className="mb-6">{box.icon}</div>
                <h3 className="text-xl font-bold mb-4">{box.title}</h3>
                <p className="text-slate-500">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealPage;
