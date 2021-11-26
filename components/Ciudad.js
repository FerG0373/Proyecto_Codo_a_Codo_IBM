/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight } from "react-native";

export default function Ciudad({item}){

    return(
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>ciudad: </Text>
                <Text style={styles.texto}>{item.name}</Text>
            </View>           
        </View>
        
    );
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: "#FFF",
        borderBottomColor: "#e1e1e1",
        borderStyle: "solid",
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20,
    },
    texto:{
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: "red",
        marginVertical: 10,
    },
    textoEliminar: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
    }
});