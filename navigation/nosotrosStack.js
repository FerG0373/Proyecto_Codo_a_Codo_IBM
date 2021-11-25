import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Nosotros from "../views/Nosotros";

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
                name="Nosotros"
                component={Nosotros}
                options={{ title: "¿Quiénes Somos?" }}
            />
        </Stack.Navigator>
    );
};

export default inicioStack;