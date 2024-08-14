import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './Stats.css';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Stats = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    mostPopularItem: '',
    ordersData: [],
  });

  const fetchStatistics = async () => {
    console.log('Fetching statistics...');
    const response = {
      data: {
        totalUsers: 1500,
        totalOrders: 3200,
        totalRevenue: 45700,
        mostPopularItem: 'Sandwich',
        ordersData: [250, 600, 200, 50, 230, 500, 245, 400, 750, 50, 450, 300], // Mock data for the chart
      },
    };

    console.log('Statistics fetched:', response.data);
    setStats(response.data);
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  const chartData = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Orders per Month',
        data: stats.ordersData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="stats-container">
      <div className="stats">
        <h1>Website Statistics</h1>
        <div className="stat-item">
          <h2>Total Users</h2>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="stat-item">
          <h2>Total Orders</h2>
          <p>{stats.totalOrders}</p>
        </div>
        <div className="stat-item">
          <h2>Total Revenue</h2>
          <p>${stats.totalRevenue}</p>
        </div>
        <div className="stat-item">
          <h2>Most Popular Item</h2>
          <p>{stats.mostPopularItem}</p>
        </div>
      </div>
      <div className="chart-container">
        <h2>Monthly Orders</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Stats;
