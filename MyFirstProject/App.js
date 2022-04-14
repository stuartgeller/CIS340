import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View } from 'react-native';

export default function App() {
  return (
    <Text style={styles}/>
  );
}

export function ViewComponent ({styles}){
  return(
    <View style={styles.container}>
      
    <Text style={styles.text}>Hello World!</Text>
  
    <StatusBar style="auto" />
  </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 50,
    fontWeight: 600
  }
});
