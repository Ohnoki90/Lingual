import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import PropTypes from 'prop-types';

export default class InputField extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            scaleCheckmarkValue: new Animated.Value(0),
            secureInput: props.inputType === 'text' || props.inputType ==='email' ? false : true,
        };
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
    }

    scaleCheckmark = (value) => {
        Animated.timing(
            this.state.scaleCheckmarkValue, 
            {
                toValue: value,
                duration:400,
                easing: Easing.easeOutBack,
            },
        ).start();
    }

    toggleShowPassword() {
        this.setState({secureInput: !this.state.secureInput})
    }

    render() {
    
        const {
            showCheckmark,
            inputType,
            labelText,
            labelTextSize,
            onChangeText,
            labelColor,
            textColor,
            borderBottomColor,
        } = this.props;
      const fontSize = labelTextSize || 14;
      const {secureInput, scaleCheckmarkValue} = this.state;
      const color = labelColor || 'black';
      const inputColor = textColor || 'black';
      const border = borderBottomColor || 'transparent';
      const keyboardType = inputType === 'email' ? 'email-address' : 'default';

      const iconScale = scaleCheckmarkValue.interpolate(
        {
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1.6, 1],
        }
    );
        const scaleValue = showCheckmark ? 1 : 0;
        this.scaleCheckmark(scaleValue);
    return (
      <View styel={styles.wrapper}>
        <Text style={[{fontSize, color}, styles.labelText]}> {labelText} </Text>
        {inputType === 'password' ? (
            <TouchableOpacity onPress={this.toggleShowPassword} style={styles.show} >
                <Text style={styles.showText} >{secureInput ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
        ) : null}
        <Animated.View style={{bottom: 6, transform:[{scale: iconScale}]}}>
            <Icon 
             size={22}
             style={{zIndex: 8, position: 'absolute', right: 0, color: '#d3d7e0' }}
             name="md-checkmark-circle-outline"/>
        </Animated.View>
        <TextInput 
         autoCorrect={false}
         secureTextEntry={ secureInput }
         onChangeText={onChangeText}
         keyboardType={keyboardType}
         style={[{color: inputColor, borderBottomColor: border }, styles.input]}
        />
      </View>
    );
  }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    showCheckmark: PropTypes.bool,
};

const styles=StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    labelText: {
        fontWeight: '500',
        marginBottom: 10,
    },
    input: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    show:{
        position: 'absolute',
        right: 0,
    },
    showText: {
        fontWeight: '700',
        color: 'lightgray',
    },
});


