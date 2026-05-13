import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import { WeaponStats } from '../types';

interface StatsChartProps {
  stats: WeaponStats;
}

export default function StatsChart({ stats }: StatsChartProps) {
  const data = [
    { subject: 'Damage', A: stats.damage, fullMark: 110 },
    { subject: 'Fire Rate', A: stats.fireRate, fullMark: 100 },
    { subject: 'Range', A: stats.range, fullMark: 100 },
    { subject: 'Stability', A: stats.stability, fullMark: 100 },
    { subject: 'Magazine', A: Math.min(stats.magazine * 2, 100), fullMark: 100 },
  ];

  return (
    <div className="w-full h-64 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#ffa500" strokeOpacity={0.2} />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#8E9299', fontSize: 12, fontWeight: 500 }} 
          />
          <Radar
            name="Stats"
            dataKey="A"
            stroke="#ffa500"
            fill="#ffa500"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
