import React from 'react';
import { Text, StyleSheet, View, Button, TouchableHighlight } from 'react-native';
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
                
                   <View>
                        <Avatar
                            rounded
                            title="VA"
                        /> 
                        <Text style={globalStyles.parrafo}>Vanina Eliana Armida </Text>
                   </View>
                   <View>
                        <Avatar
                            rounded
                            title="FG"
                        /> 
                        <Text style={globalStyles.parrafo}>Fernando Daniel González</Text>
                   </View>
                   <View>
                        <Avatar
                            rounded
                            title="MR"
                        /> 
                        <Text style={globalStyles.parrafo}>Matias Nicolas Rivero</Text> 
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
    }
});
 
export default Nosotros;