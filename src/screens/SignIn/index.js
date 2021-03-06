import React, { useState, useContext } from 'react';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignmessageButtonTextBold,
    BackCippa
} from './styles';

import Api from '../../Api';
import UserContext from '../../contexts/UserContext';

import SignInput from '../../components/SignInput';

import CippaLogo from '../../assets/cippa_logo.svg';
import EmailIcon from '../../assets/icons/solid/envelope.svg';
import LockIcon from '../../assets/icons/solid/lock.svg';

export default () => {

    // const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if (emailField != '' && passwordField != '') {
            let json = await Api.signIn(emailField, passwordField);

            if (json.token) {

                await AsyncStorage.setItem('token', json.token);

                navigation.reset({
                    routes: [{ name: 'MainTab' }]
                });

            } else {
                alert("E-mail e/ou senha errados");
            }

        } else {
            Alert.alert('Atenção', 'Preencha os campos corretamente!')
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'RecoveryPassword' }]
        });
    }

    return (
        <BackCippa
            source={require('../../assets/back_cippa.png')}
            resizeMode='cover'
        >
            <Container>
                <CippaLogo width="100%" height="200" />
                <InputArea>

                    <SignInput
                        IconSvg={EmailIcon}
                        placeholder="Digite seu e-mail"
                        value={emailField}
                        onChangeText={t => setEmailField(t)}
                    />

                    <SignInput
                        IconSvg={LockIcon}
                        placeholder="Digite sua senha"
                        value={passwordField}
                        onChangeText={t => setPasswordField(t)}
                        password={true}
                    />

                    <CustomButton onPress={handleSignClick}>
                        <CustomButtonText>ACESSAR</CustomButtonText>
                    </CustomButton>
                </InputArea>

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonText>Esqueci minha</SignMessageButtonText>
                    <SignmessageButtonTextBold>Senha</SignmessageButtonTextBold>
                </SignMessageButton>

            </Container>
        </BackCippa>
    );
}