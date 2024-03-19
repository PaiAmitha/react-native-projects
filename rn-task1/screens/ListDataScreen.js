import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import Header from '../components/Header';
import APIcomponent from '../components/APIcomponent';

const ListDataScreen = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleReadData = () => {
    try {
      const data = require('../data/data.json');
     // console.log('Data:', data);
      setJsonData(data);
    } catch (error) {
      console.error('Error reading data.json file:', error.message);
    }
  };


const handleDownload = async () => {
  try {
    const localFilePath = '../data/data.json'; // Path to the local data.json file
    const fileUri = FileSystem.documentDirectory + 'data.json';
    
    const content = require(localFilePath); // Read the content of data.json
    
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(content)); // Write the content to the device's document directory

    console.log('File downloaded to:', fileUri);

    // Request MEDIA_LIBRARY permission
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

    if (status === 'granted') {
      // Save the downloaded file to the media library
      await MediaLibrary.saveToLibraryAsync(fileUri);
      console.log('File saved to media library');
    } else {
      console.error('Permission to save to media library not granted');
    }
  } catch (error) {
    console.error('Error downloading file:', error.message);
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
      <ScrollView>
        {jsonData && (
          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>Data from data.json:</Text>
            <Text style={styles.dataText}>{JSON.stringify(jsonData, null, 2)}</Text>
          </View>
        )}
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
  dataContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  dataText: {
    fontSize: 16,
  },
});

export default ListDataScreen;
