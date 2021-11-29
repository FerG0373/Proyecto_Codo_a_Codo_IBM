import React, { useState } from "react";
import { View , Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import globalStyles from "../styles/globalStyles";
import { Avatar } from 'react-native-elements';

const Fernando = () => {
    
    const imagen = require("../assets/img/fondo.png");

    return(
        <>
        <ImageBackground source={imagen} resizeMode="cover" style={styles.imagen}>
            <ScrollView>
                <View style={styles.avatar}>
                    <Avatar
                        size="xlarge"
                        rounded
                        title="FG"
                        containerStyle={{backgroundColor:"green"}}
                    /> 
                </View>
                
                <Text style={globalStyles.titulo}> Descripcion </Text>
                <Text style={globalStyles.parrafo}>Mi nombre completo es Fernando Daniel González, tengo 28 años y soy de CABA, Argentina. Soy profesor de Educación Física pero desde chico siempre me gustó estar frente 
                    a un ordenador, por eso ahora estoy estudiando y conociendo este gigantesco y fascinante mundo del desarrollo de software. Empecé este año y mi primer curso fue el de Desarrollo Web
                    Full Stack de Codo a Codo, ahora cursando el de Desarrollo Mobile.</Text>
            </ScrollView>
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

export default Fernando;