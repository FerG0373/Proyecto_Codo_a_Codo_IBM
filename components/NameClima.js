import React from 'react';
import { Text } from 'react-native';

export default function IconClima({id, estilo}){
    var nombreClimaActual="";

    if(id>=200 && id<300){
        nombreClimaActual="tormenta electrica";
    }
    else if(id>=300 && id<400){
        nombreClimaActual="llovizna";
    }
    else if(id>=500 && id<600){
        nombreClimaActual="lluvia";
    }
    else if(id>=600 && id<700){
        nombreClimaActual="nieve";
    }
    else if(id>=700 && id<800){
        nombreClimaActual="neblina";
    }
    else if(id===800){
        nombreClimaActual="despejado";
    }
    else if(id>800 && id<900){
        nombreClimaActual="nublado";
    }
    else{
        nombreClimaActual="sin descripcion";
    }
    return (<Text style={estilo}>
                {nombreClimaActual}
            </Text>);
};


