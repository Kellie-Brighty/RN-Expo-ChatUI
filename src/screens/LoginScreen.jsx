import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginHeader from '../components/LoginHeader'
import { theme } from '../Theme'
import LoginForm from '../components/LoginForm'

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <LoginHeader />
        <LoginForm />
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.btn}>
          <Text style={styles.btn_text}>Main Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        backgroundColor: theme.colors.white,
        height: "100%",
        justifyContent: 'space-between'
    },
    btn: {
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      height: 50,
      alignItems: 'center'
    },
    btn_text: {
      fontSize: 20,
      fontFamily: "Quicksand-Bold",
      color: theme.colors.white
    }
})