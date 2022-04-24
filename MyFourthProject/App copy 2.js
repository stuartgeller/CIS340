import React, {Component, useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TestInout, Text, View } from 'react-native';

export default function WordConverter() {
  const [text, setText]=useState('');
  return (
    <View style={{padding: 60}}>
      <TextInput style={{height: 40}}
      placehodler="Input text here"
      onChangeText={text => setText(text)}
      defaultValue={text}/>
      <Text style={{padding: 10,fontSize: 42}}>
        {text.split(' ').map((word) => word && '*').join(' ')}
      </Text>
    </View>
  );
}
