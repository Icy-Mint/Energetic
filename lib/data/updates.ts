import { GameUpdate } from '../types';

export const gameUpdates: GameUpdate[] = [
  {
    id: 'egu-2025',
    title: 'Presented at European Geosciences Union',
    description:
      'Energetic showcased at EGU conference, demonstrating game mechanics to international climate research community.',
    date: new Date('2025-05-01'),
    category: 'Conference',
  },
  {
    id: 'agu-2024',
    title: 'Presented at American Geophysical Union',
    description: 'Game mechanics and educational impact presented at AGU conference.',
    date: new Date('2024-12-01'),
    category: 'Conference',
  },
  {
    id: 'impacts-2023',
    title: 'Added Extreme Precipitation and Wildfire Smoke cards',
    description: 'Updated game decks with two additional climate impacts relevant to New York City.',
    date: new Date('2023-01-01'),
    category: 'Game Update',
  },
  {
    id: 'timeline-2019',
    title: 'Added Green New Deal budget and 2035 timeline',
    description: 'Incorporated GND budget framework and accelerated decarbonization timeline.',
    date: new Date('2019-01-01'),
    category: 'Game Update',
  },
  {
    id: 'launch-2018',
    title: 'First Public Share by Jesse Jenkins',
    description: 'Princeton University researcher Jesse Jenkins shared Energetic on Twitter.',
    date: new Date('2018-12-01'),
    category: 'Milestone',
  },
  {
    id: 'first-play-2018',
    title: 'First Gameplay',
    description: 'Original game first played in September 2018.',
    date: new Date('2018-09-01'),
    category: 'Milestone',
  },
];
