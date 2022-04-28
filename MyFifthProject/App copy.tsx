import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>Just yellow text!</Text>
      <Text style={styles.largeGreen}>This is Big Green</Text>
      <Text style={[styles.yellow, styles.largeGreen]}>Yellow text, then Big Green text</Text>
      <Text style={[styles.largeGreen, styles.yellow]}>Big Green text, then Yellow text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  largeGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,

  },
  yellow: {
    color: 'yellow',
    fontSize: 20,

  }
});
