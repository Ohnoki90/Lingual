import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Text, Platform} from 'react-native';
import {AppLoading, Asset, Font, Icon} from 'expo';

import {Provider} from 'react-redux';
//import store from './src/Components/redux/store';
import { addNavigationHelpers } from 'react-navigation';

import { Root, configureStore} from './src/navigators/AppNavigator';



export default class App extends Component {

  render() {
    /* if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <Provider store={configureStore({})}>
          <AppLoading 
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
          />
        </Provider>
      );
    } else { */
      return (
        <Provider store={configureStore({})}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Root />
        </View>
        </Provider>
      );
    //}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc'
  },
});

  {/*componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  }; 

 state={
    isLoadingComplete: false
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        ...Icon.Ionicons.font,
      }),
    ]);
  }

  _handleLoadingError = error => {
    console.warn(error);
  }

  _handleFinishLoading = () => {
    this.setState({
      isLoadingComplete: true
    });
  }  */}