import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';

import React from 'react'

export const Histogram = () => {
  return (
    <AgChartsReact options={{
        title: {
          text: 'Race demographics',
        },
        data: getData(),
        series: [
          {
            type: 'histogram',
            xKey: 'age',
            xName: 'Participant Age',
          },
        ],
        legend: {
          enabled: false,
        },
        axes: [
          {
            type: 'number',
            position: 'bottom',
            title: { text: 'Age band (years)' },
          },
          {
            type: 'number',
            position: 'left',
            title: { text: 'Number of participants' },
          },
        ],
      }} />
  )
}
