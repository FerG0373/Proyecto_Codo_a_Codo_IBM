import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

export default function Listado (){

    const [ciudadesTotales, guardarCiudadesTotales] = useState([]);

    useEffect(() => {
        const consultarCiudades = () => {
            fetch("../assets/city-list.json").then(response => response.json())
            .then(datos => guardarCiudadesTotales(datos))
        };
        consultarCiudades();

        const ciudadesFiltradas = ciudadesTotales.filter( ciudad => ciudad.country === "AR" );
        guardarCiudadesTotales(ciudadesFiltradas);
        console.log(ciudadesTotales);
        
    }, []);


    return(
        <View>
            <FlatList
              
                data={ciudadesTotales}
                renderItem={ ({item}) => <Ciudad item={item} /> }
                keyExtractor={ ciudad => ciudad.id}
              />
        </View>
    );
};