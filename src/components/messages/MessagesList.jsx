import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState, useRef} from 'react';

import { theme } from '../../Theme';
import Message from './Message';

const MessagesList = () => {

  const [messages, setMessages] = useState([
    {
      user: 0,
      time: '12:00',
      content: "Hey"
    },
    {
      user: 1,
      time: '12:05',
      content: "What's up"
    },
    {
      user: 1,
      time: '12:06',
      content: "How you dey nah"
    },
    {
      user: 0,
      time: '12:08',
      content: "I dey alright o"
    },
    {
      user: 1,
      time: '12:08',
      content: "You nah boss nah"
    },
    {
      user: 1,
      time: '12:08',
      content: "Howfar, I fit show for your side tomorrow? I dey reason sey make we play CODm clan war"
    },
    {
      user: 0,
      time: '12:08',
      content: "Sure nah... I bin wan text you about am sef."
    },
    {
      user: 1,
      time: '12:08',
      content: "Okay boss... great."
    },
    {
      user: 0,
      time: '12:08',
      content: "Try show by 2:00pm, na dat time I go free for here."
    },
    {
      user: 1,
      time: '12:08',
      content: "Okay boss... No shii nah."
    },
  ])

  const user = useRef(0);
  const scrollview = useRef()
   
  return (
    <ScrollView 
      style={{backgroundColor: theme.colors.white, flex: 1}}
      ref={ref => scrollview.current = ref}
      onContentSizeChange={() => {
        scrollview.current.scrollToEnd({ animated: true })
      }}
    >
      {messages.map((message, index) => (
        <Message 
          key={index} 
          time={message.time} 
          isLeft={message.user !== user.current} 
          message={message.content}  />
      ))}
    </ScrollView>
  )
}

export default MessagesList

const styles = StyleSheet.create({})