/* eslint-disable prettier/prettier */
import {CITY_URL} from '../Settings/constants';

export const getAllState = value => {
  return fetch(`${CITY_URL}/municipios?provincia=${value}&max=100`)
    .then(response => response.json())
    .then(data => {
      const {municipios} = data;
      return municipios;
    });
};
