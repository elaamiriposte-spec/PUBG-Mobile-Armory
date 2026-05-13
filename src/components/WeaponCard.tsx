import React from 'react';
import { motion } from 'motion/react';
import { Weapon } from '../types';
import { Crosshair, Zap, Target, Shield, Database } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface WeaponCardProps {
  weapon: Weapon;
  onClick: (weapon: Weapon) => void;
}

export const WeaponCard: React.FC<WeaponCardProps> = ({ weapon, onClick }) => {
  return (
    <motion.div
      layoutId={`weapon-${weapon.id}`}
      onClick={() => onClick(weapon)}
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 cursor-pointer transition-all hover:border-yellow-500/50 group relative"
    >
      <div className="flex justify-between items-start mb-1">
        <div>
          <span className="text-[10px] font-black tracking-widest text-yellow-500 mb-1 block uppercase">
            {weapon.category}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{weapon.name}</h3>
        </div>
      </div>

      <div className="h-32 bg-slate-800/20 rounded-xl mb-4 flex items-center justify-center p-4 border border-white/5">
        <motion.img 
          src={weapon.image} 
          alt={weapon.name} 
          referrerPolicy="no-referrer"
          className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,165,0,0.1)] group-hover:scale-110 transition-transform"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200?text=Weapon';
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <StatBar label="PWR" value={weapon.stats.damage} max={100} />
        <StatBar label="SPD" value={weapon.stats.fireRate} max={100} />
      </div>

      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
        {weapon.description}
      </p>

      <div className="absolute bottom-4 right-4 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
        {weapon.ammo}
      </div>
    </motion.div>
  );
}

export default WeaponCard;

function StatBar({ label, value, max }: { label: string, value: number, max: number }) {
  const percentage = (value / max) * 100;
  return (
    <div>
      <div className="flex justify-between text-[9px] font-bold mb-1 text-slate-500">
        <span>{label}</span>
        <span className="text-yellow-500/80">{value}</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-yellow-500 transition-all duration-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
