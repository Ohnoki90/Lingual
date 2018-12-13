import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';


export default class Chats extends Component {
  static navigationOptions = {
    tabBarlabel: 'CHATS',
    tabBarIcon: ({tintColor}) => (
      <Icon 
       name="md-chatboxes"
       size={24}
       color={tintColor}
      />
    ),
  };
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Hello I'm emily and i'll be joining you very soon so please wait </Text>
      </View>
    );
  }
}
