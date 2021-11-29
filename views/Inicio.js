import React from 'react';
import { Text, StyleSheet, View, Button, Dimensions, ImageBackground, ScrollView } from 'react-native';
import globalStyles from '../styles/globalStyles';
import Gradiente from '../components/Gradiente';

const Inicio = ({navigation}) => {
    
    const imagen = require("../assets/img/fondo.png");

    const visitarNosotros = () => {
        navigation.navigate('Nosotros');
    };

    const visitarCiudades = () => {
        navigation.navigate('Ciudades');
    };

    return (  
        <>  
        <ImageBackground source={imagen} resizeMode="cover" style={styles.imagen}>
            <ScrollView style={styles.contenedor}>
                <Text style={styles.nombreAplicacion}>Wheather app {"\n"} Argentina</Text>
                <Text style={[globalStyles.titulo]}>Descripcion</Text>
                <Text style={[globalStyles.parrafo]}>Nuestra aplicacion se encarga de mostrar el clima actual de las ciudades que elijas
                de Argentina, consulta con la API de OpenWeather y te muestra la temperatura actual, la temperatura maxima y la minima,
                 junto con la humedad. Se puede agregar ciudades nuevas a tu lista como tambien se tiene la opcion de visualizar las
                 ciudades en un mapa. </Text>
                <Text style={[globalStyles.titulo]}>Uso</Text>
                <Text style={globalStyles.parrafo}>
                    En la pestaña de ciudades se encuentra la lista de ciudades mas un buscardor que permite 
                    filtrar las ciudades de la lista. Tambien hay un boton de Agregar Ciudad que te permite agregar una nueva ciudad a la lista 
                    de las ciudades propias. Luego cuando se selecciona una ciudad de la lista te muestra el clima actual en esa ciudad. 
                </Text>
                <Text style={globalStyles.parrafo}>
                    En la pestaña de nosotros, se encuentra una descripcion de la solucion junto con los integrantes del grupo, y links a la 
                    documentacion UX que se utilizo para el desarrollo de la aplicacion. 
                </Text>                      
            </ScrollView>
        </ImageBackground> 
            
        </>
    );
    
};
 
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        
    },
    nombreAplicacion:{
        fontSize:28,
        marginTop:70,
        marginBottom:20,
        fontFamily:"Poppins-Black",
        textAlign:"center",
        color:"#6d5197"
    },
    imagen:{
        flex:1
    }

    
});

export default Inicio;