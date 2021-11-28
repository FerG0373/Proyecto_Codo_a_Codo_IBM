import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import IconClima from "../components/IconClima";
import NameClima from "../components/NameClima";

export default function Clima ({route, navigation}) {
    
    //grados Kelvin para centigrados
    const kelvin = 273.15;

    const { resultado } = route.params;
    const {name, main, coord} = resultado;
    const {id} = resultado.weather[0];
    if (!name) return null;
    
    const imagen = require("../assets/img/electrica2.png");

    useEffect(() => {
        //imagen tormenta electrica
        if(id>=200 && id<300){
            const imagen = require("../assets/img/electrica2.png");
        }
        else if(id>=300 && id<400){
            //imagen llovizna
            const imagen = require("../assets/img/lluvia3.png");
        }
        else if(id>=500 && id<600){
            //imagen lluvia
            const imagen = require("../assets/img/lluvia4.png");
        }
        else if(id>=600 && id<700){
            //imagen nieve
            const imagen = require("../assets/img/nieve1.png");
        }
        else if(id>=700 && id<800){
            //imagen neblina
            const imagen = require("../assets/img/neblina1.png");
        }
        else if(id===800){
            //imagen despejado
            const imagen = require("../assets/img/fondo.png");
        }
        else if(id>800 && id<900){
            //imagen nublado
            const imagen = require("../assets/img/nubes5.png");
        }
        else{
            const imagen = require("../assets/img/fondo.png");
        }
    }, []);


    

    /* En el return se renderiza toda la vista de los datos del clima */
    return (
        <ImageBackground source={imagen} resizeMode="cover" style={styles.imagen}>
            <View style={[styles.clima/*, bgColorApp*/]}>

                <Text style={styles.titulo}>Ciudad de</Text>
                <Text style={styles.titulo}>{ name }</Text>

                <View style={{alignItems:"center"}}>
                    <IconClima
                        icon={resultado.weather[0].icon}
                    />
                    <NameClima
                        estilo={styles.texto}
                        id={resultado.weather[0].id}
                    />

                </View>
                <Text style={[styles.texto, styles.actual]}>
                    {(main.temp - kelvin).toFixed(1) }
                    <Text style={styles.temperatura}>
                        &#x2103;
                    </Text>
                    
                </Text>

                <View style={styles.temperaturas}>
                    <Text style={styles.texto}>
                        <Text style={styles.temperatura}>
                            Min { (main.temp_min - kelvin).toFixed(1) } &#x2103; /
                        Max { (main.temp_max - kelvin).toFixed(1) } &#x2103;
                        </Text>
                    </Text>

                    <Text style={styles.texto}>S. Termica {" "}
                        <Text style={styles.temperatura}>
                            { (main.feels_like - kelvin).toFixed(1) } &#x2103;
                        </Text>
                    </Text>

                    <Text style={styles.texto}>Humedad {" "}
                        <Text style={styles.temperatura}>
                            { parseInt(main.humidity) }%
                        </Text>
                    </Text>
                </View>
            </View>
        </ImageBackground>
        
        
    );
};

/* Mapa que se saco de aca
            <MapView 
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                latitude: coord.lat,
                longitude: coord.lon,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{ latitude : coord.lat , longitude : coord.lon }}
                    title={ name }
                    description={ (main.temp - kelvin).toFixed(1) }
                />
              
            </MapView>
         */

const styles = StyleSheet.create({
    clima:{
        marginTop:35,
        //marginBottom: 20,
        //alignItems:"center",
    },
    titulo:{
        color:"#FFF",
        fontSize:26,
        textAlign: "center",
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        //textShadowColor:"black",
        textTransform:"uppercase",
        fontWeight: "bold",
    },
    texto:{
        color:"#FFF",
        fontSize:20,
        textAlign: "center",
        marginRight: 20,
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        textTransform:"uppercase",
        fontWeight: "bold",

    },
    actual:{   
        fontSize:80,
        marginRight: 0,
        fontWeight: "bold",
    },
    temperatura:{
        fontSize: 24,
        fontWeight: "normal",
    },
    temperaturas:{
        /*flexDirection: "row",
        justifyContent: "center",*/
        textAlign: "center",
    },
    map:{
        width:Dimensions.get('window').width - 60,
        height:300,
    },
    imagen:{
        flex: 1,
        //justifyContent: "center"
    },
    imagenClima:{
        marginTop:20,
        tintColor:"#FFF",
        borderColor:"black",
        width:220,
        height:220,
    },
});