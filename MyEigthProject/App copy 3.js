import react, { Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

//22 mins

export default App = () => {
  let openImagePickerAsync = async() => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission is required')
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult)
  }
  return (
    <View style={styles.container}>
      <Image source={{url: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg'}}
      style={styles.logo}/>
      <Text style={styles.instructions}>
        Press the button below to select an image on your phone!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onTap()} >
          <Text style={styles.buttonText}>Pick Image</Text>
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFE0'
  },
  button: {
    backgroundColor: '#778899',
    padding: 20,
    borderRadius: 5
  },
  instructions: {
    fontSize: 18,
    color: '#87CEFA',
    marginHorizontal: 15,
    marginBottom: 10
  },
  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
});
