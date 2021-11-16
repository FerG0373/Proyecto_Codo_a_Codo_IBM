import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Clima ({resultado}) {

    const {name, main} = resultado;

    if (!name) return null;
    //grados Kelvin para centigrados
    const kelvin = 273.15;

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
    }


    /* En el return se renderiza toda la vista de los datos del clima */
    return (
        <View style={styles.clima}>

            <Text style={styles.texto}>Ciudad de { name }</Text>

            <Text style={[styles.texto, styles.actual]}>
                {parseInt(main.temp - kelvin) }
                <Text style={styles.temperatura}>
                    &#x2103;
                </Text>
                <Image
                    style={{ width:66, height:58 }}
                    source={{uri: `http://openweathermap.org/img/w/${resultado.weather[0].icon}.png`}}
                />
            </Text>

            <View style={styles.temperaturas}>

                <Text style={styles.texto}>
                    {nombreClima()}
                </Text>

                <Text style={styles.texto}>
                    <Text style={styles.temperatura}>
                       Max { parseInt(main.temp_max - kelvin) } &#x2103; / 
                       Min { parseInt(main.temp_min - kelvin) } &#x2103;
                    </Text>
                </Text>

                <Text style={styles.texto}>S. Termica {" "}
                    <Text style={styles.temperatura}>
                        { parseInt(main.feels_like - kelvin) } &#x2103;
                    </Text>
                </Text>

                <Text style={styles.texto}>Humedad {" "}
                    <Text style={styles.temperatura}>
                        { parseInt(main.humidity) }%
                    </Text>
                </Text>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    clima:{
        marginBottom: 20,
    },
    texto:{
        color:"#FFF",
        fontSize:20,
        textAlign: "center",
        marginRight: 20,
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
});