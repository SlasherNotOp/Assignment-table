import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { transformedData } from '../data/test-Salary'; // Assuming this is already typed

// Register necessary components from Chart.js
Chart.register(...registerables);

const Checkline: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null); // Type for ref
  const [chartInstance, setChartInstance] = useState<Chart | null>(null); // Type for chart instance

  const [chartData, setChartData] = useState<{ labels: string[]; datasets: any[] }>({
    labels: [],
    datasets: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const labels = transformedData.map(item => String(item.year)); // Assuming 'year' is a string

        const totalJobsData = transformedData.map(item => item.totalJobs); // Assuming it's a number
        const avgSalaryUSDData = transformedData.map(item => item.avgSalaryUSD); // Assuming it's a number

        setChartData({
          labels,
          datasets: [
            {
              label: 'Total Jobs',
              data: totalJobsData,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 2,
              pointRadius: 2,
              fill:true,
              tension: 0.2,
              showLine:true,
              
              
              
            },
            {
              label: 'Avg Salary USD',
              data: avgSalaryUSDData,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2,
              pointRadius: 2,
              fill:true,
              tension:0.2,
              showLine:true,
              hidden:true,
              
            },
          ],
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching chart data:', err);
        setError('Failed to fetch chart data');
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  useEffect(() => {
    if (!loading && !error && chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const newChartInstance = new Chart(chartRef.current, {
        type: "line",
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Year Data: Total Jobs and Avg Salary USD',
              font: { size: 18 },
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            },
            legend: {
              display: true,
              position: 'top',
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Year',
                font: { size: 16 },
              },
              grid: {
                display: false,
              },
            },
            y: {
              title: {
                display: true,
                text: 'Total Jobs & Avg Salary',
                font: { size: 16 },
              },
              beginAtZero: true,
              grid: {
                
              },
            },
          },
        },
      });

      setChartInstance(newChartInstance);
    }
  }, [chartData, loading, error]);


  if (loading) {
    return <div className="text-center text-gray-500">Loading chart...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="w-full h-[500px] relative p-4">
      <canvas ref={chartRef} className="w-full h-full" />
      {/* Uncomment below if you want to use chart type selection */}
      {/* <div className="my-4 flex flex-col items-center">
        <label htmlFor="chartType" className="mb-2 font-bold text-gray-700">Select Chart Type:</label>
        <select
          id="chartType"
          value={chartType}
          onChange={handleChartTypeChange}
          className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="radar">Radar</option>
          <option value="pie">Pie</option>
          <option value="doughnut">Doughnut</option>
          <option value="polarArea">Polar Area</option>
        </select>
      </div> */}
    </div>
  );
};

export default Checkline;
