/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

const GlobalFilter = ({updateSearch, search}) => {
  

  

 

  return (
    <View>
      <SearchBar
        lightTheme
        placeholder="Buscar Ciudad"
        onChangeText={text => updateSearch(text)}
        value={search}
      />
    </View>
  );
};

export default GlobalFilter;
