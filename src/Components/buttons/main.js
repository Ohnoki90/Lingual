import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Main extends Component {

  render() {
      const {text, icon, backgroundColor, handleOnPress, color} = this.props;
      
    return (
      <TouchableOpacity style={[{backgroundColor}, styles.container]} onPress={handleOnPress}>
          <View style={styles.wrapper}>
              {icon}
              <Text style={[{color}, styles.text]}>{text}</Text>
          </View>
      </TouchableOpacity>
    );
  }
}

Main.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    handleOnPress: PropTypes.func,
    icon: PropTypes.object,
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        elevation: 5,
        alignItems: 'center',
        width: 75,
        height: 80,
        borderRadius: 8,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        width: '80%',
        textAlign: 'center',
       //color: 'dimgrey',
        fontWeight: '400',
    },
    wrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        
    },
});
