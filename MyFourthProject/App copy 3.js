import React, {Component, useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TestInout, Text, View, ScrollView } from 'react-native';


const dog = {
  url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
  width: 64,
  height: 64
};

export default MyScrollViewApp = () =>(

    <ScrollView style={{padding:40}}>
      <Text style={{fontSize: 80}}>
        Try to scroll down
      </Text>
      <Image source={dog}/>
      <Image source={require('./assets/dog2.png')} style={{width: 80, height: 80}}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Text style={{fontSize: 80}}>
        Try to scroll down if you'd like to.
      </Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
    </ScrollView>
  );
