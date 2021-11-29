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
import {Icon} from 'react-native-elements';

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
        <View>
          <Icon
            type="material-community"
            name={"trash-can-outline"} 
            size={50} color={"#6d5197"} 
            onPress={handleDelete}
            
          />
        </View>
        
      </View>
    </>
  );
};

/*<Pressable style={styles.btn} onPress={handleDelete}>
<Text style={styles.btnText}>Eliminar</Text>
</Pressable>*/

const styles = StyleSheet.create({
  item: {
    //backgroundColor: '#7A8FBE',
    borderRadius:20,
    width: '50%',
    height: 50,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems:"center",
    //backgroundColor:"#7A8FBE",
    borderRadius:40,
    borderColor:"#6d5197",
    borderWidth:2,
    margin:10
  },
  title: {
    color: '#6d5197',
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
  icon:{
    backgroundColor:"red",
    borderRadius:50
  },
});

export default ItemList;
