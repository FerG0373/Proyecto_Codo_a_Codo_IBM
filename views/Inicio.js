import React from 'react';
import { Text, StyleSheet, View, Button, Dimensions } from 'react-native';
import globalStyles from '../styles/globalStyles';


const Inicio = ({navigation}) => {
    
    const visitarNosotros = () => {
        navigation.navigate('Nosotros');
    };

    const visitarCiudades = () => {
        navigation.navigate('Ciudades');
    };

    return (  
        <>    
            <View style={styles.contenedor}>
                <Text style={styles.nombreAplicacion}>App Clima</Text>
                <Text style={[globalStyles.titulo]}>Descripcion</Text>
                <Text style={[globalStyles.parrafo]}>Aca va la descripcion de la aplicacion</Text>
                <Text style={[globalStyles.parrafo]}>Usando Poppins: Esta aplicacion se encarga de mostrar el clima actual de las ciudades que elijas</Text>
                <Text style={[globalStyles.titulo]}>Uso</Text>
                <Text style={globalStyles.parrafo}>Sin poppins: Aca va como se usa la aplicacion</Text>                       
            </View>
        </>
    );
    
};
 
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
    },
    nombreAplicacion:{
        fontSize:30,
        marginTop:50,
        marginBottom:50
    },
    
});

export default Inicio;