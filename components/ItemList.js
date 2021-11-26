/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useCities} from '../Hook/useCities';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {OW_API_KEY} from '../Settings/constants';

const ItemList = ({title, id}) => {
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [busqueda, setBusqueda] = useState({});
  const {listOfCitys} = useCities();
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log('Done.');
  };

  const navigation = useNavigation();

  const handlePress = () => {
    const dataCity = listOfCitys.filter(city => {
      return city.id === id;
    });
    setBusqueda(dataCity);
    setConsultar(true);
  };

  useEffect(() => {
    const consultarClima = async () => {
      let lat;
      let long;
      console.log(busqueda);
      if (consultar) {
        busqueda.forEach(element => {
          console.log(element);
          lat = element.latitud.toFixed(4);
          long = element.longitud.toFixed(4);
        });
        const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${OW_API_KEY}`;

        console.log(url);
        console.log('Por consultar');
        try {
          const respuesta = await fetch(url);
          console.log(respuesta);
          const resultadoConsulta = await respuesta.json();
          console.log(resultadoConsulta);
          setResultado(resultadoConsulta);
          setConsultar(false);

          navigation.navigate('Clima', {resultado});
        } catch (error) {
          console.log(error);
          //   mostrarAlerta();
        }
      }
    };

    consultarClima();
  }, [
    busqueda,
    busqueda.latitud,
    busqueda.longitud,
    consultar,
    navigation,
    resultado,
  ]);
  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.item} key={id}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#7A8FBE',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 26,
  },
  title: {
    color: '#ffff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    padding: 10,
  },
});

export default ItemList;
