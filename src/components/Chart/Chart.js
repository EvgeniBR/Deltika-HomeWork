import React from "react";
import { Line } from "react-chartjs-2";

const Chart = (props) => {
  return (
    <div className="chart-component">
      <Line
        options={{
          responsive: true,
        }}
        data={props.data}
      />
    </div>
  );
};

export default Chart;
