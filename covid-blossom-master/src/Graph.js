import React from "react";
import { Box } from "@chakra-ui/core";
import { Bar } from 'react-chartjs-2';
import Plotly from "plotly.js";
import createPlotlyComponent from 'react-plotly.js/factory';
import { barChartOptions } from './chart-options'
const Plot = createPlotlyComponent(Plotly);

const initialState = {
  labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      type: 'bar',
      backgroundColor: '#ff7529',
      hoverBackgroundColor: 'rgba(255, 117, 41, 0.7)',
      data: [1, 1, 1, 1, 1, 1, 1, 1],
    },
  ],
};

const transformData = (data) => {
  const clone = { ...data };
  delete clone["id"];
  delete clone["province/state"];
  delete clone["country/region"];
  delete clone["lat"];
  delete clone["long"];

  const labels = Object.keys(clone);
  return ({
    labels,
    datasets: [{ ...initialState.datasets[0], data: labels.map(x => clone[x]) }]
  });
};
const transformDataToPlot = (data) => {
  const clone = { ...data };
  delete clone["id"];
  delete clone["province/state"];
  delete clone["country/region"];
  delete clone["lat"];
  delete clone["long"];

  const labels = Object.keys(clone);
  const values = labels.map(x => clone[x]);

  return [{ type: 'bar', x: labels, y: values }]
};

const chartoptions = { ...barChartOptions }
chartoptions.legend = undefined


const Graph = ({ data }) => {

  return (
    <Box minW="80vw" px={2}>
      <Plot
        data={transformDataToPlot(data)}
        layout={{ width: 720, height: 720, title: 'A Fancy Plot' }}
      />
      <Bar data={transformData(data)} options={chartoptions} height={420} />
      {/* <pre>
        {JSON.stringify(data, null, 2)}
      </pre> */}
    </Box>
  );
};

export default Graph;