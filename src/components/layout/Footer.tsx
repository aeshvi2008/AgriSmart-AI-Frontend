import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800 text-sm">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">AgriSmart AI</span>
            </div>
            <p className="text-slate-400 max-w-sm text-xs sm:text-sm leading-relaxed">
              Empowering farmers with instant, high-accuracy crop disease diagnosis and agronomist-verified treatment recommendations right in the field.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>AI Decision Support System for Sustainable Agriculture</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/dashboard" className="hover:text-emerald-400 transition-colors">Farmer Dashboard</Link>
              </li>
              <li>
                <Link to="/scan" className="hover:text-emerald-400 transition-colors">Scan Leaf Photo</Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-emerald-400 transition-colors">Past Diagnosis Records</Link>
              </li>
              <li>
                <Link to="/disease/tomato_early_blight" className="hover:text-emerald-400 transition-colors">Crop Disease Library</Link>
              </li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Resources & Trust</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/help" className="hover:text-emerald-400 transition-colors">Photo Taking Guide</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">About the Project</Link>
              </li>
              <li>
                <span className="text-slate-500">FastAPI Model 1 Backend Ready</span>
              </li>
              <li>
                <span className="text-slate-500">28 Disease Classes Cataloged</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} AgriSmart AI. Built with care for agricultural producers.
          </p>
          <div className="flex items-center gap-1">
            <span>Designed for farmers with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>field simplicity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
