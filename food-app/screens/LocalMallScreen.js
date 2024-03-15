import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import stores from '../consts/stores'; // Assuming you have a file with store data

const LocalMallScreen = ({ navigation }) => {

  const navigateToStoreDetails = (store) => {
    navigation.navigate('StoreDetailsScreen', { store });
  };

  const renderStoreItem = ({ item }) => (
    <TouchableOpacity
      style={styles.storeItemContainer}
      onPress={() => navigateToStoreDetails(item)}>
      <Image source={item.image} style={styles.storeItemImage} />
      <Text style={styles.storeItemName}>{item.name}</Text>
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
  storeItemName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

export default LocalMallScreen;
