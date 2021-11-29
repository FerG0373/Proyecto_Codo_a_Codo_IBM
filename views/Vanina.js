/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {Avatar} from 'react-native-elements';

const Vanina = () => {
  const imagen = require('../assets/img/fondo2.png');

  return (
    <>
      <ImageBackground source={imagen} resizeMode="cover" style={styles.imagen}>
        <View>
          <View style={styles.avatar}>
            <Avatar
              size="xlarge"
              rounded
              title="VA"
              containerStyle={{backgroundColor: 'red'}}
            />
          </View>

          <Text style={globalStyles.titulo}> Descripcion </Text>
          <Text style={globalStyles.parrafo}>
            Hola! Mi nombre completo es Vanina Armida, tengo 35 años, soy de
            Córdoba, Argentina. Soy estudiante Desarrolladora web FullStack
            Junior, arranqué en este mundo primero estudiando de forma
            autodidacta y después complementado con cursos como el de Desarrollo
            web FullStack PHP en Codo a Codo. Desde finales del 2020 estoy
            trabajando como freelance con tecnologías como React Y Node y
            también en relación de dependencia trabajando como Desarrolladora
            web PHP
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  descripcion: {
    marginTop: 70,
    fontSize: 20,
    paddingHorizontal: 15,
  },
  imagen: {
    flex: 1,
  },
  avatar: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
});

export default Vanina;
