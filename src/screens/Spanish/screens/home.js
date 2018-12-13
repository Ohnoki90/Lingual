import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import Icon from '@expo/vector-icons/Ionicons';

export default class Home extends Component {
    render() {
        return (
            <View>
                <Icon 
                 name="md-chatboxes"
                 size={30}
                 color="black"
                />
                <Text>
                    Bitches wake the fuck up!!!!!!!
                </Text>
            </View>
        );
    }
}