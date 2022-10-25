import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react';

import shortnameToUnicode from '../../../helpers/shortnameToUnicode';

const Emoji = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container} >
      <Text style={styles.emoji}>{shortnameToUnicode[`:${item}:`]}</Text>
    </TouchableOpacity>
  )
}

export default memo(Emoji)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 9,
  },
  emoji: {
    fontSize: 25
  }
})