
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">Cookie Policy</h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">How we use small pieces of data to optimize your developer and user experience.</p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p className="mb-8">Embedded Insurtech uses cookies and similar tracking technologies to analyze trends, administer the website, and track users' movements around the site. Cookies help us understand how you interact with our documentation and platform dashboards.</p>

          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">Types of Cookies We Use</h2>
          <div className="grid gap-6 mb-12">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Essential Cookies</h4>
              <p className="text-sm">Necessary for the website and dashboard to function securely. These cannot be switched off.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Analytics Cookies</h4>
              <p className="text-sm">Help us measure performance and identify which parts of our API documentation are most helpful.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Functional Cookies</h4>
              <p className="text-sm">Allow the site to remember choices you make, such as your preferred programming language in the API playground.</p>
            </div>
          </div>

          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">Managing Your Preferences</h2>
          <p className="mb-8">You can control the use of cookies at the individual browser level. If you reject cookies, you may still use our site, but your ability to use some features or areas of our platform may be limited. For more information on how to manage your privacy settings, please consult your browser's help documentation.</p>
          
          <p className="font-black text-slate-900 uppercase italic tracking-tighter">Stay Secure. Build Better.</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
