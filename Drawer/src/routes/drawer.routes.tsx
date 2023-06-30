import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Logout } from '../screens/Logout';

export function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{drawerStyle: {backgroundColor: '#fff3db',width: 240,},headerStyle: {backgroundColor:'#fff3db'}}}>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Login" component={Login}/>
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

