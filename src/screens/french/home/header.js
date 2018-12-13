import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, StatusBar} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default class Header extends Component {
    componentWillMount() {
        this,startHeaderHeight = 80
        if(Platform.OS == 'android') {
            this.startHeaderHeight = 100 - StatusBar.currentHeight
        }
    }
    render() {
        return(
            <View style={StyleSheet.wrapper}>
                <Text>Hi i am Dorothy</Text>
                <Text>Level 1</Text>  
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: this.startHeaderHeight,
        flex: 1, 
        backgroundColor: '#edf2fc',
        flexDirection: 'column',
        padding: 10, 
        marginTop: Platform.OS == 'android' ? 30 : null,
        
    }
});