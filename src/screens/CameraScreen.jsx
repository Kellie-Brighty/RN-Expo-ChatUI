import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import CustomCamera from '../components/camera/CustomCamera';

import { theme } from '../Theme';

const CameraScreen = () => {
  return (
    <View style={styles.container} >
      <CustomCamera />
    </View>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black
  }
})