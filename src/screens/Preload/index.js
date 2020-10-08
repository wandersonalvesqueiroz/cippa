import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { Container, LoadingIcon, BackCippa } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import CippaLogo from '../../assets/cippa_logo.svg';

export default () => {

    const navigation = useNavigation();

    // useEffect(() => {
    //     const checkToken = async () => {
    //         const token = await AsyncStorage.getItem('token');
    //         if (token) {
    //             //validar token
                
    //         } else {
    //             navigation.navigate('SignIn');
    //         }
    //     }
    //     checkToken();
    // }, []);

    return (
        <BackCippa 
            source={require('../../assets/back_cippa.png')}
            resizeMode='cover' 
        >
        <Container>
            
            <CippaLogo width="100%" height="240" />
            <LoadingIcon size="large" color="#FFFFFF" />
            
        </Container>
        </BackCippa>
    );
}