import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Video 1 @ 45.43

export default function App() {
  return (
    <View style={{flex: 1, 
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'baseline'}}>
      <View style={{width: 50, height: 50, backgroundColor: 'red', alignSelf: 'flex-end'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
    </View>
  );
}
