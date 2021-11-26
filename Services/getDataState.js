/* eslint-disable prettier/prettier */
import { CITY_URL } from '../Settings/constants'

export const getAllState = () => {
  return fetch(
    `${CITY_URL}/provincias?campos=id,nombre`
  )
    .then(response => response.json())
    .then(data => {
      const {provincias} = data;
      return provincias;
    });
};
