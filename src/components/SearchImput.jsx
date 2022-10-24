import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';

import Icon from '@expo/vector-icons/FontAwesome';

import { theme } from '../Theme';

const SearchImput = () => {
  return (
    <View style={styles.container} >
      <View style={styles.row} >
        <Icon name='search' size={20} color={theme.colors.searchIcon} />
        <TextInput style={styles.input} placeholder="Search" maxLength={10} />
      </View>
    </View>
  )
}

export default SearchImput

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    row: {
        backgroundColor: theme.colors.searchBackground,
        flexDirection: 'row',
        borderRadius: 5,
        height: 45,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    input: {
        paddingHorizontal: 30,
        fontSize: 15,
        height: 45,
        flex: 1,
        color: theme.colors.searchText,
        fontFamily: theme.fonts.regular
    }
})