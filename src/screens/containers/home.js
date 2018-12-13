import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Basics from '../french/home/basics';
import Words from '../french/home/words';
import Header from '../french/home/header';
import Phrases from '../french/home/phrases';

const {height, width} = Dimensions.get('window');

class Home extends Component {
  static navigationOptions = {
    tabBarlabel: 'HOME',
    tabBarIcon: ({tintColor}) => (
      <Icon 
       name="md-school"
       size={24}
       color={tintColor}
      />

    ),
  };
  
  

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Header />
          <ScrollView scrollEventThrottle={10} >
          <View style={{flex: 1, paddingTop: 15 }}>
            <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 15}}>Basics</Text>
            <View style={{height: 100, marginTop: 15}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Basics />
              </ScrollView>
            </View>
            <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 15}}>Words</Text>
            <View style={{height: 100, marginTop: 15}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Words />
              </ScrollView>
            </View>
            <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 15}}>Phrases</Text>
            <View style={{height: 100, marginTop: 15}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Phrases />
              </ScrollView>
            </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    //display: 'flex',
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#edf2fc',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default Home;

