import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'; 

const SoilTestResultsCard = () => {
  const data = {
    labels: ['Nutrient A', 'Nutrient B', 'Nutrient C'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="block max-w-[18rem] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="p-6">
        <h5 className="mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Soil Test Results
        </h5>
        <div className="mb-4">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default SoilTestResultsCard;
