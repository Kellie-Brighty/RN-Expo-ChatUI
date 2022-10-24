import { StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native'
import React, {useState} from 'react'
import { theme } from '../Theme';
import ProfileInfo from './ProfileInfo'

const ConversationItem = ({ picture, username, bio, lastMessage, time, isBlocked, isMuted, hasStory, notifications }) => {

  const [modalVisible, setModalVisible] = useState(false)

  const showStoryCircle = () => {
    if(hasStory) {
      return {
        borderColor: theme.colors.storyBorder,
        borderWidth: 2
      }
    }
  }

  const showNotifications = (type) => {
    if(notifications && type === "number"){
      return (
        <View style={styles.notificationCircle}>
          <Text style={styles.notification} >{notifications}</Text>
        </View>
      )
    } else if(notifications && type === "imageCircle") {
      return {
        borderColor: theme.colors.primary
      }
    }
  }

  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.conversation}>
        <TouchableOpacity onPress={() => setModalVisible(currentValue => !currentValue)} style={[styles.imageContainer, showStoryCircle()]} >
          <Image style={styles.image} source={picture} />
        </TouchableOpacity>
        <View 
          style={{
              flex: 1,
              justifyContent: "center"
          }}
        >
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
            <Text numberOfLines={1} style={styles.username}>{username}</Text>
            <Text style={styles.time} >{time}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.message}  >{lastMessage}</Text>
            {showNotifications('number')}
          </View>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <ProfileInfo 
          username={username}
          picture={picture}
          bio={bio}
          isBlocked={isBlocked}
          isMuted={isMuted}
          hide={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  )
}

export default ConversationItem

const styles = StyleSheet.create({
  container: {

  },
  conversation: {
    flexDirection: 'row',
    paddingBottom: 25,
    paddingRight: 20,
    paddingLeft: 10
  },
  imageContainer: {
    marginRight: 15,
    borderRadius: 25,
    height: 50,
    width: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  image: {
    height: 50,
    width: 50
  },
  username: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSize.title,
    color: theme.colors.black,
    width: 210
  },
  message: {
    fontSize: theme.fontSize.message,
    fontFamily: theme.fonts.regular,
    width: 240,
    color: theme.colors.subTitle
  },
  time: {
    fontSize: theme.fontSize.subtitle,
    fontFamily: theme.fonts.regular,
    color: theme.colors.subTitle,
    fontWeight: '300'
  },
  notificationCircle: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    height: 20,
    width: 20,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification: {
     color: theme.colors.white,
     fontWeight: 'bold',
     fontSize: 10
  }
})