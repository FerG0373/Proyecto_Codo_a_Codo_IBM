import React, { useState } from "react";
import { View , Text, StyleSheet, ImageBackground } from "react-native";
import globalStyles from "../styles/globalStyles";

const Matias = () => {

    const imagen = require("../assets/img/fondo2.png");

    return(
        <>
        <ImageBackground source={imagen} resizeMode="cover" style={style.imagen}>
            <View>
                <Text style={globalStyles.titulo}> Matias Nicolas Rivero </Text>
                <Text style={globalStyles.parrafo}>Tengo 25 años, soy de CABA, Argentina. 
                Soy estudiante de la carrera de Sistemas de la Universidad Nacional de Lanús, 
                ya me encuentro a pocas materias para terminar. El año pasado fue mi primera vez
                cursando en Codo A Codo y mi primer curso fue el de Desarrollo Web
                Full Stack con Python.</Text>
            </View>
        </ImageBackground>
        </>
    );
};

const style = StyleSheet.create({
    descripcion: {
        marginTop: 70,
        fontSize: 20,
        paddingHorizontal: 15,
    },
    imagen:{
        flex: 1,
    },
});

export default Matias;