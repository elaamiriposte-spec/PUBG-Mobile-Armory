import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Weapon } from '../types';
import { X, Zap, Target, Shield, Crosshair, Database } from 'lucide-react';
import StatsChart from './StatsChart';

interface WeaponDetailProps {
  weapon: Weapon | null;
  onClose: () => void;
}

export default function WeaponDetail({ weapon, onClose }: WeaponDetailProps) {
  if (!weapon) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          layoutId={`weapon-${weapon.id}`}
          className="relative w-full max-w-4xl bg-slate-900/40 backdrop-blur-3xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition-colors z-10 border border-white/10"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col md:flex-row h-full">
            {/* Left side: Image and Summary */}
            <div className="w-full md:w-1/2 p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[6px] text-yellow-500 mb-2">
                {weapon.category} Technical Data
              </span>
              <h2 className="text-5xl font-black text-white mb-8 tracking-tighter italic uppercase">{weapon.name}</h2>
              
              <div className="relative flex-1 flex items-center justify-center mb-8 min-h-[300px]">
                <img 
                  src={weapon.image} 
                  alt={weapon.name}
                  className="max-w-full max-h-64 object-contain filter drop-shadow-[0_0_30px_rgba(255,165,0,0.2)]"
                />
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mt-auto">
                <p className="text-slate-300 text-sm leading-relaxed italic opacity-80">
                  {weapon.description}
                </p>
              </div>
            </div>

            {/* Right side: Stats and Details */}
            <div className="w-full md:w-1/2 p-10 overflow-y-auto max-h-[70vh] md:max-h-[90vh]">
              <div className="mb-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[10px] font-bold text-slate-500 tracking-[3px] uppercase">Performance Metrics</h3>
                  <div className="h-0.5 w-12 bg-yellow-500/30"></div>
                </div>
                <StatsChart stats={weapon.stats} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <DetailItem label="Ammo" value={weapon.ammo} />
                <DetailItem label="Power" value={weapon.stats.damage.toString()} />
                <DetailItem label="Stability" value={`${weapon.stats.stability}%`} />
                <DetailItem label="Magazine" value={weapon.stats.magazine.toString()} />
              </div>

              <div className="mt-10 pt-10 border-t border-white/10">
                <button 
                  className="w-full py-4 bg-yellow-500 text-slate-950 font-black uppercase tracking-[4px] text-xs rounded-2xl hover:bg-yellow-400 transition-all shadow-[0_4px_20px_rgba(234,179,8,0.3)] hover:shadow-[0_6px_25px_rgba(234,179,8,0.4)] hover:-translate-y-0.5"
                >
                  Download Blueprints
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function DetailItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
      <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">{label}</p>
      <p className="font-mono text-lg text-white font-bold">{value}</p>
    </div>
  );
}

function Badge({ text, color = "border-[#ffa500] text-[#ffa500]" }: { text: string, color?: string }) {
  return (
    <span className={`text-[10px] uppercase font-mono px-2 py-1 border rounded-md ${color} opacity-70`}>
      {text}
    </span>
  );
}
