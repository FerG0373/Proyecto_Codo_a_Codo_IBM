/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';

const GlobalFilter = ({updateSearch, search, onCancelSearch}) => {
  return (
    <View>
      <SearchBar
        lightTheme
        placeholder="Buscar Ciudad"
        onChangeText={text => updateSearch(text)}
        value={search}
        onClear={onCancelSearch}
      />
    </View>
  );
};

export default GlobalFilter;
