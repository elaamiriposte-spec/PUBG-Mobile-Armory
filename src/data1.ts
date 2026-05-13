import { Weapon } from './types';

export const weapons: Weapon[] = [
  {
    id: 'm416',
    name: 'M416',
    category: 'AR',
    ammo: '5.56mm',
    description: 'A versatile and reliable assault rifle that supports many attachments. It is a favorite for many players due to its manageable recoil and high fire rate.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_HK416_C.png',
    stats: { damage: 41, fireRate: 75, range: 60, stability: 70, magazine: 30 }
  },
  {
    id: 'akm',
    name: 'AKM',
    category: 'AR',
    ammo: '7.62mm',
    description: 'Powerful assault rifle that deals heavy damage but has significant vertical recoil. Excellent for experienced players who can control its kick.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_AKM_C.png',
    stats: { damage: 47, fireRate: 60, range: 65, stability: 40, magazine: 30 }
  },
  {
    id: 'awm',
    name: 'AWM',
    category: 'SR',
    ammo: '.300 Magnum',
    description: 'The most powerful sniper rifle in the game. It can one-shot any helmet. Only found in air drops.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_AWM_C.png',
    stats: { damage: 105, fireRate: 10, range: 100, stability: 30, magazine: 5 }
  },
  {
    id: 'kar98k',
    name: 'Karabiner 98 Kurz',
    category: 'SR',
    ammo: '7.62mm',
    description: 'A vintage bolt-action sniper rifle. Known for its iconic sound and high headshot damage.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_Kar98k_C.png',
    stats: { damage: 79, fireRate: 5, range: 90, stability: 30, magazine: 5 }
  },
  {
    id: 'm24',
    name: 'M24',
    category: 'SR',
    ammo: '7.62mm',
    description: 'A modern bolt-action sniper rifle with slightly higher damage and muzzle velocity than the Kar98k.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_M24_C.png',
    stats: { damage: 84, fireRate: 6, range: 95, stability: 35, magazine: 5 }
  },
  {
    id: 'uzi',
    name: 'Micro UZI',
    category: 'SMG',
    ammo: '9mm',
    description: 'A high-speed submachine gun perfect for close-quarters combat. Its fire rate is blistering.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_UZI_C.png',
    stats: { damage: 26, fireRate: 95, range: 20, stability: 80, magazine: 25 }
  },
  {
    id: 'ump45',
    name: 'UMP45',
    category: 'SMG',
    ammo: '.45 ACP',
    description: 'A very stable and easy-to-use SMG. It is highly effective in mid-range combat for its class.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_UMP_C.png',
    stats: { damage: 41, fireRate: 65, range: 45, stability: 85, magazine: 25 }
  },
  {
    id: 'vector',
    name: 'Vector',
    category: 'SMG',
    ammo: '9mm',
    description: 'Small but deadly SMG with incredibly low recoil and high fire rate. Magazine size is its main weakness.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_Vector_C.png',
    stats: { damage: 31, fireRate: 90, range: 30, stability: 90, magazine: 19 }
  },
  {
    id: 'sks',
    name: 'SKS',
    category: 'DMR',
    ammo: '7.62mm',
    description: 'A semi-automatic marksman rifle that rewards precision. Highly effective when fully decked with attachments.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_SKS_C.png',
    stats: { damage: 53, fireRate: 40, range: 75, stability: 50, magazine: 10 }
  },
  {
    id: 'mini14',
    name: 'Mini 14',
    category: 'DMR',
    ammo: '5.56mm',
    description: 'A stable DMR with high muzzle velocity. It has a larger magazine than other DMRs and minimal bullet drop.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_Mini14_C.png',
    stats: { damage: 46, fireRate: 50, range: 80, stability: 65, magazine: 20 }
  },
  {
    id: 'slr',
    name: 'SLR',
    category: 'DMR',
    ammo: '7.62mm',
    description: 'Powerful semi-auto sniper that hits harder than the SKS but is more difficult to handle.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_FNFAL_C.png',
    stats: { damage: 58, fireRate: 35, range: 85, stability: 40, magazine: 10 }
  },
  {
    id: 'm249',
    name: 'M249',
    category: 'LMG',
    ammo: '5.56mm',
    description: 'Light machine gun with a huge magazine. Ideal for suppressive fire and vehicle destruction.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_M249_C.png',
    stats: { damage: 45, fireRate: 85, range: 50, stability: 60, magazine: 75 }
  },
  {
    id: 'dp28',
    name: 'DP-28',
    category: 'LMG',
    ammo: '7.62mm',
    description: 'A reliable LMG with great stability when prone. Its flat circular magazine is its signature.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_DP28_C.png',
    stats: { damage: 51, fireRate: 45, range: 55, stability: 75, magazine: 47 }
  },
  {
    id: 'dbs',
    name: 'DBS',
    category: 'Shotgun',
    ammo: '12 Gauge',
    description: 'Double-barrel pump-action shotgun. It can fire two shots in quick succession with devastating power.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_DBS_C.png',
    stats: { damage: 95, fireRate: 30, range: 15, stability: 40, magazine: 14 }
  },
  {
    id: 'pan',
    name: 'Pan',
    category: 'Melee',
    ammo: 'None',
    description: 'The legendary PUBG pan. It blocks bullets and delivers a satisfying thwack.',
    image: 'https://raw.githubusercontent.com/pubg/api-assets/master/assets/icon/item/weapon/Main/Item_Weapon_Pan_C.png',
    stats: { damage: 80, fireRate: 20, range: 5, stability: 100, magazine: 0 }
  }
];
