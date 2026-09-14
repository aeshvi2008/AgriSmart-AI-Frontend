import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert, CheckCircle2, Sprout } from 'lucide-react';
import { DiseaseInfo } from '../../types/disease';
import { Card } from '../common/Card';

interface DiseaseCardProps {
  disease: DiseaseInfo;
}

export const DiseaseCard: React.FC<DiseaseCardProps> = ({ disease }) => {
  const getSeverityBadge = () => {
    if (disease.isHealthy) {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
          <CheckCircle2 className="w-3 h-3" /> Healthy
        </span>
      );
    }
    const colorMap: Record<string, string> = {
      none: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      mild: 'bg-blue-50 text-blue-800 border-blue-200',
      moderate: 'bg-amber-50 text-amber-800 border-amber-200',
      severe: 'bg-rose-50 text-rose-800 border-rose-200'
    };

    return (
      <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${colorMap[disease.severity] || 'bg-slate-100 text-slate-800'} uppercase tracking-wider`}>
        <ShieldAlert className="w-3 h-3" /> {disease.severity} Risk
      </span>
    );
  };

  return (
    <Card hoverable className="flex flex-col justify-between h-full group">
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60">
            <Sprout className="w-3.5 h-3.5" />
            {disease.crop}
          </span>
          {getSeverityBadge()}
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
          {disease.displayName}
        </h3>
        {disease.scientificName && (
          <p className="text-xs italic text-slate-400 mb-2 font-serif">
            {disease.scientificName}
          </p>
        )}

        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {disease.description}
        </p>

        {/* Symptoms preview */}
        <div className="mb-4 pt-3 border-t border-slate-100">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Primary Symptoms:
          </span>
          <p className="text-xs text-slate-600 truncate">
            {disease.symptoms[0] || 'Observe leaf patterns'}
          </p>
        </div>
      </div>

      <Link
        to={`/disease/${disease.classId}`}
        className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-100 text-xs font-bold text-emerald-700 group-hover:text-emerald-800 transition-colors"
      >
        <span>View Full Disease & Treatment Guide</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Card>
  );
};
