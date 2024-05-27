import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image } from "native-base";

import logo1 from "../assets/images/Logo1.png";

const Login = () => {
    return <Center w="100%">
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
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input type="password" />
                    <Link _text={{
                        fontSize: "xs",
                        fontWeight: "500",
                        color: "indigo.500"
                    }} alignSelf="flex-end" mt="1">
                        Esqueceu sua senha?
                    </Link>
                </FormControl>
                <Button mt="2" colorScheme="green" onPress={() => navigation.navigate('Home')}>
                    Entrar
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }}>
                        Ja possui conta?.{" "}
                    </Text>
                    <Link _text={{
                        color: "green.500",
                        fontWeight: "medium",
                        fontSize: "sm"
                    }} href="#">
                        Criar conta
                    </Link>
                </HStack>
            </VStack>
        </Box>
    </Center>;
};

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Login />
            </Center>
        </NativeBaseProvider>
    );
};
