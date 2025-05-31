import React, { createContext, useState } from 'react';

export const ChartContext = createContext();

export function ChartProvider({ children }) {
  const [chartId, setChartId] = useState(null);

  const getChartId = (newChart) => setChartId(newChart);
  const clearChartId = () => setChartId(null);

  return (
    <ChartContext.Provider value={{ chartId, getChartId, clearChartId }}>
      {children}
    </ChartContext.Provider>
  );
}