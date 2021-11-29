/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {getAllState} from '../Services/getDataCity';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCities} from '../Hook/useCities';
import {TextInput} from 'react-native-gesture-handler';
import {getWeatherForName} from '../Services/getDataWhater';
import {Icon} from 'react-native-elements';

const FormCiudades = ({provincias, setFormModal, formModal}) => {

  const [provSelected, setProvSelected] = useState(null);
  const [city, setCity] = useState();
  const [error, setError] = useState(null);
  const {listOfCitys, setListOfCitys, storeData} = useCities();

  const [pressGuardar, guardarPressGuardar] = useState(false);

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultados, intenta con otra ciudad o país', [
      {text: 'OK '},
    ]);
  };

  const guardarCiudad = async () => {
    try {
      const respuesta = await getWeatherForName(city);
      if (respuesta) {
        const {id, name} = respuesta;
        const {lon, lat} = respuesta.coord;
        const provincia = provincias.filter(prov => prov.id === provSelected);
        const {nombre} = provincia;

        let data = {
          id: id,
          nombre: name,
          latitud: lat,
          longitud: lon,
          provincia: nombre,
        };
        const nuevaData = [...listOfCitys, data];
        setListOfCitys(nuevaData);
        storeData(JSON.stringify(nuevaData));

        setFormModal(!formModal);
      }
    } catch (err) {
      mostrarAlerta();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
      <View style={styles.modalView}>
        <View style={{marginStart: 270}}>
          <Icon 
            type="material-community"
            name={"close-thick"} 
            size={22} color={"black"} 
            onPress={() => setFormModal(!formModal)}
          />
        </View>
      
        {error && <Text style={styles.msgErr}>{error}</Text>}
        <Text style={styles.label}>Provincias</Text>
        <Picker
          selectedValue={provSelected}
          onValueChange={value => setProvSelected(value)}
          itemStyle={{height: 120}}>
          <Picker.Item label="--Seleccione--" value="" />
          {provincias.map(prov => {
            return (
              <Picker.Item key={prov.id} label={prov.nombre} value={prov.id} />
            );
          })}
        </Picker>
        <View>
          <Text style={styles.label}>Ciudades</Text>
          <TextInput
            value={city}
            style={styles.input}
            onChangeText={ciudad => setCity(ciudad)}
            placeholder="Ciudad"
            placeholderTextColor="#666"
          />
        </View>

        <View style={{alignItems:"center"}}>
          <TouchableHighlight 
            onPress={ () => guardarCiudad() } 
            onPressIn={ () => guardarPressGuardar(true) } 
            onPressOut={ () => guardarPressGuardar(false) } 
            style={styles.btn}
            underlayColor="#6d5197"
          >
            <Text style={[styles.textoSubmit, pressGuardar? styles.colorTextoBtnPress: styles.colorTextoBtnNormal]}>Guardar Ciudad</Text>
          </TouchableHighlight>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  modalView: {
    //marginTop:"45%",
    //margin: 10,
    //backgroundColor: '#ffff',
    //borderRadius: 20,
    padding: 10,
    /*shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,*/
  },
  label: {
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },
  msgErr: {
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
    color: '#FF0000',
  },
  btnGuardar: {
    backgroundColor: '#1f2366',
    padding: 10,
    margin: 20,
  },
  txtBtn: {
    color: '#ffff',
    fontFamily: 'Lato-black',
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 50,
    marginStart: 270,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn:{
    //backgroundColor:"#1f2366",
    padding: 12,
    width:150,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6d5197',
    backgroundColor: "transparent"
  },
  textoSubmit: {
      fontWeight: "bold",
      textAlign: "center",
  },
  colorTextoBtnNormal:{
      color: "#6d5197",
  },
  colorTextoBtnPress:{
      color: "white",
  },
});
export default FormCiudades;
