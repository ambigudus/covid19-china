import {
  calculateActiveCase,
  calculateRecoveredRate,
  calculateMortalityRate,
} from '.';

export const densityKeysSchema = [
  {
    key: 'confirmed',
    title: '累计Confirmed',
  },
  {
    key: 'active',
    title: '现存Active',
    dataModifier: (data) => (data.active = calculateActiveCase(data)),
  },
  {
    key: 'recovered',
    title: '治愈Recovered',
  },
  {
    key: 'death',
    title: '死亡Death',
  },
  {
    key: 'recoveredRate',
    title: '治愈率RecoveredRate',
    dataModifier: (data) => (data.recoveredRate = calculateRecoveredRate(data)),
  },
  {
    key: 'mortalityRate',
    title: '死亡率DeathRate',
    dataModifier: (data) => (data.mortalityRate = calculateMortalityRate(data)),
  },
];
