import axios from "axios";
import _ from "lodash";
import { getNetworkData } from "./common";

export const getStationIdThatMatchCountryAndCitySearch = async (
  country = "",
  city = ""
) => {
  let data = await generateStationIdWithCountryandCitySpecifically();
  let matches = [];

  _.map(data, (d) => {
    if (
      d.country.toLowerCase() === country.toLowerCase() &&
      d.city.toLowerCase() === city.toLowerCase()
    ) {
      matches.push(d);
    }
  });
  let id = [];
  _.map(matches, (match) => {
    id.push(match.id);
  });
  return id;
};

export const getStationIdThatMatchCountrySearch = async (country = "") => {
  let data = await generateStationIdWithCountryandCitySpecifically();
  let matches = [];

  _.map(data, (d) => {
    if (d.country.toLowerCase() === country.toLowerCase()) {
      matches.push(d);
    }
  });
  let id = [];
  _.map(matches, (match) => {
    id.push(match.id);
  });
  return id;
};

export const getStationIdThatMatchCitySearch = async (city = "") => {
  let data = await generateStationIdWithCountryandCitySpecifically();
  let matches = [];

  _.map(data, (d) => {
    if (d.city.toLowerCase() === city.toLowerCase()) {
      matches.push(d);
    }
  });
  let id = [];
  _.map(matches, (match) => {
    id.push(match.id);
  });
  return id;
};
export const generateStationIdWithLocation = async () => {
  const network = await getNetworkData();
  let stationIdWithLocation = [];
  _.map(network, ({ id, location }) => {
    stationIdWithLocation.push({ id, location });
  });

  return stationIdWithLocation;
};

export const generateStationIdWithCountryandCitySpecifically = async () => {
  const network = await getNetworkData();
  let stationIdWithCountryandCity = [];
  _.map(network, ({ id, location }) => {
    stationIdWithCountryandCity.push({
      id,
      country: location.country,
      city: location.city,
    });
  });

  return stationIdWithCountryandCity;
};
