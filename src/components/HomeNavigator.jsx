import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import ConversationScreen from '../screens/ConversationScreen';
import StoriesScreen from '../screens/StoriesScreen';
import CallsScreen from '../screens/CallsScreen';
import CameraScreen from '../screens/CameraScreen';

import { theme } from '../Theme';

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator 
    initialRouteName='Conversation' 
    screenOptions={{
        tabBarActiveTintColor: theme.colors.white, 
        tabBarInactiveTintColor: theme.colors.white, 
        tabBarStyle: {
            backgroundColor: "transparent"
        },
        tabBarLabelStyle: {
            fontWeight: "bold",
            fontFamily: theme.fonts.bold
        },
        tabBarIndicatorStyle: {
            backgroundColor: theme.colors.white
        } 
    }}
    style={{backgroundColor: theme.colors.primary}}
    >
      <Tab.Screen name='Camera' component={CameraScreen} options={{
        tabBarShowLabel: false,
        tabBarShowIcon: true,
        tabBarIcon: ({color}) => <Icon name="camera" size={25} color={color} />
      }} />
      <Tab.Screen name='Conversation' component={ConversationScreen} options={{
        tabBarLabel: "Chat"
      }} />
      <Tab.Screen name='Stories' component={StoriesScreen} />
      <Tab.Screen name='Calls' component={CallsScreen} />
    </Tab.Navigator>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})