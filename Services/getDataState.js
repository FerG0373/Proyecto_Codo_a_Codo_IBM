/* eslint-disable prettier/prettier */
export const getAllState = () => {
  return fetch(
    'https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre',
  )
    .then(response => response.json())
    .then(data => {
      const {provincias} = data;
      return provincias;
    });
};
