import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { Text } from "native-base";
import { View } from "react-native";
import Home from "../screens/Home";
import Icon from "react-native-vector-icons/AntDesign";
import Sobre from "../screens/Sobre";

type ITabRoutes = {
    home: undefined;
    Sobre: undefined;
    Setting: undefined;
};

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

interface IMyTabs { }
export const Routes: React.FunctionComponent<IMyTabs> = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Settings"
                    component={Screen}
                    options={{
                        title: "Configurações",
                        tabBarIcon: () => <Icon name="setting" size={20} color="purple" />,
                    }}
                />
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home",
                        tabBarIcon: () => (
                            <Icon name="Home" size={20} color="green" />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Sobre"
                    component={Sobre}
                    options={{
                        title: "Sobre",
                        tabBarIcon: () => <Icon name="user" size={20} color="green" />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export function generateRandomColorHexadecimal() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const Screen = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: generateRandomColorHexadecimal(),
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>{Math.random()}</Text>
        </View>
    );
};