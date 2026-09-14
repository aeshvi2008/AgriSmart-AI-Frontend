import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout, UserPlus, AlertCircle, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';
import { useToast } from '../context/ToastContext';

const AVAILABLE_CROPS = ['Tomato', 'Potato', 'Corn (Maize)', 'Apple', 'Grape', 'Pepper Bell', 'Rice', 'Wheat'];

export const RegisterPage: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [farmName, setFarmName] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCrops, setSelectedCrops] = useState<string[]>(['Tomato']);
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleCrop = (crop: string) => {
    if (selectedCrops.includes(crop)) {
      setSelectedCrops(selectedCrops.filter((c) => c !== crop));
    } else {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorMessage('Please provide your name and email/mobile contact.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      await register({
        name,
        email,
        farmName: farmName || 'Family Farm',
        location: location || 'Agricultural Region',
        crops: selectedCrops,
        password
      });
      showToast('Account created successfully!', 'success');
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      setErrorMessage(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-600/20">
            <Sprout className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Create Grower Account</h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Join the agricultural community using AI-powered crop health monitoring
          </p>
        </div>

        {errorMessage && (
          <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Farmer / Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g. Ramesh Patel"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email / Mobile
              </label>
              <input
                id="email"
                type="text"
                required
                placeholder="e.g. ramesh@farm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="farmName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Farm or Plot Name
              </label>
              <input
                id="farmName"
                type="text"
                placeholder="e.g. Green Valley Farm"
                value={farmName}
                onChange={(e) => setFarmName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                District / Region
              </label>
              <input
                id="location"
                type="text"
                placeholder="e.g. Nashik District"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none"
              />
            </div>
          </div>

          {/* Crops multi-select */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Primary Crops Grown
            </label>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_CROPS.map((crop) => {
                const isSelected = selectedCrops.includes(crop);
                return (
                  <button
                    type="button"
                    key={crop}
                    onClick={() => toggleCrop(crop)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                    <span>{crop}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label htmlFor="reg-password" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              id="reg-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            icon={<UserPlus className="w-4 h-4" />}
            className="w-full font-bold mt-2"
          >
            Create Farmer Account
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center text-xs text-slate-500">
          <span>Already registered? </span>
          <Link to="/login" className="font-bold text-emerald-700 hover:text-emerald-800">
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};
