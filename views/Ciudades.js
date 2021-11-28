/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Modal,
  Button,
  Alert,
} from 'react-native';
import * as getDataState from '../Services/getDataState';
import FormCiudades from '../components/FormCiudades';
import TabComponent from '../components/TabComponent';
import {SearchBar} from 'react-native-elements';
import {useCities} from '../Hook/useCities';

import Gradiente from '../components/Gradiente';

const Ciudades = ({navigation, route}) => {
  const volver = () => {
    navigation.navigate('Inicio');
  };
  const [formModal, setFormModal] = useState(false);
  const [provincias, setProvincias] = useState([]);
  const [search, setSearch] = useState(null);
  // const {listOfCitys}= useCities()

  const getState = () => {
    getDataState
      .getAllState()
      .then(resp => {
        setProvincias(resp);
      })
      .catch(err => console.log(err));
  };
  // const updateSearch = () => console.log(search);

  useEffect(() => {
    getState();
  }, []);

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'No hay resultados, la ciudad que buscas no se encuentra en el listado',
      [{text: 'OK '}],
    );
  };

  return (
    <>
      <Gradiente colorGradiente={['#97A7B7', '#B98A90', '#745B83']} />
      <View style={styles.contenedor}>
        <View>
          {/* <SearchBar
            lightTheme
            placeholder="Buscar Ciudad"
            onChangeText={updateSearch}
            value={search}
          /> */}
        </View>
        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => setFormModal(true)}>
            <Text style={styles.textBotton}>Añadir ciudad</Text>
          </TouchableHighlight>
          <Modal
            animationType="slide"
            transparent={true}
            visible={formModal}
            onRequestClose={() => {
              //   Alert.alert('Modal has been closed.');
              setFormModal(!formModal);
            }}>
            <FormCiudades
              provincias={provincias}
              setFormModal={setFormModal}
              formModal={formModal}
            />
          </Modal>
        </View>

        <Button title="Form" onPress={() => navigation.navigate("Formulario")} />

        <Button title="Volver" onPress={() => volver()} />
      </View>
    </>
  );
};
// <TabComponent  /> linea 86

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  search: {
    height: 40,
    borderWidth: 1,
    borderColor: '#cecece',
    marginBottom: 10,
    marginHorizontal: 30,
    marginTop: 30,
  },
  button: {
    height: 40,
    backgroundColor: '#1f2366',
    marginLeft: 150,
    marginRight: 10,
    marginVertical: 10,
  },
  textBotton: {
    color: '#ffff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    padding: 10,
  },
});

export default Ciudades;
