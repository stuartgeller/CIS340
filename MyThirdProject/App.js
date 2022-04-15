import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {  Text, Button, View } from 'react-native';

function TV(props) {
  const [isOff, setIsOff] = useState(true);

  return(
  <View>
    {"\n\n\n\n\n"}
    <Text>
      This is {props.name} TV, and it is {isOff ? "off" : "turn me on"}
    </Text>
    <Button
      onPress={() =>{
        setIsOff(false);
      }}
      disabled={!isOff}
      title={isOff ? "turn me on, please!" : "thank you!"}
    />
  </View>
  );
}
export default function render() {
  return(
    <View>
      <TV name="LG"/>
      <TV name="Sony"/>
    </View>
  )
}
