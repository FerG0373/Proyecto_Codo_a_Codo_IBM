import React, { useState } from "react";
import { View , Text, StyleSheet, ImageBackground } from "react-native";
import globalStyles from "../styles/globalStyles";
import { Avatar } from 'react-native-elements';

const Vanina = () => {

    const imagen = require("../assets/img/fondo2.png");

    return(
        <>
        <ImageBackground source={imagen} resizeMode="cover" style={styles.imagen}>
            <View>
                <View style={styles.avatar}>
                    <Avatar
                        size="xlarge"
                        rounded
                        title="VA"
                        containerStyle={{backgroundColor:"red"}}
                    /> 
                </View>
                
                <Text style={globalStyles.titulo}> Descripcion </Text>
                <Text style={globalStyles.parrafo}>tu descripcion...</Text>
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

export default Vanina;