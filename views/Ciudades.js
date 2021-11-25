import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const Nosotros = ( {navigation, route} ) => {   
    
    const volver = () => {
        navigation.navigate('Inicio');
    };

    return (  
        <View style={styles.contenedor}>
            <Text> Mis Ciudades </Text>

            <Button
                title="ir a formulario"
                onPress={ () => navigation.navigate("Formulario") }
            />
            <Button
                title="Volver"
                onPress={ () => volver() }
            />
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
 
export default Nosotros;