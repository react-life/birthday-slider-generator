import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Ration from './Ration';

const title = 'Custom';
const progressLow = [
  {
    text: 'Регистрационные данные',
    required: true,
    active: true,
  },
  {
    text: 'Антропометрия',
    required: true,
    active: true,
  },
  {
    text: 'Энергообмен',
    required: true,
  },
  {
    text: 'Норма суточного потребления',
    required: true,
  },
  {
    text: 'Фактический дневник питания',
  },
  {
    text: 'Диагнозы',
  },
];
const progressFull = [
  {
    text: 'Регистрационные данные',
    required: true,
    active: true,
  },
  {
    text: 'Антропометрия',
    required: true,
    active: true,
  },
  {
    text: 'Энергообмен',
    required: true,
    active: true,
  },
  {
    text: 'Норма суточного потребления',
    required: true,
    active: true,
  },
  {
    text: 'Фактический дневник питания',
    active: true,
  },
  {
    text: 'Диагнозы',
    active: true,
  },
];
const progressHighNoReq = [
  {
    text: 'Регистрационные данные',
    required: true,
    active: true,
  },
  {
    text: 'Антропометрия',
    required: true,
    active: true,
  },
  {
    text: 'Энергообмен',
    required: true,
    active: true,
  },
  {
    text: 'Норма суточного потребления',
    required: true,
    active: false,
  },
  {
    text: 'Фактический дневник питания',
    active: true,
  },
  {
    text: 'Фактический дневник питания',
    active: true,
  },
  {
    text: 'Диагнозы',
    active: true,
  },
];
const progressHigh = [
  {
    text: 'Регистрационные данные',
    required: true,
    active: true,
  },
  {
    text: 'Антропометрия',
    required: true,
    active: true,
  },
  {
    text: 'Энергообмен',
    required: true,
    active: true,
  },
  {
    text: 'Норма суточного потребления',
    required: true,
    active: true,
  },
  {
    text: 'Фактический дневник питания',
    active: true,
  },
  {
    text: 'Диагнозы',
    active: false,
  },
];
const progressShort = [
  {
    text: 'Регистрационные данные',
    required: true,
    active: true,
  },
  {
    text: 'Антропометрия',
    required: true,
    active: true,
  },
  {
    text: 'Энергообмен',
    required: true,
    active: false,
  },
  {
    text: 'Диагнозы',
    active: false,
  },
];

storiesOf('Ration')
  .addWithInfo('Default title Low Charge', () => (
    <div style={{ paddingTop: 80 }}>
      <Ration progress={progressLow} />
    </div>
  ))
  .addWithInfo('Custom title High Charge Not all required checked', () => (
    <div style={{ paddingTop: 80 }}>
      <Ration title={title} progress={progressHighNoReq} />
    </div>
  ))
  .addWithInfo('Custom title High Charge all required checked', () => (
    <div style={{ paddingTop: 80 }}>
      <Ration title={title} progress={progressHigh} />
    </div>
  ))
  .addWithInfo('Full charge', () => (
    <div style={{ paddingTop: 80 }}>
      <Ration progress={progressFull} />
    </div>
  ))
  .addWithInfo('Short progress', () => (
    <div style={{ paddingTop: 80 }}>
      <Ration progress={progressShort} />
    </div>
  ));
