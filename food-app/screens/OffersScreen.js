import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import COLORS from '../consts/colors';

const OffersScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/offer-background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.title}>Today's Special Offers</Text>
          <View style={styles.offerContainer}>
            <View style={styles.offerItem}>
              <Text style={styles.offerText}>50% OFF</Text>
              <Text style={styles.offerDescription}>on Pizza</Text>
            </View>
            <View style={styles.offerItem}>
              <Text style={styles.offerText}>25% OFF</Text>
              <Text style={styles.offerDescription}>on Burgers</Text>
            </View>
            <View style={styles.offerItem}>
              <Text style={styles.offerText}>BOGO</Text>
              <Text style={styles.offerDescription}>on Sushi</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 20,
  },
  offerContainer: {
    marginTop: 20,
  },
  offerItem: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  offerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  offerDescription: {
    fontSize: 14,
    color: COLORS.white,
  },
});

export default OffersScreen;
