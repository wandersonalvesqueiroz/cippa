import React, { useState } from 'react';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
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

import SignInput from '../../components/SignInput';

import CippaLogo from '../../assets/cippa_logo.svg';
import EmailIcon from '../../assets/icons/solid/envelope.svg';

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');

    const handleSignClick = async () => {
        if (emailField != '') {
            let res = await Api.recoveryPassword(emailField);

            if (res.sucesso) {
                Alert.alert('Sucesso!', res.sucesso);
                navigation.reset({
                    routes: [{ name: 'SignIn' }]
                });
            } else {
                Alert.alert('Atenção', res.error.message);
            }

        } else {
            Alert.alert('Atenção', 'Digite o e-mail!')
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
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
                        placeholder="Informe o email"
                        value={emailField}
                        onChangeText={t => setEmailField(t)}
                    />

                    <CustomButton onPress={handleSignClick}>
                        <CustomButtonText>RECUPERAR</CustomButtonText>
                    </CustomButton>
                </InputArea>

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonText>Voltar para o</SignMessageButtonText>
                    <SignmessageButtonTextBold>Login</SignmessageButtonTextBold>
                </SignMessageButton>


            </Container>
        </BackCippa>
    );
}