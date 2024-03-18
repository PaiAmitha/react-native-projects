import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import stores from '../consts/stores'; 

const LocalMallScreen = () => {

  const renderStoreItem = ({ item }) => (
    <TouchableOpacity
      style={styles.storeItemContainer}
      onPress={() => {}}>
      <Image source={item.image} style={styles.storeItemImage} />
      <View style={styles.storeDetails}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.storeLocation}>{item.location}</Text>
        <Text style={styles.storeDescription}>{item.description}</Text>
        <View style={styles.storeAdditionalDetails}>
          <Text style={styles.storeCuisine}>Cuisine: {item.cuisine.join(', ')}</Text>
          <Text style={styles.storeContact}>Contact: {item.contact}</Text>
        </View>
      </View>
      <Icon name="arrow-forward-ios" size={24} color={COLORS.grey} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={stores}
        renderItem={renderStoreItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.storeList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  storeList: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  storeItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: COLORS.light,
    padding: 10,
  },
  storeItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  storeDetails: {
    flex: 1,
    marginLeft: 10,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  storeLocation: {
    fontSize: 16,
    color: COLORS.grey,
  },
  storeDescription: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
  },
  storeAdditionalDetails: {
    marginTop: 5,
  },
  storeCuisine: {
    fontSize: 14,
    color: 'red', // Changed to darker color
  },
  storeContact: {
    fontSize: 14,
    color: 'blue', // Changed to darker color
    marginTop: 5,
  },
});

export default LocalMallScreen;
