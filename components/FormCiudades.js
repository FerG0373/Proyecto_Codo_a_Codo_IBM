/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {getAllState} from '../Services/getDataCity';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormCiudades = ({provincias, setFormModal, formModal, setListOfCitys, listOfCitys}) => {
  const [provSelected, setProvSelected] = useState(null);
  const [citys, setcitys] = useState([]);
  const [error, setError] = useState(null);
  const [citySelected, setCitySelected] = useState(null);

  const getDataCall = async () => {
    getAllState(provSelected)
      .then(resp => {
        console.log(resp);
        setcitys(resp);
      })
      .catch(err => {
        console.log(err);
        setError(
          'Ocurrio un error al obtener la lista de ciudades, por favor intente nuevamente',
        );
      });
  };

  const storeData = async data => {
    try {
      await AsyncStorage.setItem('ciudades', data);
    } catch (e) {
      console.log(e);
    }
  };
  const guardarCiudad = async () => {
    let data = {
      nombre: '',
      latitud: '',
      longitud: '',
    };

    citys.filter(city => {
      if (city.id === citySelected) {
        data.nombre = city.nombre;
        data.latitud = city.centroide.lat;
        data.longitud = city.centroide.lon;
      }
    });
    const nuevaData = [...listOfCitys, data];
    setListOfCitys(nuevaData);
    storeData(JSON.stringify(nuevaData));

    setFormModal(!formModal);
  };
  return (
    <>
      <View style={styles.modalView}>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setFormModal(!formModal)}>
          <Text style={styles.textStyle}>X</Text>
        </Pressable>
        {error && <Text style={styles.msgErr}>{error}</Text>}
        <Text style={styles.label}>Provincias</Text>
        <Picker
          selectedValue={provSelected}
          onValueChange={value => setProvSelected(value)}
          onBlur={e => getDataCall()}
          itemStyle={{height: 120}}>
          <Picker.Item label="--Seleccione--" value="" />
          {provincias.map(prov => {
            return (
              <Picker.Item key={prov.id} label={prov.nombre} value={prov.id} />
            );
          })}
        </Picker>
        {citys && (
          <View>
            <Text style={styles.label}>Ciudades</Text>
            <Picker
              selectedValue={citySelected}
              onValueChange={value => setCitySelected(value)}
              onBlur={e => getDataCall()}
              itemStyle={{height: 120}}>
              <Picker.Item label="--Seleccione--" value="" />
              {citys.map(city => {
                return (
                  <Picker.Item
                    key={city.id}
                    label={city.nombre}
                    value={city.id}
                  />
                );
              })}
            </Picker>
            <TouchableHighlight
              style={styles.btnGuardar}
              onPress={() => guardarCiudad()}>
              <Text style={styles.txtBtn}>Guardar Ciudad</Text>
            </TouchableHighlight>
          </View>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  modalView: {
    margin: 10,
    backgroundColor: '#ffff',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
});
export default FormCiudades;
