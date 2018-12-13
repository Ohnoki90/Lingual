//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SideMenuStyle';
import {NavigationActions } from 'react-navigation';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
//import {LightText, BoldText} from '../Components/text';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                userName: '',
                level: 0,
            }
        }
    }

    navigateToScreen = (route) => () => {
        const navigationAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigationAction);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar 
                 backgroundColor="#0000"
                 barStyle="default"
                 translucent={true}
                />
                <View style={styles.container}>
                    <View style={{flex:0.3}}>
                        <Image source={require('../assets/images/girl.jpg')} />
                    </View>
                    <View style={{margin: 20, flex: 1}}>
                        {/*replace with a custom text component*/}
                        <Text style={{fontSize: 20, color: '#00e9c2', marginBottom: 5}}>Ohnoki90</Text>
                        <View style={{paddingHorizontal: 10, paddingVertical:5, width: 135, borderRadius: 4, borderWidth: 0.5, borderColor: '#f5f7fa'}}>
        <Text style={{fontSize: 20, color:'#00e9c2'}}> {/*add an onpress to this text later lining to a page showing progres from all levels*/}
                                Level: {this.state.level}
                            </Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                  <TouchableOpacity
                   onPress={this.props.navigation.navigate('Home')}
                   style={[styles.flexRow, styles.navItemStyle]}
                  >
                      <Icon 
                      name="md-home"
                      style={{fontSize: 24, color: 'grey', fontWeight: '700'}}
                      />
                      <Text>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={this.props.navigation.navigate('Notifications')}
                     style={[styles.flexRow, styles.navItemStyle]}
                    >
                      <Icon 
                      name="md-notifications"
                      style={{fontSize: 24, color: 'grey', fontWeight: '700'}}
                      />
                      <Text>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={this.props.navigation.navigate('Profile')}
                     style={[styles.flexRow, styles.navItemStyle]}
                    >
                      <Icon 
                      name="md-contact"
                      style={{fontSize: 24, color: 'grey', fontWeight: '700'}}
                      />
                      <Text>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.props.navigation.navigate('Settings')}
                    style={[styles.flexRow, styles.navItemStyle]}
                    >
                      <Icon 
                      name="md-settings"
                      style={{fontSize: 24, color: 'grey', fontWeight: '700'}}
                      />
                      <Text>Settings</Text>
                  </TouchableOpacity>
                </ScrollView>
                <View>
                  <TouchableOpacity>
                    <Icon 
                     name="md-log-out"
                     style={{ fontSize: 24, color: "#C9C9C9", fontWeight: "700" }}
                    />
                    <Text style={styles.navLinkStyle}>Logout</Text>
                  </TouchableOpacity>

                </View>
            </View>
        );
    }
}
SideMenu.PropTypes = {
    navigation: PropTypes.object
};
