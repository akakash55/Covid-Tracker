import React from 'react';

import { Cards, CountryPicker, Chart, TableData } from './Components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';
import { CardContent } from "@material-ui/core";

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData(""); // fetches the data of all countries
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country); // fetches data of a particular country
    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state; // destructuring of data
    return (
      <>
        <div className={styles.img}>
          <img className={styles.image} src={image} alt="COVID-19" />
        </div>
        <div className={styles.countryPicker}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>
        <div className={styles.container}>
          <Cards className={styles.left} data={data} />
          <CardContent>
            <TableData className={styles.right} />
          </CardContent>
        </div>
        <div className={styles.chart}>
          <Chart data={data} country={country} />
        </div>
      </>
    );
  }
}

export default App;