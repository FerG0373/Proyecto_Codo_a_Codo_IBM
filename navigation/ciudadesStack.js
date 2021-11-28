/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ciudades from '../views/Ciudades';
import Formulario from '../views/Formulario';
import Clima from '../views/Clima';
import Listado from '../components/Listado';

const Stack = createNativeStackNavigator();

const CiudadesStack = () => {
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
        name="Ciudades"
        component={Ciudades}
        options={{title: 'Mis Ciudades'}}
      />
      <Stack.Screen
        name="Formulario"
        component={Formulario}
        options={{title: 'Formulario'}}
      />
      <Stack.Screen
        name="Listado"
        component={Listado}
        options={{title: 'Listado'}}
      />
      <Stack.Screen name="Clima" component={Clima} options={{title: 'Clima'}} />
    </Stack.Navigator>
  );
};

export default CiudadesStack;
