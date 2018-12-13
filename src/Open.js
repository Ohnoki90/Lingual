import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';

import Welcome from '../src/screens/onboarding/screens/Welcome';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'View Images, good illustrations',
    text:
      'Nice illustrations accompanied by words to better understand the language',
    icon: 'md-photos',
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: 'somethun1',
    title: 'Level up',
    text: 'Progress with daily lessons to level up.',
    icon: 'md-speedometer',
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'somethun2',
    title: 'Bot Interactions',
    text:
      'Interact with the chat bots to bette runderstand the use of words in the sentence',
    icon: 'md-chatbubbles',
    colors: ['#29ABE2', '#4F00BC'],
  },
];

export default class Open extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  _onDone = () => {
    this.setState({ showRealApp: true });
  };

  _renderItem = props => (
    <LinearGradient
      style={[
        styles.mainContent,
        {
          paddingTop: props.topSpacer,
          paddingBottom: props.bottomSpacer,
          width: props.width,
          height: props.height,
        },
      ]}
      colors={props.colors}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}>
      <Ionicons
        style={{ backgroundColor: 'transparent' }}
        name={props.icon}
        size={200}
        color="white"
      />
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );

  render() {
    
        if (this.state.showRealApp) {
          return <Welcome />;
        }
        else {
          return <AppIntroSlider
          slides = {
            slides
          }
          onDone = {
            this._onDone
          }
          renderItem = {
            this._renderItem
          }
          bottomButton
          showPrevButton
          showSkipButton
          onSkip = {
            () => this.props.navigation.navigate('Welcome')
          }
          // hideNextButton
          // hideDoneButton
          />;
        }
      }
    }
