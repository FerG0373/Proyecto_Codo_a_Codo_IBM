/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {Switch} from 'react-native-elements/dist/switch/switch';


// React Navigation
import {NavigationContainer} from '@react-navigation/native';

import InicioStack from './InicioStack';
import NosotrosStack from './NosotrosStack';
import CiudadesStack from './CiudadesStack';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="InicioS"
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route, color),
            tabBarActiveTintColor: '#00a680',
            tabBarInactiveTintColor: '#646464',
          })}>
          <Tab.Screen
            name="InicioS"
            component={InicioStack}
            options={{
              title: 'Inicio',
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="CiudadesS"
            component={CiudadesStack}
            options={{
              title: 'Mis Ciudades',
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="NosotrosS"
            component={NosotrosStack}
            options={{
              title: '¿Quiénes Somos?',
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case 'InicioS':
      iconName = 'home';
      break;
    case 'CiudadesS':
      iconName = 'map-marker';
      break;
    case 'NosotrosS':
      iconName = 'help-circle';
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
