import { StyleSheet } from "react-native";

//borderBottomWidth: StyleSheet.hairlineWidth una linea debajo del texto
const globalStyles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 4,
        textTransform:"uppercase",
        
        textDecorationLine:'underline',
        color: "#6d5197",
        textAlign:"center"

    },
    parrafo: {
        fontSize: 16,
        padding: 4,
        marginHorizontal:10,
        textAlign:"justify",
        color:"black",
        marginHorizontal:30,


    }
});

export default globalStyles;
//https://fonts.google.com/specimen/Poppins
//#1f2366
