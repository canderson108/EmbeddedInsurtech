
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-32 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="text-blue-600 w-8 h-8" />
              <span className="text-xl font-black uppercase tracking-tighter">
                Embedded<span className="text-blue-600">Insurtech</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
              The world's leading embedded insurance infrastructure. We help digital platforms launch insurance products in weeks, not months.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-all"><Twitter size={24} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-all"><Linkedin size={24} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-all"><Github size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8">Products</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li><Link to="/products/ecommerce" className="hover:text-blue-600 transition-colors">E-commerce Protection</Link></li>
              <li><Link to="/products/fintech" className="hover:text-blue-600 transition-colors">Fintech Solutions</Link></li>
              <li><Link to="/products/saas" className="hover:text-blue-600 transition-colors">SaaS Insurance</Link></li>
              <li><Link to="/products/travel" className="hover:text-blue-600 transition-colors">Travel Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li><Link to="/ecosystem" className="hover:text-blue-600 transition-colors">Ecosystem Map</Link></li>
              <li><Link to="/developers" className="hover:text-blue-600 transition-colors">API Reference</Link></li>
              <li><Link to="/solutions" className="hover:text-blue-600 transition-colors">Case Studies</Link></li>
              <li><Link to="/compliance" className="hover:text-blue-600 transition-colors">Regulatory Status</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-blue-600 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/security" className="hover:text-blue-600 transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400 font-black uppercase tracking-widest">
          <p>© 2024 Embedded Insurtech. All rights reserved.</p>
          <div className="flex gap-8">
            <p>Built for the Platform Economy</p>
            <p className="text-blue-600">Global Hubs: SF, LON, SG</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
