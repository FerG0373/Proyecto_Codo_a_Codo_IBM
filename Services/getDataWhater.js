/* eslint-disable prettier/prettier */
import {OW_API_KEY} from '../Settings/constants';

export const getWeatherForCoord = (lat, long) => {
  const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${OW_API_KEY}`;
  return fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => {
      console.log(err);
    });
};

export const getWeatherForName = value => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${value},AR&appid=${OW_API_KEY}&lang=es`;
  return fetch(url)
    .then(resp => resp.json())
    .then(data => data)
    .catch(err => {
      console.log(err);
    });
};
