import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from 'native-base';

import Home from '../screens/Home';
import Sobre from '../screens/Sobre';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer independent={true}>
                <Drawer.Navigator initialRouteName='Home'
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: "#009990" },
                        headerTintColor: '#fff'
                    }}>
                    <Drawer.Screen name='Home' component={Home} options={{ title: "Home" }} />
                    <Drawer.Screen name='Sobre' component={Sobre} options={{ title: "Sobre Nós" }} />
                    <Drawer.Screen name="Login" options={{ headerShown: false }} component={Login} />
                </Drawer.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    )
}

export default App;