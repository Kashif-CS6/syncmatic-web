"use client";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import boarddata from "@/boarddata";

const BarChart = () => {
  const colors = [
    "#000000",
    "#000000",
    "#f1bcf7",
    "#000000",
    "#f1bcf7",
    "#000000",
    "#000000",
    "#f1bcf7",
  ];

  const [chartData, setChartData] = useState({
    series: [
      {
        data: boarddata.map((item) => item.avg), // Use avg values for y-axis
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: (chart, w, e) => {
            // console.log(chart, w, e)
          },
        },
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false, // Removing data labels (value pointers)
      },
      // Removing tooltip
      tooltip: {
        enabled: false,
      },
      // Removing grid
      grid: {
        show: false,
      },
      // Removing legend
      legend: {
        show: false,
      },
      // Removing download menu button and export options
      toolbar: {
        show: false,
        tools: {
          // This hides the export menu
          export: false,
        },
      },
      // Removing the line where the graph color starts
      stroke: {
        width: 0, // Set stroke width to 0 to remove the line
      },
      xaxis: {
        categories: boarddata.map((item) => item.date_time), // Use date_time for x-axis labels
        labels: {
          style: {
            colors: colors,
            fontSize: "12px",
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={250}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarChart;
