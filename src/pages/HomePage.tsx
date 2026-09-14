import React from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  ShieldCheck,
  Zap,
  Sprout,
  ArrowRight,
  Sparkles,
  Clock,
  HeartHandshake
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { useAuth } from '../context/AuthContext';

export const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'Instant In-Field Diagnosis',
      description: 'Take a photo of any leaf and get a diagnosis within seconds right on your phone in the field.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Actionable Treatment Advice',
      description: 'Understand both organic bio-fungicides and conventional sprays before diseases spread.'
    },
    {
      icon: <Sprout className="w-6 h-6 text-green-600" />,
      title: '28 Conditions Supported',
      description: 'Covers key solanaceous crops, cereal grains, fruit orchards, and vegetable varieties.'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: 'Full Diagnosis History',
      description: 'Track plant health across your fields over time with automated photo record keeping.'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Snap Leaf Photo',
      description: 'Capture a close-up image of any leaf displaying spots, discoloration, or curling.'
    },
    {
      step: '02',
      title: 'AI Pattern Analysis',
      description: 'Model 1 classifies visual disease markers against thousands of verified plant pathology records.'
    },
    {
      step: '03',
      title: 'Protect Your Crop',
      description: 'Receive immediate organic or chemical mitigation steps to safeguard your harvest.'
    }
  ];

  const crops = [
    'Tomato', 'Potato', 'Corn (Maize)', 'Apple Orchards', 'Grapevines', 'Bell Pepper', 'Rice Paddies', 'Wheat Fields'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-slate-900 text-white pt-12 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
        {/* Soft background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs sm:text-sm font-semibold border border-white/15 mb-6 animate-pulse-subtle">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>AI-Assisted Crop Disease Detection for Farmers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6 text-white">
            Spot Crop Diseases Early. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200">
              Protect Every Acre.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Diagnose plant diseases from a single leaf photo. Get verified organic and chemical treatment advice to stop crop loss before it spreads.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <Link to={isAuthenticated ? '/scan' : '/scan'} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<Camera className="w-5 h-5" />}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold shadow-lg shadow-emerald-500/25 border-emerald-400"
              >
                Scan a Crop Leaf Now
              </Button>
            </Link>

            <Link to="/help" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-xs"
              >
                How It Works
              </Button>
            </Link>
          </div>

          {/* Quick trust metrics */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left sm:text-center text-xs text-emerald-200">
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white">28</p>
              <p className="text-emerald-300/80">Crop Diseases Mapped</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white">&lt; 2 Sec</p>
              <p className="text-emerald-300/80">Rapid In-Field Scan</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white">100%</p>
              <p className="text-emerald-300/80">Farmer-Focused Guidance</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white">Organic</p>
              <p className="text-emerald-300/80">& Chemical Treatments</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Simple Process */}
      <section className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Designed For The Field
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              No complicated technical manuals. Just point your phone camera at an affected leaf and let AgriSmart AI guide you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <span className="text-4xl font-black text-emerald-600/20 group-hover:text-emerald-600/40 transition-colors block mb-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Crops */}
      <section className="py-14 bg-slate-50 border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
            Trained On Major Commercial & Staple Crops
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {crops.map((crop, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-2xs"
              >
                <Sprout className="w-4 h-4 text-emerald-600" />
                {crop}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Features Grid */}
      <section className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Built For Real Growers
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Farmers Trust AgriSmart AI
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Community Callout */}
      <section className="py-12 bg-emerald-50/60 border-t border-emerald-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-emerald-950">Free Decision Support for Farmers</h4>
              <p className="text-xs sm:text-sm text-emerald-800">
                Created to assist agricultural communities in sustainable food production and pest management.
              </p>
            </div>
          </div>
          <Link to="/scan">
            <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Start Free Diagnosis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
