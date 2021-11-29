/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';
const Context = createContext({});

export const CitiesContextProvider = ({children}) => {
  const [listOfCitys, setListOfCitys] = useState([]);
  const [singleCity, setSingleCity] = useState([]);
  
  return (
    <Context.Provider value={[listOfCitys, setListOfCitys,singleCity, setSingleCity]}>
      {children}
    </Context.Provider>
  );
};

export default Context;
