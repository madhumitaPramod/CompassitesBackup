/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TryText from './try/components/Trytext'



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       <TryText name="I love to blink dear"/>
       <TryText name="OOHHH shit"/>
       <TryText name="had breakfast"/>
       <TryText name="lovely"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8C61B2',
  }
});
