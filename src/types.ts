export type WeaponCategory = 'AR' | 'SR' | 'DMR' | 'SMG' | 'LMG' | 'Shotgun' | 'Pistol' | 'Melee' | 'Other';

export interface WeaponStats {
  damage: number;
  fireRate: number;
  range: number;
  stability: number;
  magazine: number;
}

export interface Weapon {
  id: string;
  name: string;
  category: WeaponCategory;
  ammo: string;
  description: string;
  image: string;
  stats: WeaponStats;
}