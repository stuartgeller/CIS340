import react, { Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'
import { TouchableOpacity } from 'react-native-web';

//22 mins

export default App = () => {
const [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async() => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission is required')
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult)

    if(pickerResult.cancelled === true) {
      return
    }
    setSelectedImage({localUri: pickerResult.uri})
  }

  let openSharingDialogAsync = async() => {
    if(!(await Sharing.isAvailableAsync())){
      alert('Sharing is not available')
      return;
    }
    Sharing.shareAsync(selectedImage.localUri)
  }


  if (selectedImage !== null) {
    return(
      <View style={styles.container}>
        <Image style={styles.selectedImage} source={{uri: selectedImage.localUri}}/>
        <TouchableOpacity onPress={openSharingDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>
            Share My Photo
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg'}}
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
  },
  selectedImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
});
