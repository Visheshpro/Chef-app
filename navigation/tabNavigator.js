import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AddRecipe from '../screens/addRecipe'
import Table from '../screens/table'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default class Profile extends React.Component{
  render(){
    return(
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Table') {
              iconName = focused
                ? 'restaurant'
                : 'restaurant-outline';
            } else if (route.name === 'Add Recipe') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Table" component={Table} />
        <Tab.Screen name="Add Recipe" component={AddRecipe} />
      </Tab.Navigator>
    )
  }
}