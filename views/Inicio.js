import React from 'react';
import { Text, StyleSheet, View, Button, Dimensions, ImageBackground } from 'react-native';
import globalStyles from '../styles/globalStyles';
import Gradiente from '../components/Gradiente';

const Inicio = ({navigation}) => {
    
    const imagen = require("../assets/img/fondo2.png");
    
    const visitarNosotros = () => {
        navigation.navigate('Nosotros');
    };

    const visitarCiudades = () => {
        navigation.navigate('Ciudades');
    };

    return (  
        <>  
        <ImageBackground source={imagen} resizeMode="cover" style={styles.imagen}>
            <View style={styles.contenedor}>
                <Text style={styles.nombreAplicacion}>App Clima</Text>
                <Text style={[globalStyles.titulo]}>Descripcion</Text>
                <Text style={[globalStyles.parrafo]}>Aca va la descripcion de la aplicacion</Text>
                <Text style={[globalStyles.parrafo]}>Usando Poppins: Esta aplicacion se encarga de mostrar el clima actual de las ciudades que elijas</Text>
                <Text style={[globalStyles.titulo]}>Uso</Text>
                <Text style={globalStyles.parrafo}>Sin poppins: Aca va como se usa la aplicacion</Text>                       
            </View>
        </ImageBackground> 
            
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
    imagen:{
        flex:1
    }

    
});

export default Inicio;