import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const Inicio = ({navigation}) => {
    
    const visitarNosotros = () => {
        navigation.navigate('Nosotros');
    };

    const visitarCiudades = () => {
        navigation.navigate('Ciudades');
    };

    return (  
        <View style={styles.contenedor}>
            <Text>Inicio</Text>
                     
        </View>
    );
};
 
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Inicio;