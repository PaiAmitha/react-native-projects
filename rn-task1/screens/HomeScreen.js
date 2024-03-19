import { View, Text, StyleSheet, StatusBar, ImageBackground, ScrollView, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/bg1.jpg')} 
      style={styles.background}>
      <View style={styles.container}>
        <StatusBar />
        <Header title='Home'/>
        <ScrollView>
        <Text style={styles.text}>Welcome to the Home Page</Text>
        <Image
          source={require('../assets/img1.jpg')} 
          style={styles.image}/>
        <Image
          source={require('../assets/img4.jpg')} 
          style={styles.image}/>
        <Image
          source={require('../assets/img3.jpg')} 
          style={styles.image}/>
        <Image
          source={require('../assets/img2.jpg')} 
          style={styles.image}/>
        <Image
          source={require('../assets/img5.jpg')} 
          style={styles.image}/>
        </ScrollView>
      </View>
    </ImageBackground>
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
    fontWeight:'bold',
    color:'white',
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  image: {
    width: 300, 
    height: 200, 
    marginLeft:40,
    marginTop:20,
    borderRadius: 20, 
  },
});
