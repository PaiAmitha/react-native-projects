import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { RNCamera } from 'react-native-camera';

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title='Camera'/>
      <Text style={styles.text}>Click your Photo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, 
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
