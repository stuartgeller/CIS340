import react, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//22 mins

export default function App() {
  
  const[count, setCount] = useState(0)

  const onTap = () => setCount(count => count +1)

  return (
    <View style={styles.container}>
      <View style={styles.counterText}>
        <Text>Tap Counter: {count} </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onTap} >
          <Text>Touch Me</Text>
        </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFE0'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#778899',
    padding: 10
  },
  counterText: {
    alignContent: 'center',
    padding: 10
  }
});
