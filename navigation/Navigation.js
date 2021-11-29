/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
          shifting
          
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route, color),
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#646464',
            tabBarActiveBackgroundColor:"#6d5197",
            tabBarStyle: styles.tab
            //tabBarInactiveBackgroundColor:"white"
            //tabBarShowLabel: false,
            //tabBarBackground buscar permite degradado e imagen
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
};

const styles = StyleSheet.create({
  tab:{
    borderTopWidth: 0,
    elevation: 0
  }
});
