import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';


export default class Profile extends Component {
  static navigationOptions = {
    tabBarlabel: 'PROFILE ',
    tabBarIcon: ({tintColor}) => (
      <Icon 
       name="md-contact"
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

