"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import boarddata from "@/boarddata";

const Circular = () => {
  // Calculate the sums of teaching, planning, and organization
  const teachingSum = boarddata.reduce((acc, curr) => acc + curr.teaching, 0);
  const planningSum = boarddata.reduce((acc, curr) => acc + curr.planning, 0);
  const organizationSum = boarddata.reduce(
    (acc, curr) => acc + curr.organization,
    0
  );

  // Calculate the average of teaching
  const teachingAverage = teachingSum / boarddata.length;

   // Calculate the average of organizing
   const organizingAverage = organizationSum / boarddata.length;

    // Calculate the average of planning
  const planningAverage = planningSum / boarddata.length;

  

  // Define the series for the chart
  const series = [teachingAverage, organizingAverage, planningAverage];

  const options = {
    chart: {
      type: "donut",
      background: "#000000", // Change the background color here
    },
    plotOptions: {
      pie: {
        donut: {
          size: "40%", // Increase the inner width here
        },
      },
    },
    legend: {
      show: false, // Remove the legend
    },
    dataLabels: {
      enabled: false, // Hide the numbers on the graph
    },
    stroke: {
      width: 4, // Increase the stroke width
      colors: ["#000000"], // Border color change to black
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="donut" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Circular;
