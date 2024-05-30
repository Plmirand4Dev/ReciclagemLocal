import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "native-base";
import { View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Home from "../screens/Home";
import Sobre from "../screens/Sobre";
import Locais from "../screens/Locais";
import Profile from "../screens/ProfileScreen";


type ITabRoutes = {
    Locais: undefined;
    Sobre: undefined;
};

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

interface IMyTabs { }
export const Routes: React.FunctionComponent<IMyTabs> = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home",
                        tabBarIcon: () => (
                            <Icon name="home" size={20} color="green" />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Locais"
                    component={Locais}
                    options={{
                        title: "Locais",
                        tabBarIcon: () => (
                            <Icon name="enviroment" size={20} color="green" />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Sobre"
                    component={Sobre}
                    options={{
                        title: "Sobre",
                        tabBarIcon: () => <Icon name="team" size={20} color="green" />,
                    }}
                />
                <Tab.Screen
                    name="Perfil"
                    component={Profile}
                    options={{
                        title: "Perfil",
                        tabBarIcon: () => <Icon name="user" size={20} color="green" />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer >
    );
};

export function generateRandomColorHexadecimal() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}