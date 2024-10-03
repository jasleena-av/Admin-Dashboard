
import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const Chart= () => {
 
  const doughnutData = {
    labels: ['United States', 'Canada', 'Mexico', 'Other'],
    datasets: [
      {
        label: 'Sales Distribution',
        data: [38.6, 22.5, 30.8, 8.1], 
        backgroundColor: ['#000000', '#00FF00', '#A020F0', '#00CED1'], 
        hoverOffset: 4,
      },
    ],
  };

 
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales Over Time',
        data: [0, 10, 25, 30, 15, 20, 35],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="mt-4 ">
      {/* Grid Layout for Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Doughnut Chart: Sales Last 30 Days */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Sales Last 30 Days</h3>
            <HiMenu className="text-2xl" />
          </div>
          <div className="flex justify-center">
            <div className="w-64">
              <Doughnut data={doughnutData} options={options} />
            </div>
          </div>
        </div>

        {/* Line Chart: Sales current Financial Years */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Sales Current Financial Years</h3>
            <HiMenu className="text-2xl" />
          </div>
          <div className="w-full">
            <Line data={lineData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
