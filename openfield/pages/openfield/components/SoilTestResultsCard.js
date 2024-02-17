import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

const SoilTestResultsCard = () => {
  const data = {
    labels: ['Fertiliser A', 'Fertiliser B', 'FertiliserD', 'Fertiliser C'],
    datasets: [
      {
        data: [35, 20, 10, 35],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFDE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFDE56'],
      },
    ],
  };

  return (
    <div className="block max-w-[18rem] border-2 rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="p-6">
        <h5 className="mb-1 text-xl font-medium leading-tight text-black">
          Fertilisers Usage
        </h5>
        <div className="mb-4">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default SoilTestResultsCard;
