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
  ImageBackground,
  Dimensions
} from 'react-native';
import * as getDataState from '../Services/getDataState';
import FormCiudades from '../components/FormCiudades';
import TabComponent from '../components/TabComponent';

import { Overlay } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const Ciudades = ({navigation, route}) => {

  const [pressVolver, guardarPressVolver] = useState(false);
  const [pressAñadir, guardarPressAñadir] = useState(false);

  const imagen = require("../assets/img/fondo.png");
  
  const volver = () => {
    navigation.navigate('Inicio');
  };
  const [formModal, setFormModal] = useState(false);
  const [provincias, setProvincias] = useState([]);

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
      <ImageBackground source={imagen} resizeMode="cover" style={styles.imagen}>
        <View style={styles.contenedor}>
          <View>
            <SearchBar
              lightTheme
              placeholder="Buscar Ciudad"
              onChangeText={text => updateSearch(text)}
              value={search}
              inputStyle={{color:"black"}}
              round
              //containerStyle={{backgroundColor: 'transparent',borderWidth:0}}
            />
            
          </View>
          <View style={{alignItems:"center"}}>
            <TouchableHighlight
              //style={styles.button}
              onPress={() => setFormModal(true)}
              onPressIn={ () => guardarPressAñadir(true) } 
              onPressOut={ () => guardarPressAñadir(false) } 
              style={styles.btn}
              underlayColor="#6d5197">
              <Text style={[styles.textoSubmit, pressAñadir? styles.colorTextoBtnPress: styles.colorTextoBtnNormal]}>Añadir ciudad</Text>
            </TouchableHighlight>
            <KeyboardAwareScrollView>
              <Overlay 
                isVisible={formModal}
                transparent={true}
                windowBackgroudColor="rgba(0,0,0,0.5)"
                overlayBackgroudColor="transparent"
                animationType="fade"
                overlayStyle={styles.overlay}
                backdrop
                onRequestClose={() => {
                  //   Alert.alert('Modal has been closed.');
                  setFormModal(!formModal);
                }}
              >
                <FormCiudades
                  provincias={provincias}
                  setFormModal={setFormModal}
                  formModal={formModal}
                />
                
              </Overlay>
            </KeyboardAwareScrollView>
            

            
            
          </View>

          <TabComponent  />
          
          <View style={{alignItems:"center"}}>
            <TouchableHighlight 
              onPress={ () => volver() } 
              onPressIn={ () => guardarPressVolver(true) } 
              onPressOut={ () => guardarPressVolver(false) } 
              style={styles.btn}
              underlayColor="#6d5197"
            >
              <Text style={[styles.textoSubmit, pressVolver? styles.colorTextoBtnPress: styles.colorTextoBtnNormal]}>Volver</Text>
            </TouchableHighlight>
          </View>
          
        </View>
      </ImageBackground>
      
      
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
  imagen:{
    flex:1
  },
  overlay: {
    height: (Dimensions.get('window').height)/2,
    width: Dimensions.get('window').width-20,
    backgroudColor: "#fff",
    borderColor: "#6d5197",
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    elevation: 5,
},

});

export default Ciudades;
