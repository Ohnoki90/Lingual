import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker, Modal, Image, ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default class CompleteProfile extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTintColor: 'transparent',
        //header: null,
    headerTransparent: true,
  });

  render() {
    return (
      <ScrollView style={styles.container}>
      <View>
        <Image />
        <Icon />
      </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#edf2fc',
    alignItems: 'center',
    justifyContent: 'center',  },
});