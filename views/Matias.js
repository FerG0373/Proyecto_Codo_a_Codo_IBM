import React, { useState } from "react";
import { View , Text, StyleSheet, ImageBackground } from "react-native";
import globalStyles from "../styles/globalStyles";
import { Avatar } from 'react-native-elements';

const Matias = () => {

    const imagen = require("../assets/img/fondo.png");

    return(
        <>
        <ImageBackground source={imagen} resizeMode="cover" style={styles.imagen}>
            <View>
                <View style={styles.avatar}>
                    <Avatar
                        size="xlarge"
                        rounded
                        title="MR"
                        containerStyle={{backgroundColor:"blue"}}
                    /> 
                </View>
                
                <Text style={globalStyles.titulo}> Descripcion </Text>
                <Text style={globalStyles.parrafo}>Hola! Mi nombre completo es Matias Nicolas Rivero, tengo 25 años, soy de CABA, Argentina. 
                Soy estudiante de la carrera de Sistemas de la Universidad Nacional de Lanús, 
                ya me encuentro a pocas materias para terminar. El año pasado fue mi primera vez
                cursando en Codo A Codo y mi primer curso fue el de Desarrollo Web
                Full Stack con Python.</Text>
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
    imagen:{
        flex: 1,
    },
    avatar:{
        alignItems:"center",
        marginTop:30,
        marginBottom:10
    }
});

export default Matias;