import React from 'react';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function SparkLine({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
}) {
  return (
    <SparkLineChart
    data={data}
      height={height}
      
      showTooltip
      showHighlight
    />
  );
}
