import  { createBottomTabNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';


import Home from '../screens/containers/home';
import Profile from '../screens/containers/profile';
import Chats from '../screens/containers/chats';
import Notifications from '../screens/containers/notifications';

const TabNavigator = createBottomTabNavigator({
    Home: {screen: Home},
    Chats: {screen: Chats},
    Profile: {screen: Profile},
    Notifications: {screen: Notifications}
}, {
    tabBarOptions: {
        fontWeight: '600',
        marginBottom: 5,
    },
    activeTintColor: '#a1c4fd',
    style: {
      backgroundColor: '#edf2fc',
      shadowOffset: {width: 5, height: 3, },
      borderTopWidth: 0,
      elevation: 4,
    }
});


export default TabNavigator;

{/* 
  const CustomTabBarIcon = (name, size) => {
    const icon = ({ tintColor }) => (
      <Icon
        name={name}
        size={size}
        color={tintColor}
      />
    );
  
    icon.propTypes = {
      tintColor: PropTypes.string.isRequired,
    };
  
    return icon;
  };

*/}