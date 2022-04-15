import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {  Text, TextInput, View } from 'react-native';

function Student( props ) {
  return (
    <View>
      <Text>Hey, my name is { props.name }, I am a student in CIS 340!</Text>
    </View>
  );
}

export default function MultiComp() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Welcome to CIS340!</Text> 
      <Student name='Stuart Geller'/>
      <Student name='Bob'/>
      <Student name='Alice'/>
    </View>
  );
}
