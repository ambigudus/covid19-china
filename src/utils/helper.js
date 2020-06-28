import {
  calculateActiveCase,
  calculateRecoveredRate,
  calculateMortalityRate,
} from '.';

export const densityKeysSchema = [
  {
    key: 'confirmed',
    title: '累计',
  },
  {
    key: 'active',
    title: '现存',
    dataModifier: (data) => (data.active = calculateActiveCase(data)),
  },
  {
    key: 'recovered',
    title: '治愈',
  },
  {
    key: 'death',
    title: '死亡',
  },
  {
    key: 'recoveredRate',
    title: '治愈率',
    dataModifier: (data) => (data.recoveredRate = calculateRecoveredRate(data)),
  },
  {
    key: 'mortalityRate',
    title: '死亡率',
    dataModifier: (data) => (data.mortalityRate = calculateMortalityRate(data)),
  },
];
