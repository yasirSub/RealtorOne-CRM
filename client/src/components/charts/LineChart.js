import React from "react";
import ReactApexChart from "react-apexcharts";
import { useColorMode } from "@chakra-ui/react";

const ApexChart = (props) => {
  const { data } = props;
  const { colorMode } = useColorMode();
  const dark = colorMode === "dark";
  const ink = dark ? "#C3C3BF" : "#5C584E";

  let permissions = [];
  let permissionsLength = [];

  data?.forEach((item) => {
    if (item.name) {
      permissions.push(item.name);
      permissionsLength.push(item.length);
    }
  });

  const state = {
    series: [
      {
        name: "Data",
        data: permissionsLength?.map((item) => item),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        background: "transparent",
        foreColor: ink,
        toolbar: { show: false },
      },
      theme: { mode: dark ? "dark" : "light" },
      colors: ["#C4A35A"],
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "40%",
        },
      },
      stroke: {
        width: 0,
      },
      grid: {
        borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(42,40,36,0.12)",
      },
      xaxis: {
        categories: permissions?.map((item) => item),
        tickPlacement: "on",
        labels: { style: { colors: ink } },
      },
      yaxis: {
        labels: { style: { colors: ink } },
      },
      fill: {
        opacity: 0.9,
      },
    },
  };
  return (
    <div id="chart">
      <ReactApexChart
        key={colorMode}
        options={state?.options}
        series={state?.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
