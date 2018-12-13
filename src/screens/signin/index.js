import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import {PropTypes} from 'prop-types';
import RoundedButton from '../../Components/RoundButton';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  ActionCreators from '../../Components/redux/actions';

import Icon from '@expo/vector-icons/Ionicons';
import InputField from '../../Components/inputField';
import Loader from '../../Components/loader';
import {TransparentHeaderStyle} from '../../styles/navigation';


class Signin extends Component {
    static navigationOptions = ({navigation}) => ({
        headerStyle: TransparentHeaderStyle,
        headerTintColor: 'transparent',
        //header: null,
        headerTransparent: true,
    });

    constructor(props) {
        super(props);
        this.state = {
            emailAddress: "",
            password: '',
            validEmail: false,
            validPassword: false,
            formValid: true,
            loadingVisible: false,
        };
    }
    
    _onPress = () => {
        console.log('hiiii');
    }

    loginButton = () => {
        this.setState({loadingVisible: true});

        const { logIn, navigation } = this.props;
        const { navigate } = navigation;

        setTimeout(() => { // remove timeoout later after linking with backend
            const { emailAddress, password } = this.state;
            if (logIn(emailAddress, password)) {
                this.setState({ formValid: true, loadingVisible: false });
                navigate('Landing');
              } else {
                this.setState({ formValid: false, loadingVisible: false });
              }
            }, 1000);
    }

    emailChange = (email) => { //fuck email regex. confusing piece of shit
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validEmail } = this.state;
        this.setState({emailAddress: email});
        if (!validEmail) {
            if(emailCheckRegex.test(email)) {
               this.setState({validEmail: true});
            }
        } else if (!emailCheckRegex.test(email)) {
                this.setState({validEmail: false});
            }
        }
    

    passwordChange = (password) => {
        const {validPassword} = this.state;
        this.setState({ password });
        if (!validPassword) {
            if(password.length > 8) {
                this.setState({validPassword: true});
            }
        } else if (password.length <= 8) {
            this.setState({validPassword: false});
        }
    }
    // :(
    toggleButton = () => {
        const {validEmail, validPassword} = this.state;
        if (validEmail && validPassword) {
            return false;
        }
        return true;
        
    }

  render() {
    var Color = ['#9587fd','#78b5fa'];
    const { formValid, loadingVisible, validEmail, validPassword} = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
      <StatusBar barStyle='default' />
      <View>
            <Text style={{fontSize: 30, fontWeight: '400', marginBottom: 30, color: 'dimgray', textAlign: 'center' }}>Log in to Lingual</Text>
            <InputField 
             labelText="Email Address"
             labelTextSize={16}
             labelColor='#a1c4fd'
             textColor="dimgray"
             border="#d3d7e0"
             inputType="email"
             onChangeText={this.emailChange}
             showCheckmark={validEmail}
            />
            <InputField 
             labelText="Password"
             labelTextSize={16}
             labelColor='#a1c4fd'
             textColor="dimgray"
             border="#d3d7e0"
             inputType="password"
             onChangeText={this.passwordChange}
             showCheckmark={validPassword}
            />
            <RoundedButton 
                text='Log in'
                color='#0000'
                handleOnPress={this.loginButton}
                backgroundColor='#78b5fa'
                disabled={this.toggleButton()}
                />
            <View>
                <Text style={{fontSize: 20, fontWeight:'300', color: '#d3d7e0'}}> ───────  or  ─────── </Text>
            </View>
            <RoundedButton 
                text='Sign in with google'
                color='#0000'
                handleOnPress={this._onPress}
                backgroundColor='#78b5fa'
                icon={<Icon name="logo-google" size={22} style={styles.icons} />}
            />
            <RoundedButton 
                    text='Sign in with facebook'
                    color='#0000'
                    backgroundColor='#78b5fa'
                    handleOnPress={this._onPress}
                    icon={<Icon name="logo-facebook" size={22} style={styles.icons} />}
                />
        </View>
        <Loader 
         animationType="fade"
         modalVisible={loadingVisible}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#edf2fc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons: {
        left: 30,
        zIndex: 8,
        position: 'relative',
        color: 'dimgray'
    },
});

Signin.propTypes = {
    logIn: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };
  

const mapStateToProps = (state) => {
    return {
        loggedInStatus: state.loggedInStatus,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);