/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inicio from '../views/Inicio';

const Stack = createNativeStackNavigator();

const InicioStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: "#6d5197",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{title: 'Inicio'}}
      />
    </Stack.Navigator>
  );
};

export default InicioStack;
