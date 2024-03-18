import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import { SecondaryButton } from '../components/Button';
import Toast from 'react-native-toast-message'; // Import the toast message component

const DetailsScreen = ({ navigation, route }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]); // State to manage favorites array
  const item = route.params;

  const toggleFavorite = () => {
    // Toggle the isFavorite state
    setIsFavorite(!isFavorite);
    // Check if the item is already in favorites
    const isAlreadyInFavorites = favorites.some(fav => fav.id === item.id);
    if (!isAlreadyInFavorites) {
      // Add item to favorites array if it's not already in favorites
      setFavorites([...favorites, item]);
      // Display toast message when adding to favorites
      Toast.show({
        type: 'success',
        text1: 'Added to Favorites',
        position: 'top',
        visibilityTime: 2000,
      });
    }
  };
  

  console.log('Favorites:', favorites); // Log favorites here to see the updated array

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 280 }}>
          <Image source={item.image} style={{ height: 220, width: 220 }} />
        </View>
        <View style={style.details}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.white }}>{item.name}</Text>
            <TouchableOpacity onPress={toggleFavorite}>
              <View style={style.iconContainer}>
                <Icon name={isFavorite ? 'favorite' : 'favorite-border'} color={COLORS.primary} size={25} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={style.detailsText}>{item.description}</Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <SecondaryButton title="Add To Cart" />
          </View>
        </View>
      </ScrollView>
      {/* Toast message component */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
});

export default DetailsScreen;
