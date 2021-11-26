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
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabComponent from '../components/TabComponent';

const Ciudades = ({navigation, route}) => {
  const volver = () => {
    navigation.navigate('Inicio');
  };
  const [formModal, setFormModal] = useState(false);
  const [provincias, setProvincias] = useState([]);
  const [listOfCitys, setListOfCitys] = useState([]);

  const handleSearch = () => {};

  const getState = () => {
    getDataState
      .getAllState()
      .then(resp => {
        setProvincias(resp);
      })
      .catch(err => console.log(err));
  };

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

  useEffect(() => {
    getState();
    getData();
  }, []);

  return (
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
            setListOfCitys={setListOfCitys}
            listOfCitys={listOfCitys}
          />
        </Modal>
      </View>
      <View>
        <TabComponent />
      </View>
      <Button
        title="ir a formulario"
        onPress={() => navigation.navigate('Formulario')}
      />
      <Button title="Volver" onPress={() => volver()} />
    </View>
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
