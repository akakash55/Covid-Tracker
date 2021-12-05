import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { cases, recovered, deaths, updated, active, population } }) => {
  if (!cases) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={cases}
          lastUpdate={updated}
          cardSubtitle="Total Number of Reported Cases."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered}
          lastUpdate={updated}
          cardSubtitle="Total Number of Recoveries."
        />
        <CardComponent
          className={styles.active}
          cardTitle="Active"
          value={active}
          lastUpdate={updated}
          cardSubtitle="Total Number of Active Cases."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths}
          lastUpdate={updated}
          cardSubtitle="Total Number of Deaths."
        />
        <CardComponent
          className={styles.population}
          cardTitle="Population"
          value={population}
          lastUpdate={updated}
          cardSubtitle="Total Population."
        />
      </Grid>
    </div>
  );
};

export default Info;