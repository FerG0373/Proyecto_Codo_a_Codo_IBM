/* eslint-disable prettier/prettier */
import {useContext, useEffect, useState} from 'react';
import ciudadesContext from '../context/ciudadesContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCities = () => {
  const [listOfCitys, setListOfCitys] = useContext(ciudadesContext);
  const [loading, setLoadig] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const valueStage = await AsyncStorage.getItem('ciudades');
        if (valueStage) {
          console.log(valueStage);

          setListOfCitys(JSON.parse(valueStage));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [setListOfCitys]);

  return {listOfCitys, setListOfCitys, loading};
};
