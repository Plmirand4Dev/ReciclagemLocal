// 

import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { UserProvider } from "../contexts/UserContext";
import { Routes } from "../routes/routes";
import { useEffect, useState } from "react";
import { LogBox } from "react-native";
import auth from "@react-native-firebase/auth";
import { FirebaseProvider } from "../contexts/FirebaseContext";

export default function App() {
    return (
        <NativeBaseProvider>
            <FirebaseProvider>
                <UserProvider>
                    <StatusBar style="auto" />
                    <Routes />
                </UserProvider>
            </FirebaseProvider>
        </NativeBaseProvider>
    );
}