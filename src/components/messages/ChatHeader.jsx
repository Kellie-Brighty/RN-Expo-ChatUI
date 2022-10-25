import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import Icon from '@expo/vector-icons/FontAwesome'

import { theme } from '../../Theme';

const ChatHeader = ({ username, picture, onlineStatus, onPress }) => {
  return (
    <View style={styles.container}  >
      <TouchableOpacity style={styles.backButton} >
        <Icon name="angle-left" size={30} color={theme.colors.white} /> 
      </TouchableOpacity>
      <View style={styles.profileOptions} >
        <TouchableOpacity style={styles.profile} >
            <Image source={picture} style={styles.image} />
            <View style={styles.usernameAndOnlinStatis} >
                <Text style={styles.username}>
                    {username}
                </Text>
                <Text style={styles.onlineStatus}>{onlineStatus}</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.options}>
            <TouchableOpacity style={{paddingHorizontal: 5}} >
                <Icon  name="phone" size={30} color={theme.colors.white} /> 
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 20 }}>
                <Icon  name="ellipsis-v" size={30} color={theme.colors.white} /> 
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
        paddingTop: 40,
        alignItems: 'center',
        paddingBottom: 10
    },
    backButton: {
        alignSelf: 'center',
        paddingHorizontal: 10
    },
    profileOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 10
    },
    profile: {
        flexDirection: 'row',
        flex: 4
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 32.5
    },
    usernameAndOnlinStatis: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    username: {
        color: theme.colors.white,
        fontFamily: theme.fonts.bold,
        fontSize: 18
    },
    onlineStatus: {
        color: theme.colors.white,
        fontFamily: theme.fonts.bold,
        fontSize: 16
    },
    options: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})