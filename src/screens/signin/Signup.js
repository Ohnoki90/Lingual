import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import RoundButton from '../../Components/RoundButton';
import {TransparentHeaderStyle} from '../../styles/navigation';


export default class Signin extends Component {
    static navigationOptions = ({navigation}) => ({
        headerStyle: TransparentHeaderStyle,
        headerTintColor: 'transparent',
        header: null,
    });
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    hello i'll be loading this screen later
                </Text>
                <RoundButton 
                 text='Sign up'
                 backgroundColor='#78b5fa'
                 color="#ffff"
                 handleOnPress={console.log('fuck off')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: '#edf2fc',
        flex: 1,
    },
});