import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const APIComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});

export default APIComponent;
