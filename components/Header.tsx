
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import LeadFormModal from './LeadFormModal';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const navLinks = [
    { label: 'Products', path: '/products' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Ecosystem', path: '/ecosystem' },
    { label: 'Developers', path: '/developers' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <LeadFormModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
              <div className="p-2.5 bg-blue-600 rounded-xl group-hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                Embedded<span className="text-blue-600">Insurtech</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={() => setIsLeadModalOpen(true)}
              className="bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all transform active:scale-95 shadow-xl shadow-slate-100"
            >
              Request Demo
            </button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300 h-screen">
          <div className="px-6 pt-10 pb-12 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-4xl font-black text-slate-900 uppercase italic tracking-tighter"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={() => { setIsOpen(false); setIsLeadModalOpen(true); }}
              className="w-full bg-blue-600 text-white px-8 py-6 rounded-3xl font-black text-xl uppercase tracking-widest"
            >
              Request Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
