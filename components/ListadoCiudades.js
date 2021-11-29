/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {useCities} from '../Hook/useCities';
import GlobalFilter from './GlobalFilter';
import ItemList from './ItemList';

const ListadoCiudades = () => {
  const {listOfCitys, singleCity, setSingleCity} = useCities();
  const [search, setSearch] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(singleCity.length);
    if (singleCity.length > 0) {
      setData(singleCity);
    } else {
      setData(listOfCitys);
    }
  }, [listOfCitys, singleCity]);

  const updateSearch = value => {
    if (value !== '') {
      setSearch(value);

      const termSearching = listOfCitys.filter(city => {
        let term = city.nombre.toLowerCase();

        return term === value.toLowerCase();
      });

      if (termSearching.length > 0) {
        setSingleCity(termSearching);
      } else {
        // mostrarAlerta();
      }
    } else {
      setSingleCity([]);
    }
  };

  const onCancelSearch = () => {
    console.log('entro acac');
    setSingleCity([]);
  };

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'No hay resultados, la ciudad que buscas no se encuentra en el listado',
      [{text: 'OK '}],
    );
  };

  const renderItem = ({item}) => <ItemList title={item.nombre} id={item.id} />;
  return (
    <>
      <View>
        <GlobalFilter
          search={search}
          updateSearch={updateSearch}
          onCancelSearch={onCancelSearch}
        />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default ListadoCiudades;
