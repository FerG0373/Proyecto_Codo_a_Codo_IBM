/* eslint-disable prettier/prettier */
export const getAllState = value => {
  return fetch(
    `https://apis.datos.gob.ar/georef/api/municipios?provincia=${value}&max=100`,
  )
    .then(response => response.json())
    .then(data => {
      const {municipios} = data;
      return municipios;
    });
};
