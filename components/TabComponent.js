/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import ListadoCiudades from './ListadoCiudades';

const TabComponent = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Listado'},
    {key: 'second', title: 'Mapa'},
  ]);
  const layout = useWindowDimensions();
  const FirstRoute = () => <ListadoCiudades />;

  const SecondRoute = () => (
    <View style={styles.component2}>
      <Text>Componente uno</Text>
    </View>
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <>
      <Text style={styles.textTitle}>Mis Ciudades</Text>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        inactiveColor={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  textTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    padding: 10,
  },
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  component1: {
    flex: 1,
    height: 600,
  },
  component2: {
    flex: 1,
    backgroundColor: '#673ab7',
  },
});

export default TabComponent;
