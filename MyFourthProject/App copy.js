import React, {Component} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';

export default class MyApp extends Component {
  render() {
  return (
    <View style={{padding: 60}}>
      <Text>Hello I am here, I am student in CIS 340!</Text>
      <Text>I like using the class Component!</Text>
    </View>
  );
  }
}
