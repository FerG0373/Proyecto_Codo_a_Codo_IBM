/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Nosotros from '../views/Nosotros';

const Stack = createNativeStackNavigator();

const NosotrosStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: "#6d5197",
        },
        headerTintColor: '#fff',
        //headerTintColor: '#6d5197',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        //headerTransparent: true,
        //headerShadowVisible: false,
        //headerBlurEffect: "extraLight",
        animation:"slide_from_left"
      }}>
      <Stack.Screen
        name="Nosotros"
        component={Nosotros}
        options={{title: '¿Quiénes Somos?'}}
      />
    </Stack.Navigator>
  );
};

export default NosotrosStack;
