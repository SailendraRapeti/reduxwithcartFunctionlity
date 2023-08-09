import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Cart from './Cart';
const Tab = createBottomTabNavigator();
export class Navigations extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Tab.Screen name="cart" component={Cart} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default Navigations