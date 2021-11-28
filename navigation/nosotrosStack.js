/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Nosotros from '../views/Nosotros';

import Fernando from '../views/Fernando';
import Matias from '../views/Matias';
import Vanina from '../views/Vanina';

const Stack = createNativeStackNavigator();

const NosotrosStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerStyle: {
          //backgroundColor: "#6d5197",
        },
        //headerTintColor: '#fff',
        headerTintColor: '#6d5197',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTransparent: true,
        headerShadowVisible: false,
        headerBlurEffect: "extraLight",
        animation:"slide_from_left"
      }}>
      <Stack.Screen
        name="Nosotros"
        component={Nosotros}
        options={{title: '¿Quiénes Somos?'}}
      />
      <Stack.Screen
        name="Matias"
        component={Matias}
        options={{title: 'Matías'}}
      />
      <Stack.Screen
        name="Fernando"
        component={Fernando}
        options={{title: 'Fernando'}}
      />
      <Stack.Screen
        name="Vanina"
        component={Vanina}
        options={{title: 'Vanina'}}
      />
    </Stack.Navigator>
  );
};

export default NosotrosStack;
