{/*import Profile from './src/screens/Profile';
import Notifications from './src/screens/Notifications';
import Home from './src/screens/Home';
import Logout from './src/screens/Logout';
import Settings from './src/screens/Settings'; */}
import { createDrawerNavigator } from 'react-navigation';

import SideMenu from './src/sideMenu/sideMenu';

const Routes = createDrawerNavigator({
    //Home: {screen: Home},
    //Notifications: {screen: Notifications},
    //Profile: {screen: Profile},
    //Settings: {screen: Settings},
    //Logout: {screen: Logout}
},
{
    contentComponent: SideMenu,
    drawerWidth: 300,
    initialRoute: 'Home'
}
);

export default Routes;


{/*
    know when to use this 

    this.props.navigation.navigate('DrawerOpen');
    this.props.navigation.navigate('DrawerClose');
 */}