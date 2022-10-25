import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react';

import ChatHeader from '../components/messages/ChatHeader';
import MessagesList from '../components/messages/MessagesList';
import ChatInput from '../components/messages/ChatInput';

const MessageScreen = ({ navigation, route }) => {
    const {username, bio, picture, isMuted, isBlocked} = route.params
  return (
      <View style={{flex: 1}} >
        <ChatHeader
            onPress={() => {}}
            username={username}
            picture={picture}
            onlineStatus="Online"
        />
        <MessagesList />
        <ChatInput />
      </View>
  )
}

export default MessageScreen

const styles = StyleSheet.create({})