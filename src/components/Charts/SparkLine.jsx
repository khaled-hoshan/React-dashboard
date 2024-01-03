import React from 'react';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { red } from '@mui/material/colors';

export default function SparkLine({
  id,
  height,
  width,
  colors,
  data,
  type,
  currentColor,
}) {
  return (
    <SparkLineChart
    plotType={type}
    id={id}
    data={data}
    height={height}   
    width={width}  
    curve
    area
    
      
      
      showTooltip
      showHighlight
    />
  );
}
