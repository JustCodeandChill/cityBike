import axios from 'axios'; 
import _ from 'lodash';
const getNetworkData = async () => {
    const data = await axios.get('http://api.citybik.es/v2/networks');
    return data.data.networks;
}

export const getAvailableCities = async () => {
    const network = await getNetworkData();

    const cities = _.map(network, (data) => {
        return data.location.city;
    })
    const ucities = _.uniq(cities)
    // console.log('ucities', ucities)
    return ucities;
}

export const getAvailableCountries = async () => {
    const network = await getNetworkData();

    const coutries = _.map(network, (data) => {
        return data.location.country;
    })
    const ucountries = _.uniq(coutries)
    return ucountries;
}