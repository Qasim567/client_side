import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#174A93",
        tabBarInactiveTintColor: "gray",
      }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
          }} 
        />
        <Tab.Screen 
          name="FavouriteScreen" 
          component={FavouriteScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="heart-outline" color={color} size={size} />,
          }} 
        />
        <Tab.Screen 
          name="Notification" 
          component={Notification} 
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="notifications-outline" color={color} size={size} />,
          }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="person-outline" color={color} size={size} />,
          }} 
        />
      </Tab.Navigator>
    );
  }