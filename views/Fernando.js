import React, { useState } from "react";
import { View , Text, StyleSheet, ImageBackground } from "react-native";


const Fernando = () => {
    
    const imagen = require("../assets/img/fondo.png");

    return(
        <>
        <ImageBackground source={imagen} resizeMode="cover" style={style.imagen}>
            <View>
                <Text style={style.descripcion}>Mi nombre completo es Fernando Daniel González, tengo 28 años y soy de CABA, Argentina. Soy profesor de Educación Física pero desde chico siempre me gustó estar frente 
                    a un ordenador, por eso ahora estoy estudiando y conociendo este gigantesco y fascinante mundo del desarrollo de software. Empecé este año y mi primer curso fue el de Desarrollo Web
                    Full Stack de Codo a Codo, ahora cursando el de Desarrollo Mobile.</Text>
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

export default Fernando;