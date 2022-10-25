import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React, {memo} from 'react';

import Emoji from './Emoji';
import { emojisByCategory } from '../../../data/Emojis';

const EmojiCategory = ({ category }) => {
  return (
    <FlatList 
      style={styles.container}
      data={emojisByCategory[category]}
      renderItem={({ item }) => <Emoji item={item} />}
      keyExtractor={(item) => {
        return item
      }}
      numColumns={8}
    />
  )
}

export default memo(EmojiCategory);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})