import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function IconClima({icon}){
    let imagenClimaActual;
    
    //Se encarga de elegir la imagen que corresponde con el icono del clima actual que devuelve la API
    switch (icon) {
        case "01d":
            //despejado de dia
            imagenClimaActual = require("../assets/img/clima/300w/sun.png");
            break;
        case "01n":
            //despejado de noche
            imagenClimaActual= require("../assets/img/clima/300w/moon.png");
            break;
        case "02d":
            //nublado de dia
            imagenClimaActual=require("../assets/img/clima/300w/cloud-sun.png");
            break;
        case "02n":
            //nublado de noche
            imagenClimaActual=require("../assets/img/clima/300w/cloud-moon.png");
            break;
        case "03d" || "03n":
            //nublado
            imagenClimaActual=require("../assets/img/clima/300w/cloud.png");
            break;          
        case "04n" || "04d":
            //muy nublado, nubes negras algunas (no hay imagen para ese)
            imagenClimaActual=require("../assets/img/clima/300w/cloud.png");
            break;
        case "09n" || "09d":
            //lluvia
            imagenClimaActual=require("../assets/img/clima/300w/drizzle.png");
            break;
        case "10d":
            //lluvia de dia
            imagenClimaActual=require("../assets/img/clima/300w/drizzle-sun.png");
            break;
        case "10n":
            //lluvia de noche
            imagenClimaActual=require("../assets/img/clima/300w/drizzle-moon.png");
            break;
        case "11n" || "11d":
            //tormenta electrica 
            imagenClimaActual=require("../assets/img/clima/300w/lightning-rain.png");
            break;
        case "13n" || "13d":
            //nieve
            imagenClimaActual=require("../assets/img/clima/300w/snow-alt.png");
            break;
        case "50n" || icon === "50d":
            //neblina
            imagenClimaActual=require("../assets/img/clima/300w/fog.png");
            break;
        default:
            imagenClimaActual="sin descripcion";
            break;
    };

    return (<Image
                style={styles.imagenClima}
                source={imagenClimaActual}
            />);
};

const styles = StyleSheet.create({
    imagenClima:{
        marginTop:20,
        tintColor:"#FFF",
        borderColor:"black",
        width:220,
        height:220,
    },
});