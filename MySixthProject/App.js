import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function App() {

  const csuLogo = {
   url: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png',
   width: 80,
   height: 80
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={csuLogo} styles={styles.image}>
      <Text style={csuLogo}>CSU Logo</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: 'red',
    fontSize: 40,
    fontWeight: 'bold'
  },
});
