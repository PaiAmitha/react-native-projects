import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import LocationScreen from '../screens/LocationScreen';
import ListDataScreen from '../screens/ListDataScreen';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const FooterNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        headerShown:false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({ color, size }) => (
            <Icon name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({ color, size }) => (
            <Icon name="location" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListDataScreen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
};

export default FooterNavigation;
