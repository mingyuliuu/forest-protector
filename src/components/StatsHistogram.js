import Histogram from "react-chart-histogram";
import React from "react";

export const StatsHistogram = ( stats ) => {
  const labels = ["Past 15 Days", "Past 30 Days", "Past 60 Days"];
  const data = stats.histogramData;

  console.log(data);
  const options = { fillColor: "#FFFFFF", strokeColor: "#0000FF" };
  return (
    <div>
      <Histogram
        xLabels={labels}
        yValues={data}
        width="300"
        height="200"
        options={options}
      />
    </div>
  );
};
