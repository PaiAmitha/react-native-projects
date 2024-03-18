import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import Header from '../components/Header';

export default function LocationScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title='Location'/>
      <Text style={styles.text}>Where are you?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: StatusBar.currentHeight, // Add paddingTop to create space for StatusBar
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
