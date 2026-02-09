import React from 'react';
import { LineGraph } from './components/Line';
import { BarGraph } from './components/Bar';
import { PackPerHourBarGraph } from './components/PackagesPerHourBar';
import { PieChart } from './components/Pie';
import { Doughnut } from './components/donut';

function App() {
  return (
    <div className="App">
      <h1>Packages Per Day</h1>
      <LineGraph />
      <h2>box efficiency data</h2>
      <BarGraph />
      <h3>Maintenance Pie Chart</h3>
      <PieChart />
      <h4>Packages Per Hour</h4>
      <PackPerHourBarGraph />
      <h5>Donut</h5>
      <Doughnut />
    </div>
  );
}

export default App;
