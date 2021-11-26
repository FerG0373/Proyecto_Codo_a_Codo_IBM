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

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}}>
    <Text>Componente uno</Text>
  </View>
);
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const LazyPlaceholder = ({route}) => (
  <View style={styles.scene}>
    <Text>Loading {route.title}…</Text>
  </View>
);
const TabComponent = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);
  const layout = useWindowDimensions();

  const renderLazyPlaceholder = ({route}) => <LazyPlaceholder route={route} />;
  return (
    <>
      <Text>Hola</Text>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderLazyPlaceholder={() => renderLazyPlaceholder()}
        initialLayout={{width: layout.width}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabComponent;
