import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Animated, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Formulario () {

    const navigation = useNavigation();

    const [busqueda, guardarBusqueda] = useState({
        ciudad: "La Plata",
      });
    
      //destructuring al objeto
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
              const resultadoConsulta = await respuesta.json();
              console.log(resultadoConsulta);
              guardarResultado(resultadoConsulta);
              guardarConsultar(false);
    
              //modificar los colores de fondo segun la temperatura
              const kelvin = 273.15;
              const {main} = resultadoConsulta;
              const actual = main.temp - kelvin;
    
              if(actual<10){
                guardarBgcolor("rgb(105, 108, 149)");
              }else if(actual >= 10 && actual < 25){
                guardarBgcolor("rgb(71, 149, 212)");
              } else{
                guardarBgcolor("rgb(178, 28, 61)");
              }
            
              /* 1. Navigate to the Details route with params */
                navigation.navigate('Clima', {resultado: resultadoConsulta});
    
            } catch (error) {
                console.log(error);
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

    

    
    

    //no se actualiza con la funcion sino con la Api de animated
    //ES VALOR 1 para este ejemplo es la escala, e tamaño actual en el que esta
    const [animacionboton] = useState(new Animated.Value(1))

    const animacionEntrada = () => {
        Animated.spring( animacionboton, {
            toValue: .9,
            useNativeDriver: true,
        }).start();
    };

    const animacionSalida = () => {
        Animated.spring( animacionboton, {
            toValue: 1,
            friction: 4,// rebote
            tension: 30, //mientras mas bajo el movimiento es menos rigida
            useNativeDriver: true,
        }).start();
    };

    const consultarClima = () => {
        if(ciudad.trim() === ""){
            mostrarAlerta();
            return;
        }
        //consultar API
        guardarConsultar(true);
    };

    /*const mostrarAlerta = () => {
        Alert.alert(
            "Error",
            "Agrega una ciudad para la busqueda",
            [{ text: "entendido"}]
        )
    };*/

    const estiloAnimacion = {
        transform: [{ scale: animacionboton }]
    };

    return (
        <>
            <View style={[styles.formulario, bgColorApp]}>
                <View>
                    <TextInput
                        value={ciudad}
                        style={styles.imput}
                        onChangeText={ ciudad => guardarBusqueda({...busqueda, ciudad}) } //va a leer lo que se escriba
                        placeholder="Ciudad"
                        placeholderTextColor="#666"
                    />
                </View>
                
                <TouchableWithoutFeedback
                    onPressIn={ () => animacionEntrada() }
                    onPressOut={ () => animacionSalida() }
                    onPress={ () => consultarClima() }
                >
                    <Animated.View
                        style={[styles.btnBuscar, estiloAnimacion]}
                    >
                        <Text style={styles.textoBuscar}>Buscar Clima</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
                
            </View>
        </>
        
    );
};

const styles = StyleSheet.create({
    imput: {
        padding:10,
        height: 50,
        backgroundColor: "#FFF",
        color:"#000",
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
    },
    btnBuscar: {
        marginTop: 50,
        backgroundColor: "#000",
        padding: 10,
        justifyContent: "center",
    },
    textoBuscar: {
        color: "#FFF",
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: 18,
    },
    formulario: {
        flex:1,
        alignContent:"center",
        justifyContent:"center",
    }
});

