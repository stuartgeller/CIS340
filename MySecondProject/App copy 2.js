import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function MyApp() {

  function getFullName(fName,mName,lName){
    return fName + " " + mName + " " + lName;
    }

  const pet= "Dog";
  return (
      <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
        I have a {pet}!
        My full name is {getFullName("Stuart","Conrad","Geller")} {"\n"}
      </Text>
  );
}

