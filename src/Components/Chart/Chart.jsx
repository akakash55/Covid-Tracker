import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';


import styles from './Chart.module.css';

const Chart = ({ data: { cases, recovered, deaths,active }, country }) => {
  // console.log({ country });
  let message = "";
  if (country) {
    message = `Current State in ${country}`;
  }
  else{
    message = `Global Data`;
  }

  const doughnutChart = (
    cases ? (
      <Doughnut
        data={{
          labels: ['Infected', 'Recovered', 'Active', 'Deaths'],
          datasets: [
            {
              label: message,
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)','rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)' ],
              data: [cases, recovered,active, deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: message },
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {doughnutChart}
    </div>
  );
};

export default Chart;
