import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableHighlight, ScrollView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { Avatar } from 'react-native-elements';

import globalStyles from '../styles/globalStyles';


const Nosotros = ( {navigation, route} ) => {

    const [press, guardarPress] = useState(false);
    

    const volver = () => {
        navigation.navigate('Inicio');
    };

    const imagen = require("../assets/img/fondo.png");


    return (  
        <>
            <ImageBackground source={imagen} resizeMode="cover" style={styles.imagen}>
                <View style={styles.contenedor}>
                    <Text style={globalStyles.titulo}>Solución</Text>
                    <Text style={globalStyles.parrafo}>Acá va la solución que implementamos en la aplicación</Text>

                    <Text style={globalStyles.titulo}>¿Quiénes somos?</Text>
                    <Text style={globalStyles.parrafo}>Acá va quienes somos</Text>

                <View style={{height:150}}>
                    <ScrollView horizontal>
                        <TouchableWithoutFeedback onPress={ () => navigation.navigate('Vanina')}>
                            <View  style={styles.nosotros}>
                                <Avatar
                                    size="large"
                                    rounded
                                    title="VA"
                                    containerStyle={{backgroundColor:"red"}}
                                /> 
                                <Text style={{color:"black", textAlign:"center"}}>Vanina{"\n"}Eliana{"\n"}Armida</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={ () => navigation.navigate('Fernando')}>
                            <View  style={styles.nosotros}>
                                <Avatar
                                    size="large"
                                    rounded
                                    title="FG"
                                    containerStyle={{backgroundColor:"green"}}
                                /> 
                                <Text style={{color:"black", textAlign:"center"}}>Fernando{"\n"}Daniel{"\n"}González</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={ () => navigation.navigate('Matias')}>
                            <View style={styles.nosotros}>
                                <Avatar
                                    size="large"
                                    rounded
                                    title="MR"
                                    containerStyle={{backgroundColor:"blue"}}
                                /> 
                                <Text style={{color:"black", textAlign:"center"}}>Matías{"\n"}Nicolás{"\n"}Rivero</Text> 
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </View>
                
 
                <Text style={globalStyles.titulo}>Documentación UX</Text>
                <Text style={globalStyles.parrafo}>Aca va la documentacion UX</Text>     
                
                <View>
                    <TouchableHighlight 
                        onPress={ () => volver() } 
                        onPressIn={ () => guardarPress(true) } 
                        onPressOut={ () => guardarPress(false) } 
                        style={styles.btn}
                        underlayColor="#6d5197"
                    >
                        <Text style={[styles.textoSubmit, press? styles.colorTextoBtnPress: styles.colorTextoBtnNormal]}>Volver</Text>
                    </TouchableHighlight>
                </View>
            </View>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop:30,

    },
    btn:{
        //backgroundColor:"#1f2366",
        padding: 12,
        width:150,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6d5197',
        backgroundColor: "transparent"
    },
    textoSubmit: {
        fontWeight: "bold",
        textAlign: "center",
    },
    colorTextoBtnNormal:{
        color: "#6d5197",
    },
    colorTextoBtnPress:{
        color: "white",
    },
    nosotros:{
        marginHorizontal: 15,
        alignItems:"center",
        //height:140
    },
    imagen:{
        flex: 1,
        justifyContent: "center"
    }
});
 
export default Nosotros;

//<Gradiente colorGradiente={['#97A7B7', '#B98A90', '#745B83']} />