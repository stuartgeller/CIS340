import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const csuLogo = {
   url: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png',
   width: 80,
   height: 80
  }
  return (
    <View style={styles.container}>
      <Image
      style={styles.localCSULogo}
      source={require('./assets/logo.jpg')} />
      <Image
      style={styles.urlCSUogo}
      source={{url: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png'}} />
      <Image
      style={style.stretchLogo}
      source={csuLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  localSULogo: {
    width: 55,
    hieght: 65
  },
  urlCSULogo: {
    width: 50,
    hieght: 50
  },
  stretchLogo: {
    hieght: 200,
    resizeMode: 'center',
  }
});
