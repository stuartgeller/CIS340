import React, {Component, useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, View, SectionList } from 'react-native';

//Video 2 20.55


export default MyScrollViewApp = () => (
    <View style={{flex: 1, paddingTop: 22}}>
      <SectionList
      sections={[{title: 'A', data:['Alabama','Alaska','Arizona']},
      {title: 'C', data:['Colorado','California','Connecticut']},
      {title: 'D', data:['Delaware']}

      ]}
      renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item.key} </Text>}
      renderSectionHeader={({section})=> <Text style={{paddingTop: 4, paddingLeft: 10, paddingRight: 10, paddingBottom: 4,
         fontSize:14, fontWeight: 'bold',backgroundColor:'#FA8DA'}}>{section.title}</Text>}
      keyExtractor={(item,index) => index}
      />
    </View>

  );
