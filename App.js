/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './components/Header';
import StartgameScreen from './screen/StartgameScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.sreen}>
      <Header title="Guse a number"/>
      <StartgameScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  sreen: {
    flex: 1
  }
});

export default App;
