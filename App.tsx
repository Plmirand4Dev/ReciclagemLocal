// 

import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { UserProvider } from "./contexts/UserContext";
import { Routes } from "./routes/routes";
import { useEffect, useState, createContext, useContext } from "react";
import { LogBox, ActivityIndicator } from "react-native";
import auth from "@react-native-firebase/auth";
import { FirebaseProvider } from "./contexts/FirebaseContext";
import Home from "./screens/Home";
import { Login } from "./screens/Login";
import { Signup } from "./screens/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AuthStack() {
    return (<Stack.Navigator defaultScreenOptions={Home}>
        <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
    );
}

function RootNavigator() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    return (
        <NavigationContainer independent={true}>
            {user ? <Routes /> : <AuthStack />}
        </NavigationContainer>
    );
}


export default function App() {
    return (
        <NativeBaseProvider>
            <FirebaseProvider>
                <UserProvider>
                    <StatusBar style="auto" />
                    {/* <Routes />  */}
                    <RootNavigator />
                </UserProvider>
            </FirebaseProvider>
        </NativeBaseProvider>
    );
}