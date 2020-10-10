import React, { useState } from 'react';
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
import LockIcon from '../../assets/icons/solid/lock.svg';

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != '') {
            let json = await Api.signIn(emailField, passwordField);
            if(json.token) {
                alert("DEU CERTO");
            } else {
                alert("E-mail e/ou senha errados");
            }
        } else {
            alert("Preencha os campos!")
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
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
                    onChangeText={t=>setEmailField(t)}
                />
                
                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>ACESSAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignmessageButtonTextBold>Cadastre-se</SignmessageButtonTextBold>
            </SignMessageButton>

        </Container>
        </BackCippa>
    );
}