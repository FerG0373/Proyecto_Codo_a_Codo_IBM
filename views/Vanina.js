import React, { useState } from "react";
import { View , Text, StyleSheet, ImageBackground } from "react-native";


const Vanina = () => {

    const imagen = require("../assets/img/fondo2.png");

    return(
        <>
        <ImageBackground source={imagen} resizeMode="cover" style={style.imagen}>
            <View>
                <Text style={style.descripcion}>Descripción</Text>
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

export default Vanina;