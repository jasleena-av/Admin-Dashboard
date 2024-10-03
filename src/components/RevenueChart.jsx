

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [20, 25, 15, 18, 22, 23, 28, 24, 20, 22, 21, 27],
      backgroundColor: [
        '#f54291', '#7bc96f', '#a0a0a0', '#f56b36', '#a0a0a0', '#fa7373',
        '#748bfc', '#7bc96f', '#a0a0a0', '#f56b36', '#a0a0a0', '#f54291'
      ],
      barPercentage: 0.4, 
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        callback: (value) => `${value}M`,
      },
    },
  },
};

const RevenueChart = () => {
  return (
    <div className='w-full mx-auto mt-5'>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Revenue Chart</h2>
          <select className="border bg-white rounded-md p-2">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
        <div className="w-full  h-60 sm:h-72 md:h-80 lg:h-96"> 
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
