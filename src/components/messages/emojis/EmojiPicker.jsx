import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState, memo } from 'react';
import { TabView } from 'react-native-tab-view';

import Categories from '../../../data/Categories';

import EmojiCategory from './EmojiCategory';
import Tabbar from './Tabbar';

const EmojiPicker = () => {
   
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState(Categories.tabs.map(tab => ({ key: tab.category, title: tab.tabLabel })));

  const renderScene = ({ route }) => (
    <EmojiCategory 
      category={route.key}
    />
  )
   
  return (
    <TabView 
      renderTabBar={props => <Tabbar setIndex={setIndex} {...props} />}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      initialLayout={{ width: layout.width }}
    />
  )
}

export default memo(EmojiPicker)

const styles = StyleSheet.create({})