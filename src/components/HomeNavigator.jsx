import { StyleSheet, Text, View, Animated, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import ConversationScreen from '../screens/ConversationScreen';
import StoriesScreen from '../screens/StoriesScreen';
import CallsScreen from '../screens/CallsScreen';
import CameraScreen from '../screens/CameraScreen';

import { theme } from '../Theme';

const {width} = Dimensions.get("screen");
const CAMERA_TAB_ITEM_WIDTH = width * 0.1;
const NORMAL_TAB_ITEM_WIDTH = width * 0.3;

const TabBarIndicator = ({ state }) => {
  const [translateValue, setTranslateValue] = useState(new Animated.Value(CAMERA_TAB_ITEM_WIDTH));
  const [itemWidth, setItemWidth] = useState(NORMAL_TAB_ITEM_WIDTH);

  useEffect(() => {
    slide()
  }, [state]);

  const slide = () => {
    setItemWidth(state.routes[state.index].name === "Camera" ? CAMERA_TAB_ITEM_WIDTH : NORMAL_TAB_ITEM_WIDTH);
    const toValue = state.routes[state.index].name === "Camera" ? 0 : state.routes[state.index].name === "Conversations" ? CAMERA_TAB_ITEM_WIDTH : CAMERA_TAB_ITEM_WIDTH + ((state.index - 1) * NORMAL_TAB_ITEM_WIDTH);
    Animated.timing(translateValue, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: true
    }).start();
  }

  return (
    <Animated.View 
      style={{
        position: 'absolute',
        width: itemWidth,
        borderBottomColor: theme.colors.white,
        borderBottomWidth: 3,
        bottom: 0,
        transform: [{ translateX: translateValue }]
      }}
    />
  )
}

const MyTabBar = ({ state, descriptors, navigation, position }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const tabBarItemWidth = route.name === "Camera" ? CAMERA_TAB_ITEM_WIDTH : NORMAL_TAB_ITEM_WIDTH

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              width: tabBarItemWidth,
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 5,
              height: 40
            }}
          >
            {
              route.name === "Camera" ? (<Animated.View>
                <Icon name="camera" size={25} color={theme.colors.white} />
              </Animated.View>) : (<Animated.Text style={{ color: theme.colors.white, fontFamily: theme.fonts.bold }}>
              {label}
            </Animated.Text>)
            }
            
          </TouchableOpacity>
        );
      })}
      <TabBarIndicator state={state} />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator 
    initialRouteName='Conversation' 
    tabBar={props => <MyTabBar {...props} />}
    style={{backgroundColor: theme.colors.primary}}
    >
      <Tab.Screen name='Camera' component={CameraScreen} />
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