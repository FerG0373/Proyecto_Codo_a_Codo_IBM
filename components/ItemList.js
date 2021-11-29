/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCities} from '../Hook/useCities';
import {getWeatherForName} from '../Services/getDataWhater';

const ItemList = ({title, id}) => {
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [busqueda, setBusqueda] = useState({});
  const {listOfCitys, eliminarDelStorage, setListOfCitys} = useCities();

  const navigation = useNavigation();

  const handlePress = () => {
    const dataCity = listOfCitys.find(city => {
      return city.id === id;
    });
    console.log(dataCity);
    setBusqueda(dataCity);
    setConsultar(true);
  };
  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultados, intenta con otra ciudad o pais', [
      {text: 'OK'},
    ]);
  };
  const handleDelete = () => {
    eliminarDelStorage(id);
  };

  useEffect(() => {
    const consultarClima = async () => {
      console.log(busqueda);
      if (consultar) {
        try {
          const respuesta = await getWeatherForName(busqueda.nombre);

          setResultado(respuesta);
          setConsultar(false);

          navigation.navigate('Clima', {resultado: respuesta});
        } catch (error) {
          console.log(error);
          mostrarAlerta();
        }
      }
    };

    consultarClima();
  }, [busqueda, consultar, navigation, resultado]);
  return (
    <>
      <View style={styles.itemContainer} key={id}>
        <TouchableOpacity style={styles.item} onPress={handlePress}>
          <View key={id}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableOpacity>
        <Pressable style={styles.btn} onPress={handleDelete}>
          <Text style={styles.btnText}>Eliminar</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#7A8FBE',
    width: '70%',
    height: 50,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  title: {
    color: '#ffff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    padding: 10,
  },
  btn: {
    width: 70,
    backgroundColor: 'red',
    height: 30,
    marginTop: 20,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 15,
    color: '#ffff',
    padding: 5,
    textAlign: 'center',
  },
});

export default ItemList;
