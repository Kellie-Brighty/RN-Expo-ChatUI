import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react';
import { theme } from '../Theme';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle} >{title}</Text>
        <TouchableOpacity onPress={() => {}} style={styles.imageContainer} >
            <Image style={styles.image} source={require("../../assets/joy.jpg")} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        paddingTop: 30
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        position: 'relative',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: theme.colors.white,
        alignSelf: 'center',
        fontFamily: theme.fonts.bold
    },
    imageContainer: {
        borderRadius: 20,
        height: 40,
        width: 40,
        overflow: 'hidden',
    },
    image: {
        height: 40,
        width: 40
    }
})