
// import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

// import { Chart, registerables, BarElement, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
// import {transformedData} from "../data/test-Salary"


// const LineGraph :React.FC = () => {
//   const chartRef = useRef(null);
//   const [chartInstance, setChartInstance] = useState<any|null>(null);
//   const [chartType, setChartType] = useState<string>('line');
//   const [chartData, setChartData] = useState({ labels: [], datasets: [] });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
        
//         const labels = transformedData.map(item => item.year); // Country
//         const totalJobsData = transformedData.map(item => item.totalJobs);
//         const avgSalaryUSDData = transformedData.map(item => item.avgSalaryUSD);
        

//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: 'Total Jobs',
//               data: totalJobsData,
//               backgroundColor: 'rgba(255, 99, 132, 0.2)',
//               borderColor: 'rgba(255, 99, 132, 1)',
//               borderWidth: 2,
//               pointRadius: 0, // Adjust size of dots here
//             },
//             {
//               label: 'Avg Salary USD',
//               data: avgSalaryUSDData,
//               backgroundColor: 'rgba(54, 162, 235, 0.2)',
//               borderColor: 'rgba(54, 162, 235, 1)',
//               borderWidth: 2,
//               pointRadius: 0, // Adjust size of dots here
              
//             },
            
//           ],
//         });
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching chart data:', err);
//         setError('Failed to fetch chart data');
//         setLoading(false);
//       }
//     };

//     fetchChartData();
//   }, []);

//   useEffect(() => {
//     if (!loading && !error && chartRef.current) {
//       if (chartInstance) {
//         chartInstance.destroy();
//       }

//       const newChartInstance = new Chart(chartRef.current, {
//         type: chartType,
//         data: chartData,
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             title: {
//               display: true,
//               text: 'Country Data: Intensity, Likelihood, and Relevance',
//               font: { size: 18 },
//             },
//             tooltip: {
//               mode: 'index',
//               intersect: false,
//             },
//             legend: {
//               display: true,
//               position: 'top',
//             },
//           },
//           scales: {
//             x: {
//               title: {
//                 display: true,
//                 text: 'Country',
//                 font: { size: 16 },
//               },
//               grid: {
//                 display: false,
//               },
//             },
//             y: {
//               title: {
//                 display: true,
//                 text: 'Value',
//                 font: { size: 16 },
//               },
//               beginAtZero: true,
//               grid: {
//                 drawBorder: false,
//               },
//             },
//           },
//         },
//       });

//       setChartInstance(newChartInstance);
//     }
//   }, [chartData, chartType, loading, error]);

//   const handleChartTypeChange = (e:ChangeEvent<HTMLSelectElement>) => {
//     setChartType(e.target.value);
//   };

//   if (loading) {
//     return <div className="text-center text-gray-500">Loading chart...</div>;
//   }
  
//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div className="w-full h-[500px] relative p-4">
//       <canvas ref={chartRef} className="w-full h-full" />
//       {/* <div className="my-4 flex flex-col items-center">
//         <label htmlFor="chartType" className="mb-2 font-bold text-gray-700">Select Chart Type:</label>
//         <select
//           id="chartType"
//           value={chartType}
//           onChange={handleChartTypeChange}
//           className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="bar">Bar</option>
//           <option value="line">Line</option>
//           <option value="radar">Radar</option>
//           <option value="pie">Pie</option>
//           <option value="doughnut">Doughnut</option>
//           <option value="polarArea">Polar Area</option>
//         </select>
//       </div> */}
//     </div>
//   );
// };

// export default LineGraph;
