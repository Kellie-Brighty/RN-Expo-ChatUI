import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';

import ConversationItem from './ConversationItem';

const Conversations = ({ children }) => {
  return (
    <ScrollView>
      {children}
      <ConversationItem 
        picture={require("../../assets/kelly.jpg")}
        username="Kelly Owoju"
        bio="my name is Kelly Owoju"
        lastMessage="Hello there"
        time="4:00pm"
        notifications="3"
        isBlocked
        isMuted
        hasStory
      />
      <ConversationItem 
        picture={require("../../assets/sharon.jpg")}
        username="Sharon Arinola"
        bio="my name is Sharon Owoju"
        lastMessage="Hello there"
        time="4:00pm"
        isBlocked
        isMuted
      />
      <ConversationItem 
        picture={require("../../assets/gold.jpg")}
        username="Gold Bright"
        bio="my name is Kelly Owoju"
        lastMessage="Hello there"
        time="4:00pm"
        notifications="1"
        isBlocked
        isMuted
        hasStory
      />
    </ScrollView>
  )
}

export default Conversations

const styles = StyleSheet.create({})