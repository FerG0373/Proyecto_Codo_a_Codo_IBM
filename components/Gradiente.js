import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, Dimensions } from 'react-native';

export default function Gradiente ({colorGradiente}) {
    return(
        <LinearGradient
            // Background Linear Gradient
            //colors={['#97A7B7', '#B98A90', '#745B83']}
            colors={colorGradiente}
            style={styles.background}
        />
    );
};

const styles = StyleSheet.create({
    
    background:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    }
});