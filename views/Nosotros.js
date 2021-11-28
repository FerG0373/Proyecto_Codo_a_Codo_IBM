import React from 'react';
import { Text, StyleSheet, View, Button, TouchableHighlight, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';

import globalStyles from '../styles/globalStyles';
import Gradiente from '../components/Gradiente';

const Nosotros = ( {navigation, route} ) => {

    const volver = () => {
        navigation.navigate('Inicio');
    };

    return (  
        <>
            <Gradiente
                colorGradiente={['#97A7B7', '#B98A90', '#745B83']}
            />
            <View style={styles.contenedor}>
                <Text style={globalStyles.titulo}>Solucion</Text>
                <Text style={globalStyles.parrafo}>Aca va la solucion que implementamos en la aplicacion</Text>

                <Text style={globalStyles.titulo}>Quienes somos</Text>
                <Text style={globalStyles.parrafo}>Aca va quienes somos</Text>

                <View style={{height:150}}>
                    <ScrollView horizontal>
                        <View style={styles.nosotros}>
                            <Avatar
                                size="large"
                                rounded
                                title="VA"
                                containerStyle={{backgroundColor:"red"}}
                                //source={require("../assets/img/clima/cloud-moon.png")} 
                            /> 
                            <Text>Vanina</Text>
                            <Text>Eliana</Text>
                            <Text>Armida</Text>
                    </View>
                    <View style={styles.nosotros}>
                            <Avatar
                                size="large"
                                rounded
                                title="FG"
                                containerStyle={{backgroundColor:"green"}}
                            /> 
                            <Text>Fernando</Text>
                            <Text>Daniel</Text>
                            <Text>González</Text>
                    </View>
                    <View style={styles.nosotros}>
                            <Avatar
                                size="large"
                                rounded
                                title="MR"
                                containerStyle={{backgroundColor:"blue"}}
                            /> 
                            <Text>Matias</Text>
                            <Text>Nicolas</Text>
                            <Text>Rivero</Text> 
                    </View>
                    </ScrollView>
                </View>
                
 
                <Text style={globalStyles.titulo}>Documentacion UX</Text>
                <Text style={globalStyles.parrafo}>Aca va la documentacion UX</Text>     
                
                <View>
                    <TouchableHighlight onPress={ () => volver() } style={styles.btn}>
                        <Text style={styles.textoSubmit}>Volver</Text>
                    </TouchableHighlight>
                </View>
            </View>
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
        backgroundColor:"#1f2366",
        padding: 12,
        width:150,
        marginVertical: 10,
    },
    textoSubmit: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
    },
    nosotros:{
        marginHorizontal: 15,
        alignItems:"center",
        //height:140
    }
});
 
export default Nosotros;