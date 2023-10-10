import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../screens/Home';
import images from '../../../assets/images';

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown:false,
        tabBarStyle: { position: 'absolute' ,backgroundColor:'#171E23'},
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image source={images.homeIcon}/>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <Image source={images.searchIcon}/>
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Home}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: () => (
            <Image source={images.libraryIcon} style={{width:21,height:21}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Image source={images.profileIcon}/>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Home}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: () => (
            <Image style={{width:19,height:21}} source={images.shoppingIcon}/>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})