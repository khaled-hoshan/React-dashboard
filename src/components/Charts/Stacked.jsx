import React from 'react';
import { BarChart } from '@mui/x-charts';
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from '../../data/dummy';

const uData = [2000, 1398, 2000, 2780, 1890, 2390, 3490];
const pData = [4000, 3000, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'July',
];

export default function Stacked({ width, height }) {
  return (
    <BarChart
      width={width}
      height={height}
      series={[
        { data: pData, label: 'Expence', stack: 'stack1' },
        { data: uData, label: 'Budget', stack:'stack1' }
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      colors={['skyblue', 'pink']}
      
    />
  );
}
