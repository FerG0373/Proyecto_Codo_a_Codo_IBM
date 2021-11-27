/* eslint-disable prettier/prettier */
import React from 'react';
import { CitiesContextProvider } from './context/ciudadesContext';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <>
      <CitiesContextProvider>
        <Navigation />
      </CitiesContextProvider>
    </>
  );
};

export default App;
