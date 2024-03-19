import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, StatusBar } from 'react-native';
import * as Location from 'expo-location';
import Header from '../components/Header';

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      reverseGeocode(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      setErrorMsg('Error fetching location');
    }
  };

  const reverseGeocode = async (latitude, longitude) => {
    try {
      let addressResponse = await Location.reverseGeocodeAsync({ latitude, longitude });
      setAddress(addressResponse[0]); // Assuming the first address in the response is the most relevant
    } catch (error) {
      setErrorMsg('Error fetching address');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title='Location'/>
      <Text style={styles.text}>Where am I?</Text>
      <Button title="Let's See!" onPress={getLocation} />
      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}
      {location ? (
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>
            Latitude: {location.coords.latitude}
          </Text>
          <Text style={styles.locationText}>
            Longitude: {location.coords.longitude}
          </Text>
          {address ? (
            <Text style={styles.addressText}>
              Address: {address.city}, {address.region}, {address.country}
            </Text>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  locationContainer: {
    marginTop: 20,
  },
  locationText: {
    fontSize: 18,
    textAlign: 'center',
  },
  addressText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginTop: 20,
  },
});

export default LocationScreen;
