/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useCities} from '../Hook/useCities';

const CitiesMap = () => {
  const {listOfCitys} = useCities();
  console.log(listOfCitys);
  return (
    <>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -38.416097,
          longitude: -63.616672,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}>
        {listOfCitys.map(city => {
          console.log(city);
          return (
            <Marker
              coordinate={{latitude: city.latitud, longitude: city.longitud}}
              title={city.nombre}
              // description={(main.temp - kelvin).toFixed(1)}
            />
          );
        })}
      </MapView>
    </>
  );
};
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
});

export default CitiesMap;
