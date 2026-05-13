/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { weapons } from './data';
import { Weapon, WeaponCategory } from './types';
import WeaponCard from './components/WeaponCard';
import WeaponDetail from './components/WeaponDetail';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShieldAlert } from 'lucide-react';

const CATEGORIES: (WeaponCategory | 'All')[] = ['All', 'AR', 'SR', 'DMR', 'SMG', 'LMG', 'Shotgun'];

export default function App() {
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null);
  const [activeCategory, setActiveCategory] = useState<WeaponCategory | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWeapons = useMemo(() => {
    return weapons.filter(w => {
      const matchesCategory = activeCategory === 'All' || w.category === activeCategory;
      const matchesSearch = w.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            w.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen font-sans selection:bg-yellow-500/30">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar: Categories */}
        <aside className="w-full lg:w-64 flex flex-col gap-6">
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <h1 className="text-2xl font-black uppercase tracking-tighter italic text-yellow-500 mb-8">
              Armory <span className="text-white block text-sm not-italic font-mono tracking-widest mt-1 opacity-50">PUBGM V3.4</span>
            </h1>
            
            <nav className="flex flex-col gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
                    activeCategory === cat 
                      ? 'bg-yellow-500/10 border-l-2 border-yellow-500 text-yellow-500' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span className="text-[10px] font-black w-8">{cat === 'All' ? 'ALL' : cat}</span>
                  <span className="font-semibold text-sm">{cat === 'All' ? 'Full Arsenal' : getCategoryFullname(cat)}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex-col justify-end">
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Operational Intel</p>
            <p className="text-xs text-slate-300 font-mono">Field Data Active</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="relative group flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-yellow-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search database..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm font-mono focus:outline-none focus:border-yellow-500/50 transition-all"
              />
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                Matches: {filteredWeapons.length}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredWeapons.map((weapon) => (
                <WeaponCard 
                  key={weapon.id} 
                  weapon={weapon} 
                  onClick={setSelectedWeapon}
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredWeapons.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 text-slate-600">
              <Search size={64} className="mb-4 opacity-20" />
              <p className="font-mono text-sm tracking-widest uppercase">No assets identified</p>
            </div>
          )}
        </main>
      </div>

      <WeaponDetail 
        weapon={selectedWeapon} 
        onClose={() => setSelectedWeapon(null)} 
      />
    </div>
  );
}

function getCategoryFullname(cat: string): string {
  const names: Record<string, string> = {
    'AR': 'Assault Rifles',
    'SR': 'Sniper Rifles',
    'DMR': 'Marksman Rifles',
    'SMG': 'Submachine Guns',
    'LMG': 'Light Machine Guns',
    'Shotgun': 'Shotguns',
    'All': 'Full Arsenal'
  };
  return names[cat] || cat;
}
