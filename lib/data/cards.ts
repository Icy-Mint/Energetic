import { GameCard } from '../types';

export const gameCards: GameCard[] = [
  {
    id: 'wind',
    name: 'WIND',
    category: ['Energy', 'Renewable'],
    cost: '400 Energy Bucks',
    realWorldCost: '$4 Billion',
    stability: -4,
    description:
      'Offshore wind installation. Replaces 1 GW of natural gas. 170 turbines at 12 MW each.',
  },
  {
    id: 'nuclear',
    name: 'NUCLEAR',
    category: ['Energy', 'Baseload'],
    description: 'Nuclear power generation. High capacity, stable power source.',
  },
  {
    id: 'transmission',
    name: 'TRANSMISSION',
    category: ['Infrastructure'],
    cost: '100 Energy Bucks',
    realWorldCost: '$1 Billion',
    publicOpinion: -2,
    description:
      'Transmission line upgrades. Essential for grid modernization but faces public opposition.',
  },
  {
    id: 'carbon-fee',
    name: 'CARBON FEE',
    category: ['Policy'],
    publicOpinion: -12,
    description: 'Carbon pricing mechanism. Requires 4 cards to unlock. Highly unpopular but effective.',
  },
  {
    id: 'h2-storage',
    name: 'H2 STORAGE RESEARCH',
    category: ['Storage', 'Research'],
    cost: '50 Energy Bucks',
    realWorldCost: '$500 Million',
    description: 'Hydrogen storage research. 4 cards needed to bring to scale.',
  },
  {
    id: 'pumped-hydro',
    name: 'PUMPED HYDRO',
    category: ['Storage'],
    stability: 4,
    publicOpinion: -6,
    description: 'Energy storage via pumped hydro. High stability but very unpopular.',
  },
  {
    id: 'community-outreach',
    name: 'COMMUNITY OUTREACH',
    category: ['Policy', 'Social'],
    publicOpinion: 2,
    description: 'Public engagement and education. Increases public support.',
  },
  {
    id: 'public-deliberation',
    name: 'PUBLIC DELIBERATION / CITIZENS ASSEMBLY',
    category: ['Policy', 'Social'],
    publicOpinion: 2,
    description: 'Democratic decision-making process. +2 Public Opinion (+4 if played by Politician).',
  },
];
