import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Formulario from './components/Formulario';
import Clima from './components/Clima';

export default function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: "La Plata",
  });

  //destructuring
  const {ciudad} = busqueda;

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [bgcolor, guardarBgcolor] = useState("rgb(71, 149, 212)")

  /* se encarga de realizar la consulta a la API de OpenWeather y cambia el color segun un rango de clima */
  useEffect(() => {
    const consultarClima = async () => {
      if(consultar){
        const appID = "98c952d01df3371d7181edcf959ae344";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},AR&appid=${appID}&lang=es`;
        console.log("Por consultar");
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          console.log(resultado);
          guardarResultado(resultado);
          guardarConsultar(false);

          //modificar los colores de fondo segun la temperatura
          const kelvin = 273.15;
          const {main} = resultado;
          const actual = main.temp - kelvin;

          if(actual<10){
            guardarBgcolor("rgb(105, 108, 149)");
          }else if(actual >= 10 && actual < 25){
            guardarBgcolor("rgb(71, 149, 212)");
          } else{
            guardarBgcolor("rgb(178, 28, 61)");
          }

        } catch (error) {
          mostrarAlerta();
        }
      }
    };

    consultarClima();
    
  }, [consultar]);

  const mostrarAlerta = () => {
    Alert.alert(
        "Error",
        "No hay resultados, intenta con otra ciudad o pais",
        [{ text: "OK"}]
    )
  };

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  const bgColorApp = {
    backgroundColor: bgcolor,
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={ () => ocultarTeclado() }>
        <View style={[styles.app, bgColorApp]}>
          <View style={styles.contenido}>
            <Clima
              resultado={resultado}
            />
            <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />

          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
    
  );
}

const styles = StyleSheet.create({
  app:{
    flex: 1,
    justifyContent: 'center',
  },
  contenido: {
    marginHorizontal: "2.5%",
   
  },
});
