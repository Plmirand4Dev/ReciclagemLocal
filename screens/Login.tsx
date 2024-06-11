import {
    Avatar,
    Box,
    Button,
    Divider,
    Input,
    Slider,
    Text,
    TextField,
    Heading,
    VStack,
    Link,
    HStack,
    Center,
    NativeBaseProvider,
    Image
} from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { usePersistState } from "../hooks/usePersistState";
import auth from "@react-native-firebase/auth";
import logo1 from "../assets/images/logo.webp";

interface LoginProps { }

export const Login: React.FC<LoginProps> = ({ navigation }) => {
    const [initializing, setInitializing] = useState(true);
    const {
        user,
        forgotPassword,
        login,
    } = useContext(UserContext);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (<Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Center>
                <Center>
                    <Image size={150} borderRadius={100} source={logo1} alt="Alternate Text" />
                </Center>
            </Center>
            <Heading size="lg" fontWeight="600" color="coolGray.800" mt="3" _dark={{
                color: "warmGray.50"
            }}>
                Bem vindo
            </Heading>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">

            </Heading>
            <VStack space={3} mt="5">
                <TextField
                    onChangeText={(value) => {
                        setEmail(value);
                    }}
                    placeholder="Email"
                />

                <TextField
                    onChangeText={(value) => {
                        setPassword(value);
                    }}
                    type="password"
                    placeholder="Senha"
                />

                <Button
                    onPress={() => {
                        login({
                            email,
                            password,
                        });
                    }}
                >
                    login
                </Button>

                <Button
                    onPress={() => {
                        forgotPassword({
                            email,
                        });
                    }}
                >
                    recuperar senha
                </Button>

                <Button
                    onPress={() => navigation.navigate('Signup')}
                >
                    Criar Conta
                </Button>

                <Text fontSize="2xl" textAlign="center" mt={4}>
                    {user?.displayName || user?.email}
                </Text>
            </VStack>
        </Box>
    </Center>
    );
};