import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Ciudades from "../views/Ciudades";
import Formulario from "../views/Formulario";
import Clima from "../views/Clima";

const Stack = createNativeStackNavigator();

const inicioStack = () => {

    
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                backgroundColor: '#rgb(105, 108, 149)',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                }
            }}  
        >
            <Stack.Screen
                name="Ciudades"
                component={Ciudades}
                options={{ title: "Mis Ciudades" }}
            />
            <Stack.Screen
                name="Formulario"
                component={Formulario}
                options={{ title: "Formulario" }}
            />
            <Stack.Screen
                name="Clima"
                component={Clima}
                options={{ title: "Clima" }}
            />
        </Stack.Navigator>
    );
};

export default inicioStack;