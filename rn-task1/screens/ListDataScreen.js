import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
// import { FileSystem } from 'expo-file-system';
import Header from '../components/Header';
import APIcomponent from '../components/APIcomponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const ListDataScreen = () => {
//   const [jsonData, setJsonData] = useState(null);

//   const handleReadData = () => {
//     try {
//       const data = require('../data/data.json');
//       setJsonData(data);
//     } catch (error) {
//       console.error('Error reading data.json file:', error.message);
//     }
//   };

//   const handleDownload = async () => {
//     try {
//       const localFilePath = '../data/data.json'; 
//       const fileUri = FileSystem.documentDirectory + 'data.json';
//       const content = require(localFilePath); 
//       console.log(content)
//       await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(content)); 
    
//       console.log('File downloaded to:', fileUri);

//       const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

//       if (status === 'granted') {
//         await MediaLibrary.saveToLibraryAsync(fileUri);
//         console.log('File saved to media library');
//       } else {
//         console.error('Permission to save to media library not granted');
//       }
//     } catch (error) {
//       console.error('Error downloading file:', error.message);
//     }
//   };

const ListDataScreen = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleReadData = () => {
    try {
      const data = require('../data/data.json');
      setJsonData(data);
    } catch (error) {
      console.error('Error reading data.json file:', error.message);
    }
  };

  
const handleDownload = async () => {
  try {
    // Read the data from the JSON file (assuming it's in your assets folder)
    const jsonData = require('../data/data.json');
    
    // Convert the data to a string
    const jsonString = JSON.stringify(jsonData);

    // Create a file in the app's documents directory
    const fileUri = FileSystem.documentDirectory + 'pooja.json';

    // Write the data to the file
    await FileSystem.writeAsStringAsync(fileUri, jsonString);

    // Save the file URI to AsyncStorage
    await AsyncStorage.setItem('dataUri', fileUri);
    console.log(fileUri)
    console.log('Data downloaded and saved successfully!');
    viewStoredData(); // Fetch the stored data after saving
  } catch (error) {
    console.error('Error downloading and saving data:', error);
  }
};

  const viewStoredData = async () => {
    try {
      // Retrieve the file URI from AsyncStorage
      const fileUri = await AsyncStorage.getItem('dataUri');
  
      if (fileUri) {
        // Read the file content
        const fileContent = await FileSystem.readAsStringAsync(fileUri);
        
        console.log('Stored data:', JSON.parse(fileContent));
      } else {
        console.log('No data stored.');
      }
    } catch (error) {
      console.error('Error retrieving stored data:', error);
    }
  };
  
  
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title="List Data" />
      <Text style={[styles.text, styles.margin]}>Fetching API Data</Text>
      <APIcomponent />
      <TouchableOpacity style={styles.button} onPress={handleReadData}>
        <Text style={styles.buttonText}>Read data.json file</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDownload}>
        <Text style={styles.buttonText}>Download file</Text>
      </TouchableOpacity>
      <ScrollView style={styles.imageContainer}>
        {jsonData && jsonData.map((item, index) => (
          <View key={index} style={styles.dataContainer}>
            <Image source={{ uri: item.imageUri }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.text}>{item.profession}</Text>
              <Text style={styles.text}>{item.city}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  margin: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 20,
  },
  dataContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ListDataScreen;
