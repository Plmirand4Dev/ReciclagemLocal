import { View, Text, StyleSheet, StatusBar, VirtualizedList, Button } from 'react-native';
import React, { useState } from 'react';
import { Skeleton, Box, Image, VStack, Center, NativeBaseProvider } from 'native-base';


// const Example = () => {
export default function Home({ navigation }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [text, setText] = useState('');
    setTimeout(() => {
        setIsLoaded(true);
        setText('Lose yourself in the greens of nature, the ones that make you strong. Come visit us at the Greenway Park, and we will be happy to show you around.');
    }, 5000);
    return (<Center w='100%'>
        <Box w='90%' maxWidth='400'>
            <VStack maxWidth='400' borderWidth='1' space={8} overflow='hidden' rounded='md' _dark={{
                borderColor: 'coolGray.500'
            }} _light={{
                borderColor: 'coolGray.200'
            }}>
                <Skeleton h='40' isLoaded={isLoaded}>
                    <Image h='40' source={{
                        uri: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
                    }} />
                </Skeleton>
                <Skeleton.Text lines={4} px='4' isLoaded={isLoaded}>
                    <Text px='4' fontSize={'md'} lineHeight={'20px'}>
                        {text}
                    </Text>
                </Skeleton.Text>
                <Skeleton px='4' mb='4' rounded='md' startColor='primary.100' isLoaded={isLoaded}>
                    <Button m='4' title='Explore'></Button>
                </Skeleton>
            </VStack>
        </Box>
    </Center>)
}
// export default () => {
// return (
//   <NativeBaseProvider>
//     <Center flex={1} px='3'>
//         <Example />
//     </Center>
//   </NativeBaseProvider>
// );
// }