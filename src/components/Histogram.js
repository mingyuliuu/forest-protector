import { AgChartsReact } from "ag-charts-react";
import React, { useEffect, useState } from "react";

export const Histogram = (stats) => {
  // Retrieve data needed for the histogram
  // (months during which there were wildfires)
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(stats.histogramData);
  }, [stats]);

  return (
    <AgChartsReact
      options={{
        title: {
          text: "Wildfires in this Area",
        },
        data: data,
        series: [
          {
            type: "histogram",
            xKey: "month",
            areaPlot: true,
            bins: [ // Plot the histogram in 6 columns (bi-monthly)
              [1, 2],
              [3, 4],
              [5, 6],
              [7, 8],
              [9, 10],
              [1, 12],
            ],
          },
        ],
        legend: {
          enabled: true,
        },
        axes: [
          {
            type: "number",
            position: "bottom",
            title: { text: "Month (during Past Year)" },
          },
          {
            type: "number",
            position: "left",
            title: { text: "Number of Wildfires" },
          },
        ],
      }}
    />
  );
};
