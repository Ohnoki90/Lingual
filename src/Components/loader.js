import React, { Component } from 'react';
import {View, Text, Animation, Easing, Modal, Image, StyleSheet, } from 'react-native';
import {PropTypes} from 'prop-types';

export default class Loader extends Component {
    render() {
        const {animationType, modalVisible} = this.props;
        return (
            <Modal visible={modalVisible}
             animationType={animationType}
             transparent={true}
            >
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Image 
                         source={require('../assets/Eclipse.gif')}
                         style={styles.image}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

Loader.propTypes = {
    animationType: PropTypes.string.isRequired,
    modalVisible: PropTypes.bool.isRequired,
};

const styles= StyleSheet.create({
    wrapper: {
        zIndex: 9,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,6,0.4)',
        top: 0,
        left: 0,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    container: {
        width: 90,
        height: 90,
        backgroundColor: 'white',
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -45,
        marginTop: -45,
        backgroundColor: 'transparent',
    },
    image: {
        width: 90,
        height: 90,
        borderWidth: 15,
        backgroundColor: 'transparent',
    },
});