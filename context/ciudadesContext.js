/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';
const Context = createContext({});

export const CitiesContextProvider = ({children}) => {
  const [listOfCitys, setListOfCitys] = useState([]);
  return (
    <Context.Provider value={[listOfCitys, setListOfCitys]}>
      {children}
    </Context.Provider>
  );
};

export default Context;
