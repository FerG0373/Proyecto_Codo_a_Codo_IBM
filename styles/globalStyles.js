import { StyleSheet } from "react-native";

//borderBottomWidth: StyleSheet.hairlineWidth una linea debajo del texto
const globalStyles = StyleSheet.create({
    titulo: {
        fontSize: 24,
        //fontWeight: "bold",
        padding: 4,
        textTransform:"uppercase",
        
        textDecorationLine:'underline',
        color: "#6d5197",
        textAlign:"center",
        fontFamily:"Poppins-Bold"
        

    },
    parrafo: {
        fontSize: 18,
        padding: 4,
        marginHorizontal:10,
        textAlign:"justify",
        color:"black",
        marginHorizontal:30,
        fontFamily:"Poppins-Medium"

    }
});

export default globalStyles;
//https://fonts.google.com/specimen/Poppins
//#1f2366
