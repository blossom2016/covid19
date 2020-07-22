export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    callbacks: {
      label: function ({ value }) {
        if (parseInt(value) >= 1000) {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
          return value;
        }
      },
    }, // end callbacks:
  },
  scales: {
    xAxes: [
      {
        stacked: true,
        display: true,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        stacked: true,
        display: true,
        gridLines: {
          display: true,
          color: 'rgb(241, 241, 241)',
          zeroLineColor: 'rgb(241, 241, 241)'
        },
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
        ticks: {
          beginAtZero: true,
          callback: function (value, index, values) {
            if (parseInt(value) >= 1000) {
              return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
              return value;
            }
          },
        },
      },
    ],
  },
  layout: {
    padding: {
      top: 0,
      bottom: 5,
      left: 20,
      right: 20,
    },
  },
  legend: {
    labels: {
      boxWidth: 20,
      fontSize: 12,
    },
    position: "top",
    align: "end",
  },
};