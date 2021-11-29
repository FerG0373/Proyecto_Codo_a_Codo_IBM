/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {useCities} from '../Hook/useCities';
import ItemList from './ItemList';

const ListadoCiudades = () => {
  const {listOfCitys} = useCities();

  const renderItem = ({item}) => <ItemList title={item.nombre} id={item.id} />;
  return (
    <>
      <View>
        <FlatList
          data={listOfCitys}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default ListadoCiudades;
