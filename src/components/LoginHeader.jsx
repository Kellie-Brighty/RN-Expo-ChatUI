import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import theme from '../Theme'

const LoginHeader = () => {
  return (
    <View style={styles.header} >
      <View style={styles.text_container} >
        <Text style={styles.welcome_text} >Welcome Back</Text>
        <Text style={styles.welcome_sub_text} >Please sign in to Avid-Chat</Text>
      </View>
    </View>
  )
}

export default LoginHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    text_container: {
      
    },
    welcome_text: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 20,
      textAlign: 'center'
    },
    welcome_sub_text: {
      fontFamily: "Quicksand-Regular",
      textAlign: 'center',
      fontWeight: 'bold'
    }
})