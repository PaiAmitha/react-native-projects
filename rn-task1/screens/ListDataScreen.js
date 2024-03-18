import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import APIcomponent from '../components/APIcomponent';
import { useNavigation } from '@react-navigation/native';
import StackNavigator from '../navigation/StackNavigator';

export default function ListDataScreen() {
    const navigation = useNavigation(); 

  const handleButtonPress = () => {
    navigation.navigate('DisplayScreen'); 
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title='ListData'/>
      <Button title="Show Data" onPress={handleButtonPress} />
      <Text style={styles.text}>Fetching data from API</Text>
      <APIcomponent/>
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
