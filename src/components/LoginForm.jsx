import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginForm = () => {
  return (
    <View style={styles.container} >
      <Text>Create a Login form here</Text>
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    }
})