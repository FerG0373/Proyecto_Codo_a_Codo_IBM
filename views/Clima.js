import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default function Clima ({route, navigation}) {
    
    //grados Kelvin para centigrados
    const kelvin = 273.15;
    const [bgcolor, guardarBgcolor] = useState("rgb(71, 149, 212)")

    console.log(route);

    const { resultado } = route.params;
    const {name, main, coord} = resultado;
    
    if (!name) return null;
    
    useEffect(() => {
        //modificar los colores de fondo segun la temperatura
        //const kelvin = 273.15;
        //const {main} = resultado;
        const actual = main.temp - kelvin;

        if(actual<10){
          guardarBgcolor("rgb(105, 108, 149)");
        }else if(actual >= 10 && actual < 25){
          guardarBgcolor("rgb(71, 149, 212)");
        } else{
          guardarBgcolor("rgb(178, 28, 61)");
        }
    }, [main]);

    const nombreClima = () => {
        var nombreClimaActual="";

        if(resultado.weather[0].id>=200 && resultado.weather[0].id<300){
            nombreClimaActual="tormenta electrica";
        }
        else if(resultado.weather[0].id>=300 && resultado.weather[0].id<400){
            nombreClimaActual="llovizna";
        }
        else if(resultado.weather[0].id>=500 && resultado.weather[0].id<600){
            nombreClimaActual="lluvia";
        }
        else if(resultado.weather[0].id>=600 && resultado.weather[0].id<700){
            nombreClimaActual="nieve";
        }
        else if(resultado.weather[0].id>=700 && resultado.weather[0].id<800){
            nombreClimaActual="neblina";
        }
        else if(resultado.weather[0].id===800){
            nombreClimaActual="despejado";
        }
        else if(resultado.weather[0].id>800 && resultado.weather[0].id<900){
            nombreClimaActual="nublado";
        }
        else{
            nombreClimaActual="sin descripcion";
        }
        return nombreClimaActual;
    };

    const imagenClima = () => {
        let imagenClimaActual;
        const icon = resultado.weather[0].icon;

        if(icon === "01d"){
            imagenClimaActual = require("../assets/img/clima/sun.png");
        }else if(icon === "01n"){
            imagenClimaActual= require("../assets/img/clima/moon.png");
        }else if(icon === "02d"){
            imagenClimaActual=require("../assets/img/clima/cloud-sun.png");
        }else if(icon === "02n"){
            imagenClimaActual=require("../assets/img/clima/cloud.png");
        }else if(icon === "03d" || icon === "03n"){
            imagenClimaActual=require("../assets/img/clima/cloud.png");
        }
        else if(icon === "04n" || icon === "04d"){
            imagenClimaActual=require("../assets/img/clima/cloud.png");
        }else if(icon === "09n" || icon === "09d"){
            imagenClimaActual=require("../assets/img/clima/rain-alt.png");
        }else if(icon === "10d"){
            imagenClimaActual=require("../assets/img/clima/rain-alt-sun.png");
        }else if(icon === "10n"){
            imagenClimaActual=require("../assets/img/clima/rain-alt-moon.png");
        }else if(icon === "11n" || icon === "11d"){
            imagenClimaActual=require("../assets/img/clima/light.png");
        }
        else if(icon === "13n" || icon === "13d"){
            imagenClimaActual=require("../assets/img/clima/snow-alt.png");
        }
        else if(icon === "50n" || icon === "50d"){
            imagenClimaActual=require("../assets/img/clima/fog.png");
        }else{
            imagenClimaActual="sin descripcion";
        }
        console.log(imagenClimaActual);
        return imagenClimaActual;
    };

    const bgColorApp = {
        backgroundColor: bgcolor,
    };

    const imagen = require("../assets/img/nubes5.png");

    /* En el return se renderiza toda la vista de los datos del clima */
    return (
        <ImageBackground source={imagen} resizeMode="cover" style={styles.imagen}>
            <View style={[styles.clima/*, bgColorApp*/]}>

                <Text style={styles.titulo}>Ciudad de</Text>
                <Text style={styles.titulo}>{ name }</Text>

                <View style={{alignItems:"center"}}>
                    <Image
                        style={styles.imagenClima}
                        source={imagenClima()}
                    />
                    <Text style={styles.texto}>
                        {nombreClima()}
                    </Text>

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