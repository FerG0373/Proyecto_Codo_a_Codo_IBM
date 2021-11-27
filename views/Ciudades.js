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
} from 'react-native';
import * as getDataState from '../Services/getDataState';
import FormCiudades from '../components/FormCiudades';
import TabComponent from '../components/TabComponent';

import Gradiente from '../components/Gradiente';

const Ciudades = ({navigation, route}) => {
  const volver = () => {
    navigation.navigate('Inicio');
  };
  const [formModal, setFormModal] = useState(false);
  const [provincias, setProvincias] = useState([]);

  const handleSearch = () => {};

  const getState = () => {
    getDataState
      .getAllState()
      .then(resp => {
        setProvincias(resp);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getState();
  }, []);

  return (
    <>
      <Gradiente colorGradiente={['#97A7B7', '#B98A90', '#745B83']} />
      <View style={styles.contenedor}>
        <View>
          <TextInput
            style={styles.search}
            onChangeText={text => handleSearch(text)}
          />
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

        <TabComponent />

        <Button
          title="ir a formulario"
          onPress={() => navigation.navigate('Formulario')}
        />
        <Button title="Volver" onPress={() => volver()} />
      </View>
    </>
  );
};

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
