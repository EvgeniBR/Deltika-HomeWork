import React, { useState } from "react";
import csvDataSample from "./json_data/Weather_Sample.json";
import csvDataNaive from "./json_data/Weather_Naive_guide.json";
import csvDataCounter from "./json_data/Weather_Counterfactual.json";
import tool from "./tools/tool";
import Chart from "./components/Chart/Chart";
import Button from "./components/Button/Button";
import User from "./components/User/User";
import './App.css'

const App = () => {
  const dataSample = JSON.parse(JSON.stringify(csvDataSample));
  const dataNaive = JSON.parse(JSON.stringify(csvDataNaive));
  const dataCounter = JSON.parse(JSON.stringify(csvDataCounter));

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const btnClick = (e) => {
    const xAxis = tool.createXAxis(dataSample);
    const samplePreasure = tool.createPressure(dataSample, e.target.value);
    const naivePreasure = tool.createPressure(dataNaive, e.target.value);
    const counterPreasure = tool.createPressureF(dataCounter, e.target.value);

    setChartData({
      labels: xAxis,
      datasets: [
        {
          label: "Sample",
          borderColor: "rgba(75,192,192,1)",
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(0,255,0,1)",
          data: samplePreasure,
          fill:false,
          pointStyle:'cross' ,
        },
        {
          label: "Naive guide",
          borderColor: "rgba(255,0,0,1)",
          pointHoverBackgroundColor: "rgba(0,255,0,1)",
          pointHoverBorderColor: "rgba(0,255,0,1)",
          data: naivePreasure,
          fill:false,
          pointStyle:'rect'
          ,
        },
        {
          label: "counterfractual",
          borderColor: "rgba(255,0,255,1)",
          pointHoverBackgroundColor: "rgba(255,0,255,1)",
          pointHoverBorderColor: "rgba(0,255,0,1)",
          data: counterPreasure,
          fill:false,
          pointStyle:'star'
          ,
        },
      ],
    });
  };

  return (
    <div className="app-container">
      <div>
        <User />
      </div>
      <div className="content-container">
        <h3>Weather Chart</h3>
        <div className="chart-btn-container">
          <Button btnName="Pressure" handleClick={btnClick} />
          <Button btnName="Temperature" handleClick={btnClick} />
          <Button btnName="Relative Humidity" handleClick={btnClick} />
          <Button btnName="Saturation vapor pressure" handleClick={btnClick} />
          <Button btnName="Vapor pressure deficit" handleClick={btnClick} />
          <Button btnName="Water vapor concentration" handleClick={btnClick} />
          <Button btnName="Airtight" handleClick={btnClick} />
          <Button btnName="Wind speed" handleClick={btnClick} />
          <Button btnName="Wind direction in degrees" handleClick={btnClick} />
        </div>
        <div className="chart-container"
        >
          <Chart data={chartData} chartName="Weather" />
        </div>
      </div>
    </div>
  );
};

export default App;
