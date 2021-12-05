import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19'; // base url


//this function fetches the country wise data
export const fetchData = async (country) => {
  let changeableUrl = url;
  // if country != global
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  else {
    changeableUrl = `${url}/all`;
  }

  try {
    const { data: { cases, recovered, deaths, updated, active, population } } = await axios.get(changeableUrl);
    return { cases, recovered, deaths, updated, active, population };
  } catch (error) {
    return error;
  }
};

// this function fetches the country list
export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`https://covid19.mathdro.id/api/countries`);
    //console.log({countries});
    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
