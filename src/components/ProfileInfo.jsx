import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Icon from '@expo/vector-icons/FontAwesome'

import {theme} from '../Theme'

const ProfileInfo = ({ bio, username, picture, hide, isBlocked, isMuted }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={hide} activeOpacity={1} >
      <View style={styles.innerContainer}>
        <TouchableOpacity activeOpacity={1}>
            <Image style={styles.image} source={picture} />
            <View style={styles.usernameContainer} >
                <Text style={styles.username} >{username}</Text>
            </View>
            <View style={styles.modalOptionsContainer} >
                <TouchableOpacity style={styles.modalIconContainer}>
                    <Icon name='align-left' size={25} color={theme.colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalIconContainer}>
                    <Icon name='phone' size={25} color={theme.colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalIconContainer}>
                    <Icon name='info-circle' size={25} color={theme.colors.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProfileInfo

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    innerContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        elevation: 3,
        overflow: 'hidden'
    },
    image: {
        width: 200,
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    usernameContainer: {
        position: 'absolute',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#5557",
        width: "100%",
        alignItems: 'center'
    },
    username: {
        color: theme.colors.white,
        backgroundColor: 'transparent'
    },
    modalOptionsContainer: {
        backgroundColor: theme.colors.white,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    modalIconContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})