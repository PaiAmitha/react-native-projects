import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import APIcomponent from '../components/APIcomponent';

const YourScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title="List Data" />
      <Text style={styles.text}>Fetching API Data</Text>
      <APIcomponent />
    </View>
  );
};

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

export default YourScreen;
