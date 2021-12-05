import React, { useState, useEffect } from "react";
import styles from './TableData.module.css';
import { sortData } from '../util';
import CountUp from 'react-countup';

const TableData = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // const countries = data.map((country) => ({
          //   name: country.country,
          //   value: country.countryInfo.iso2,
          // }));

          const sortedData = sortData(data);
          setTableData(sortedData);
        });
    };
    getCountriesData();
  }, [])
  return (
    <>
    <h3>Confirmed Cases by Country</h3>
    <div className={styles.table}>
      {tableData.map(({ country, cases, countryInfo }) => (
        <tr>
          <td> <img alt="flag" src={countryInfo.flag} /> {country} </td>
          <td>
            <strong><CountUp start={0} end={cases} duration={2.75} separator="," /></strong> 
          </td>
        </tr>
      ))}
    </div>
    </>
  );
}

export default TableData;
