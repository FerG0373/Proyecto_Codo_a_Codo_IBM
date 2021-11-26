import { StyleSheet } from "react-native";

//borderBottomWidth: StyleSheet.hairlineWidth una linea debajo del texto
const globalStyles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 4,
        textTransform:"uppercase",
        //color: "white",
        borderBottomColor: "#1f2366",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    parrafo: {
        fontSize: 16,
        padding: 4,
        marginHorizontal:10,
    }
});

export default globalStyles;
//https://fonts.google.com/specimen/Poppins
//#1f2366
