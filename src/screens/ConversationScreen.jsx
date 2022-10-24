import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import Conversations from '../components/Conversations';
import { theme } from '../Theme';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import SearchImput from '../components/SearchImput';

import { fabStyles } from '../Styles';

const ConversationScreen = () => {
  return (
    <View style={{backgroundColor: theme.colors.white, flex: 1}} >
      <Conversations>
        <SearchImput />
      </Conversations>
      <TouchableOpacity onPress={() => {}} style={fabStyles.style}>
        <Icon name='chat' size={30} color={theme.colors.primary} />
      </TouchableOpacity>
    </View>
  )
}

export default ConversationScreen

const styles = StyleSheet.create({})