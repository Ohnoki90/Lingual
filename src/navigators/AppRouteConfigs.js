import {createStackNavigator} from 'react-navigation';
//import {connect} from 'react-redux';
//import PropTypes from 'prop-types';
import Welcome from '../screens/onboarding/screens/Welcome';
import Signin from '../screens/signin/index';
import Signup from '../screens/signin/Signup';
//import Open from '../Open';
import Landing from '../screens/Landing';
import CompleteProfile from '../screens/profile/CompleteProfile'


const AppRouteConfigs = createStackNavigator({
    //Open: { screen: Open},
    Welcome: {screen: Welcome},
    CompleteProfile: {screen: CompleteProfile},
    Signin: {screen: Signin},
    Signup: {screen: Signup},
    Landing: {screen: Landing,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
          },},
},{
    initialRouteName: 'Welcome',
});

export default AppRouteConfigs;