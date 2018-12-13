import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, StatusBar, Image} from 'react-native';
import RoundButton from '../../../Components/RoundButton';
import {TransparentheaderStyle} from '../../../styles/navigation';

export default class Signin extends Component {
    static navigationOptions = ({navigation}) => ({
        headerStyle: TransparentheaderStyle,
        headerTintColor: 'transparent',
        header: null,
    });

    render() {
        
        return (
            <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Image source={require('../../../assets/logo/logo_transparent.png')} style={{width: 220, height: 180,}} />
                <Text style={styles.mainText} >Learn multiple languages</Text>
                <RoundButton 
                 text='Sign up'
                 color="#ffff"
                 backgroundColor='#78b5fa'
                 handleOnPress={() => this.props.navigation.navigate('Signup')}
                />
                <View style={styles.signText}>
                    <Text > Already a user ?</Text>
                    <TouchableOpacity
                     onPress={() => this.props.navigation.navigate('Signin')}
                    >
                        <Text style={{color: '#a1c4fd'}}> Sign in</Text>
                    </TouchableOpacity>
                </View>

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
        flex: 1
    },
    signText: {
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        alignSelf: 'center',
    },
    mainText: {
        fontSize: 24,
        fontWeight: "400",
        marginBottom: 10,
        bottom: 6,
        color: 'dimgray',
    },
});