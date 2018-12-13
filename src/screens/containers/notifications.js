import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';


export default class Notifications extends Component {
  static navigationOptions = {
    tabBarlabel: 'NOTIFICATIONS',
    tabBarIcon: ({tintColor}) => (
      <Icon 
       name="md-notifications"
       size={24}
       color={tintColor}
      />
    ),
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
