import React, {Component, useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList } from 'react-native';

//Video 2 20.55


export default MyScrollViewApp = () => (
    <View style={{flex: 1, paddingTop: 22}}>
      <FlatList data={[
        {key: 'Alabama'},
        {key: 'Alaska'},
        {key: "Arizona"},
        {key: "Arkansas"},
        {key: "California"},
        {key: "Colorado"},
        {key: "Delaware"},
        {key: "Florida"},
        {key: "Florida"},
      ]}
      renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item.key} </Text>}
      />
    </View>

  );
