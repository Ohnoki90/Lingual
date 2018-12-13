import {addNavigationHelpers, createStackNavigator} from 'react-navigation';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Home from './screens/home';



export const Spanish = createStackNavigator({
    Home: { screen: Home},
},{
    initialRouteName: 'Home',
});

const AppWithNavigationState = ({ dispatch, nav, listener}) => (
    <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav, addListener: listener})} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps) (AppWithNavigationState);