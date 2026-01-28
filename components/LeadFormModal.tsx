
import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Building2, Globe, Users, Zap } from 'lucide-react';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose, initialInterest }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(1);
      setIsSuccess(false);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] overflow-hidden animate-in zoom-in-95 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 sm:p-12">
          {!isSuccess ? (
            <>
              <div className="mb-10 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                  <Zap size={32} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight italic uppercase">Launch Your Program</h2>
                <p className="text-slate-500 font-medium">Tell us about your platform and we'll build a custom demo.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Work Email</label>
                    <input required type="email" placeholder="john@platform.com" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Company Name</label>
                  <input required type="text" placeholder="Acme Inc." className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Industry Vertical</label>
                  <select 
                    defaultValue={initialInterest || ""}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-600 outline-none transition-all font-medium appearance-none"
                  >
                    <option value="" disabled>Select your industry</option>
                    <option value="proptech">PropTech / Real Estate</option>
                    <option value="fintech">FinTech / Banking</option>
                    <option value="hrtech">HRTech / Payroll</option>
                    <option value="erp">ERP / Financial Software</option>
                    <option value="ecommerce">E-commerce / Retail</option>
                  </select>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"} <Send size={20} />
                </button>
              </form>
            </>
          ) : (
            <div className="py-12 text-center animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">Touchdown!</h2>
              <p className="text-xl text-slate-500 font-medium mb-10">Our vertical lead will reach out within 2 hours with a custom strategy deck.</p>
              <button 
                onClick={onClose}
                className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors"
              >
                Back to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadFormModal;
