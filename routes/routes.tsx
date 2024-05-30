import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "native-base";
import { View } from "react-native";
import Home from "../screens/Home";
import Icon from "react-native-vector-icons/AntDesign";
import Sobre from "../screens/Sobre";


type ITabRoutes = {
    Home: undefined;
    Sobre: undefined;
};

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

interface IMyTabs { }
export const Routes: React.FunctionComponent<IMyTabs> = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen
                    name="Dashboard"
                    component={Home}
                    options={{
                        title: "Dashboard",
                        tabBarIcon: () => (
                            <Icon name="dashboard" size={20} color="purple" />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Sobre}
                    options={{
                        title: "Perfil",
                        tabBarIcon: () => <Icon name="user" size={20} color="purple" />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer >
    );
};

export function generateRandomColorHexadecimal() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}