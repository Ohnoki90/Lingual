import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';


export default class RoundedButton extends Component {
    render() {
        const { text, color, disabled, backgroundColor, handleOnPress, icon } = this.props;
        const opacityStyle = disabled ? 0.1 : 0.7;
        return (
            <TouchableHighlight style={[{ backgroundColor, opacity: opacityStyle },
            styles.wrapper]}
            disabled={disabled}
                onPress={handleOnPress}>
                <View style={styles.buttonTextWrapper}>
                    {icon}
                    <Text style={[{ color }, styles.buttonText]}>
                        {text}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

RoundedButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress: PropTypes.func,
    disabled: PropTypes.bool,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 15,
        paddingVertical: 15,
        borderRadius: 40,
        marginBottom: 18,
        alignItems: 'center',
        elevation: 4,
        width: '85%',
    },
    buttonTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonText: {
        fontSize: 17,
        width: '100%',
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    },
});

