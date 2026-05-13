import { Weapon } from './types';

export const weapons: Weapon[] = [
  // ASSAULT RIFLES
  {
    id: 'm416',
    name: 'M416',
    category: 'AR',
    ammo: '5.56mm',
    description: 'A versatile and reliable assault rifle that supports many attachments. It is a favorite for many players due to its manageable recoil and high fire rate.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-m416.webp',
    stats: { damage: 41, fireRate: 75, range: 60, stability: 70, magazine: 30 }
  },
  {
    id: 'akm',
    name: 'AKM',
    category: 'AR',
    ammo: '7.62mm',
    description: 'Powerful assault rifle that deals heavy damage but has significant vertical recoil. Excellent for experienced players who can control its kick.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-akm.webp',
    stats: { damage: 47, fireRate: 60, range: 65, stability: 40, magazine: 30 }
  },
  {
    id: 'beryl_m762',
    name: 'Beryl M762',
    category: 'AR',
    ammo: '7.62mm',
    description: 'A versatile assault rifle with higher fire rate and higher damage than the AKM, but with significantly more recoil.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-beryl_m762.webp',
    stats: { damage: 44, fireRate: 75, range: 60, stability: 35, magazine: 30 }
  },
  {
    id: 'aug_a3',
    name: 'AUG A3',
    category: 'AR',
    ammo: '5.56mm',
    description: 'A bullpup rifle with excellent handling and stability. Provides top-tier performance for 5.56mm platform.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-aug_a3.webp',
    stats: { damage: 41, fireRate: 75, range: 60, stability: 80, magazine: 30 }
  },
  {
    id: 'ace32',
    name: 'ACE32',
    category: 'AR',
    ammo: '7.62mm',
    description: 'A modern 7.62mm rifle that balances damage and stability better than older models.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-ace32.webp',
    stats: { damage: 43, fireRate: 68, range: 62, stability: 55, magazine: 30 }
  },
  {
    id: 'honey_badger',
    name: 'Honey Badger',
    category: 'AR',
    ammo: '7.62mm',
    description: 'Fast-firing 7.62mm rifle optimized for close to mid-range encounters.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-honey_badger.webp',
    stats: { damage: 43, fireRate: 80, range: 50, stability: 45, magazine: 30 }
  },
  {
    id: 'scar_l',
    name: 'SCAR-L',
    category: 'AR',
    ammo: '5.56mm',
    description: 'A stable 5.56mm rifle with a moderate rate of fire. It is very reliable in mid-range combat.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-scar_l.webp',
    stats: { damage: 41, fireRate: 70, range: 60, stability: 75, magazine: 30 }
  },
  {
    id: 'm16a4',
    name: 'M16A4',
    category: 'AR',
    ammo: '5.56mm',
    description: 'A burst-fire rifle with high muzzle velocity. Deadly in the hands of a player who can tap quickly.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-m16a4.webp',
    stats: { damage: 43, fireRate: 80, range: 65, stability: 60, magazine: 30 }
  },
  {
    id: 'groza',
    name: 'Groza',
    category: 'AR',
    ammo: '7.62mm',
    description: 'A bullpup assault rifle with an extreme fire rate and high damage. Only found in air drops.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-groza.webp',
    stats: { damage: 47, fireRate: 85, range: 55, stability: 50, magazine: 30 }
  },
  {
    id: 'g36c',
    name: 'G36C',
    category: 'AR',
    ammo: '5.56mm',
    description: 'Exclusive to Vikendi, this compact rifle offers great handling and specialized fire modes.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-g36c.webp',
    stats: { damage: 41, fireRate: 75, range: 60, stability: 70, magazine: 30 }
  },
  {
    id: 'qbz95',
    name: 'QBZ95',
    category: 'AR',
    ammo: '5.56mm',
    description: 'Exclusive to Sanhok, a reliable bullpup rifle with slightly unique recoil patterns.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-qbz95.webp',
    stats: { damage: 41, fireRate: 75, range: 60, stability: 68, magazine: 30 }
  },

  // SNIPER RIFLES
  {
    id: 'awm',
    name: 'AWM',
    category: 'SR',
    ammo: '.300 Magnum',
    description: 'The most powerful sniper rifle in the game. It can one-shot any helmet. Only found in air drops.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-awm.webp',
    stats: { damage: 105, fireRate: 10, range: 100, stability: 30, magazine: 5 }
  },
  {
    id: 'kar98k',
    name: 'Kar98k',
    category: 'SR',
    ammo: '7.62mm',
    description: 'A vintage bolt-action sniper rifle. Known for its iconic sound and high headshot damage.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-kar98k.webp',
    stats: { damage: 79, fireRate: 5, range: 90, stability: 30, magazine: 5 }
  },
  {
    id: 'm24',
    name: 'M24',
    category: 'SR',
    ammo: '7.62mm',
    description: 'A modern bolt-action sniper rifle with slightly higher damage and muzzle velocity than the Kar98k.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-m24.webp',
    stats: { damage: 84, fireRate: 6, range: 95, stability: 35, magazine: 5 }
  },
  {
    id: 'mosin_nagant',
    name: 'Mosin Nagant',
    category: 'SR',
    ammo: '7.62mm',
    description: 'A bolt-action sniper rifle with similar performance to the Kar98k.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-mosin_nagant.webp',
    stats: { damage: 79, fireRate: 5, range: 90, stability: 30, magazine: 5 }
  },
  {
    id: 'win94',
    name: 'Win94',
    category: 'SR',
    ammo: '.45 ACP',
    description: 'A fast-action lever-rifle with a built-in scope. Deadly for quick-scoping in early game.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-win94.webp',
    stats: { damage: 66, fireRate: 15, range: 75, stability: 60, magazine: 8 }
  },

  // DESIGNATED MARKSMAN RIFLES
  {
    id: 'sks',
    name: 'SKS',
    category: 'DMR',
    ammo: '7.62mm',
    description: 'A semi-automatic marksman rifle that rewards precision. Highly effective when fully decked with attachments.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-sks.webp',
    stats: { damage: 53, fireRate: 40, range: 75, stability: 50, magazine: 10 }
  },
  {
    id: 'mini_14',
    name: 'Mini 14',
    category: 'DMR',
    ammo: '5.56mm',
    description: 'A stable DMR with high muzzle velocity. It has a larger magazine than other DMRs and minimal bullet drop.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-mini14.webp',
    stats: { damage: 46, fireRate: 50, range: 80, stability: 65, magazine: 20 }
  },
  {
    id: 'slr',
    name: 'SLR',
    category: 'DMR',
    ammo: '7.62mm',
    description: 'Powerful semi-auto sniper that hits harder than the SKS but is more difficult to handle.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-slr.webp',
    stats: { damage: 58, fireRate: 35, range: 85, stability: 40, magazine: 10 }
  },
  {
    id: 'mk14_ebr',
    name: 'Mk14 EBR',
    category: 'DMR',
    ammo: '7.62mm',
    description: 'Rare air-drop DMR that features a full-auto mode. Extremely powerful but has extreme recoil in auto mode.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-mk14_ebr.webp',
    stats: { damage: 61, fireRate: 60, range: 85, stability: 30, magazine: 10 }
  },
  {
    id: 'vss_vintorez',
    name: 'VSS Vintorez',
    category: 'DMR',
    ammo: '9mm',
    description: 'Specialized DMR with a built-in suppressor and 4x scope. Very quiet but has severe bullet drop.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-vss_vintorez.webp',
    stats: { damage: 41, fireRate: 70, range: 30, stability: 80, magazine: 10 }
  },
  {
    id: 'qbu',
    name: 'QBU',
    category: 'DMR',
    ammo: '5.56mm',
    description: 'Sanhok exclusive DMR with a built-in bipod for extreme prone stability.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-qbu.webp',
    stats: { damage: 48, fireRate: 45, range: 80, stability: 70, magazine: 10 }
  },
  {
    id: 'mk12',
    name: 'Mk12',
    category: 'DMR',
    ammo: '5.56mm',
    description: 'Modern 5.56mm DMR with high precision and low recoil.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-mk12.webp',
    stats: { damage: 50, fireRate: 48, range: 82, stability: 75, magazine: 20 }
  },

  // SUBMACHINE GUNS
  {
    id: 'micro_uzi',
    name: 'Micro UZI',
    category: 'SMG',
    ammo: '9mm',
    description: 'A high-speed submachine gun perfect for close-quarters combat. Its fire rate is blistering.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-micro_uzi.webp',
    stats: { damage: 26, fireRate: 95, range: 20, stability: 80, magazine: 25 }
  },
  {
    id: 'ump45',
    name: 'UMP45',
    category: 'SMG',
    ammo: '.45 ACP',
    description: 'A very stable and easy-to-use SMG. It is highly effective in mid-range combat for its class.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-ump45.webp',
    stats: { damage: 41, fireRate: 65, range: 45, stability: 85, magazine: 25 }
  },
  {
    id: 'vector',
    name: 'Vector',
    category: 'SMG',
    ammo: '9mm',
    description: 'Small but deadly SMG with incredibly low recoil and high fire rate. Magazine size is its main weakness.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-vector.webp',
    stats: { damage: 31, fireRate: 90, range: 30, stability: 90, magazine: 19 }
  },
  {
    id: 'mp5k',
    name: 'MP5K',
    category: 'SMG',
    ammo: '9mm',
    description: 'A compact SMG that excels in short distances. Highly customizable with many attachments.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-mp5k.webp',
    stats: { damage: 33, fireRate: 85, range: 35, stability: 75, magazine: 30 }
  },
  {
    id: 'pp19_bizon',
    name: 'PP-19 Bizon',
    category: 'SMG',
    ammo: '9mm',
    description: 'Features a large helical magazine for sustained fire without attachments.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-pp19_bizon.webp',
    stats: { damage: 35, fireRate: 70, range: 30, stability: 80, magazine: 53 }
  },
  {
    id: 'p90',
    name: 'P90',
    category: 'SMG',
    ammo: '5.7mm',
    description: 'Crate-only SMG with a built-in suppressor and high-capacity magazine. Virtually no recoil.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-p90.webp',
    stats: { damage: 35, fireRate: 90, range: 40, stability: 95, magazine: 50 }
  },
  {
    id: 'tommy_gun',
    name: 'Tommy Gun',
    category: 'SMG',
    ammo: '.45 ACP',
    description: 'Classic SMG with high magazine capacity and decent damage.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-tommy_gun.webp',
    stats: { damage: 40, fireRate: 75, range: 45, stability: 60, magazine: 30 }
  },

  // LIGHT MACHINE GUNS
  {
    id: 'm249',
    name: 'M249',
    category: 'LMG',
    ammo: '5.56mm',
    description: 'Light machine gun with a huge magazine. Ideal for suppressive fire and vehicle destruction.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-m249.webp',
    stats: { damage: 45, fireRate: 85, range: 50, stability: 60, magazine: 75 }
  },
  {
    id: 'dp28',
    name: 'DP-28',
    category: 'LMG',
    ammo: '7.62mm',
    description: 'A reliable LMG with great stability when prone. Its flat circular magazine is its signature.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-dp28.webp',
    stats: { damage: 51, fireRate: 45, range: 55, stability: 75, magazine: 47 }
  },
  {
    id: 'mg3',
    name: 'MG3',
    category: 'LMG',
    ammo: '7.62mm',
    description: 'Extreme-speed LMG with a switchable fire rate. Only available in air drops.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-mg3.webp',
    stats: { damage: 40, fireRate: 100, range: 50, stability: 55, magazine: 75 }
  },

  // SHOTGUNS
  {
    id: 'dbs',
    name: 'DBS',
    category: 'Shotgun',
    ammo: '12 Gauge',
    description: 'Double-barrel pump-action shotgun. It can fire two shots in quick succession with devastating power.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-dbs.webp',
    stats: { damage: 95, fireRate: 30, range: 15, stability: 40, magazine: 14 }
  },
  {
    id: 's12k',
    name: 'S12K',
    category: 'Shotgun',
    ammo: '12 Gauge',
    description: 'A semi-automatic shotgun based on the AK platform. Can be equipped with an extended magazine.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-s12k.webp',
    stats: { damage: 90, fireRate: 40, range: 10, stability: 30, magazine: 5 }
  },
  {
    id: 's1897',
    name: 'S1897',
    category: 'Shotgun',
    ammo: '12 Gauge',
    description: 'Standard pump shotgun with a 5-round capacity.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-s1897.webp',
    stats: { damage: 95, fireRate: 20, range: 15, stability: 40, magazine: 5 }
  },
  {
    id: 's686',
    name: 'S686',
    category: 'Shotgun',
    ammo: '12 Gauge',
    description: 'Double-barrel shotgun that can fire both rounds almost instantly.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-s686.webp',
    stats: { damage: 98, fireRate: 50, range: 12, stability: 35, magazine: 2 }
  },

  // PISTOLS
  {
    id: 'p1911',
    name: 'P1911',
    category: 'Pistol',
    ammo: '.45 ACP',
    description: 'Classic semi-auto pistol with reliable power.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-p1911.webp',
    stats: { damage: 41, fireRate: 35, range: 15, stability: 60, magazine: 7 }
  },
  {
    id: 'p92',
    name: 'P92',
    category: 'Pistol',
    ammo: '9mm',
    description: 'Standard sidearm with decent capacity.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-p92.webp',
    stats: { damage: 35, fireRate: 40, range: 15, stability: 70, magazine: 15 }
  },
  {
    id: 'p18c',
    name: 'P18C',
    category: 'Pistol',
    ammo: '9mm',
    description: 'Fully automatic pistol with high fire rate.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-p18c.webp',
    stats: { damage: 23, fireRate: 90, range: 10, stability: 80, magazine: 17 }
  },
  {
    id: 'desert_eagle',
    name: 'Desert Eagle',
    category: 'Pistol',
    ammo: '.45 ACP',
    description: 'Extremely high damage pistol capable of destroying helmets.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-desert_eagle.webp',
    stats: { damage: 62, fireRate: 20, range: 25, stability: 30, magazine: 7 }
  },
  {
    id: 'r1895',
    name: 'R1895',
    category: 'Pistol',
    ammo: '7.62mm',
    description: 'Powerful revolver with a slow reload speed.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-r1895.webp',
    stats: { damage: 55, fireRate: 15, range: 20, stability: 50, magazine: 7 }
  },

  // OTHER / SPECIAL
  {
    id: 'crossbow',
    name: 'Crossbow',
    category: 'Other',
    ammo: 'Bolt',
    description: 'Completely silent weapon that deals massive damage but has severe drop and slow reload.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-crossbow.webp',
    stats: { damage: 105, fireRate: 5, range: 25, stability: 100, magazine: 1 }
  },

  // MELEE
  {
    id: 'pan',
    name: 'Pan',
    category: 'Melee',
    ammo: 'None',
    description: 'The legendary PUBG pan. It blocks bullets and delivers a satisfying thwack.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-pan.webp',
    stats: { damage: 80, fireRate: 20, range: 5, stability: 100, magazine: 0 }
  },
  {
    id: 'machete',
    name: 'Machete',
    category: 'Melee',
    ammo: 'None',
    description: 'Standard bladed melee weapon.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-machete.webp',
    stats: { damage: 60, fireRate: 25, range: 5, stability: 90, magazine: 0 }
  },
  {
    id: 'crowbar',
    name: 'Crowbar',
    category: 'Melee',
    ammo: 'None',
    description: 'Durable metal tool used for melee combat.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-crowbar.webp',
    stats: { damage: 60, fireRate: 25, range: 5, stability: 90, magazine: 0 }
  },
  {
    id: 'sickle',
    name: 'Sickle',
    category: 'Melee',
    ammo: 'None',
    description: 'Curved blade for close quarters encounters.',
    image: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-sickle.webp',
    stats: { damage: 60, fireRate: 25, range: 5, stability: 90, magazine: 0 }
  }
];
