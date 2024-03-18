import React from 'react';
import { View, Text } from 'react-native';

const FavoriteScreen = ({ favorites }) => {
  return (
    <View>
      <Text>Favorites:</Text>
      {favorites.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

export default FavoriteScreen;
