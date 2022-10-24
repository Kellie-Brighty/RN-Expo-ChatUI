import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container} >
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  }
})