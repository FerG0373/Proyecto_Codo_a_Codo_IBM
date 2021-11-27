/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {useCities} from '../Hook/useCities';
import ItemList from './ItemList';

const ListadoCiudades = () => {
  const {listOfCitys} = useCities();
  console.log(listOfCitys);

  const renderItem = ({ item }) => <ItemList title={item.nombre} id={item.id}/>;
  return (
    <>
      <ScrollView>
        <View>
          <FlatList
            data={listOfCitys}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ListadoCiudades;
