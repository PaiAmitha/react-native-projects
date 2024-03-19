import React, { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, StatusBar, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import Header from '../components/Header';

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, setPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);

  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraReady) {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        setCapturedPhoto(photo.uri);
      }
    }
  };

  const resetPicture = () => {
    setCapturedPhoto(null);
  };

  if (permission === null) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header title='Camera'/>
        <Text style={styles.text}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" style={styles.permissionButton} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title='Camera'/>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          type={type}
          onCameraReady={() => setCameraReady(true)}
          ref={cameraRef}
        >
          <View style={styles.flipButtonContainer}>
            <TouchableOpacity style={styles.flipButton} onPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)}>
              <Text style={styles.buttonText}>Flip</Text>
            </TouchableOpacity>
          </View>
        </Camera>
        <View style={styles.captureButtonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.buttonText}>Capture</Text>
          </TouchableOpacity>
        </View>
      </View>
      {capturedPhoto && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: capturedPhoto }} style={styles.previewImage} />
          <Button title="Retake Picture" onPress={resetPicture} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, 
  },
  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    height: '70%',
    width: '100%',
  },
  flipButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  flipButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  captureButtonContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  captureButton: {
    backgroundColor: 'tomato',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  previewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  permissionButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'tomato',
    borderRadius: 5,
  },
});
