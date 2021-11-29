import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Animated, Alert } from "react-native";


export default function Formulario ({ busqueda, guardarBusqueda, guardarConsultar }) {

    //destructuring al objeto
    const {ciudad} = busqueda;

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

    const mostrarAlerta = () => {
        Alert.alert(
            "Error",
            "Agrega una ciudad para la busqueda",
            [{ text: "entendido"}]
        )
    };

    const estiloAnimacion = {
        transform: [{ scale: animacionboton }]
    };

    return (
        <>
            <View style={styles.formulario}>
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

    }
});

