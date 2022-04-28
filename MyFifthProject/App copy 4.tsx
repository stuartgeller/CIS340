import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Video 1 @ 45.43

export default function App() {
  return (
    <View style={{flex: 1, 
    flexDirection: 'row'}}>
      <View style={{width: 50, height: 50, flex: 1, backgroundColor: 'red'}} />
      <View style={{width: 50, height: 50, flex: 1, backgroundColor: 'yellow'}} />
      <View style={{width: 50, height: 50, flex: 1, backgroundColor: 'green'}} />
    </View>
  );
}
