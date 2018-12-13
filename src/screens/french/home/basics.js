import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import Main from '../../../Components/buttons/main';
import Icon from '@expo/vector-icons/Ionicons';

export default class Basics extends Component {

    startLearning =() => {
        //this.props.navigation.navigate('basics1');
        console.log('this is getting somewhere');
      }
    render() {
        return (
            <View style={styles.container}>
            <Main 
            text="Basics 1" //basic words
             icon={
              <Icon 
              name="ios-create-outline"
              size={36}
              color="#ef7e6d"
              />
            }
            color="#ef7e6d"
            handleOnPress={this.startlearning 
            // this.props.navigate.navigation('FrenchBasics1')  
            }
            backgroundColor="#ffff"
            />
            <Main 
            text="Basics 2" //colors
             icon={
              <Icon 
              name="ios-create-outline"
              size={36}
              color="#ef6d72"
              />
            }
            color="#ef6d72"
            handleOnPress={this.startlearning
            // this.props.navigate.navigation('FrenchBasics2')
            }
            backgroundColor="#ffff"
            />
            <Main 
            text="Basics 3" //animals
             icon={
              <Icon 
              name="ios-create-outline"
              size={36}
              color="#efad70"
              />
            }
            color="#efad70"
            handleOnPress={this.startlearning
                    // this.props.navigate.navigation('FrenchBasics3')
            }
            backgroundColor="#ffff"
            />
            <Main 
            text="Basics 4" //abstract objects
             icon={
              <Icon 
              name="ios-create-outline"
              size={36}
              color="#efcf6c"
              />
            }
            color="#efcf6c"
            handleOnPress={this.startlearning
            // this.props.navigate.navigation('FrenchBasics4')
            }
            backgroundColor="#ffff"
            />
            <Main 
            text="Basics 5" //
             icon={
              <Icon 
              name="ios-create-outline"
              size={36}
              color="#72cf8c"
              />
            }
            color="#72cf8c"
            handleOnPress={this.startlearning
            // this.props.navigate.navigation('FrenchBasics5')
            }
            backgroundColor="#ffff"
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //height: 100, marginTop: 20,
        flexDirection: 'row',
    }
})