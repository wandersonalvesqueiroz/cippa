import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignmessageButtonTextBold
} from './styles';

import SignInput from '../../components/SignInput';

import CippaLogo from '../../assets/cippa_logo.svg';
import EmailIcon from '../../assets/icons/solid/envelope.svg';
import LockIcon from '../../assets/icons/solid/lock.svg';
import PersonIcon from '../../assets/icons/solid/user.svg';

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = () => {
        
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    return (
        <Container>
            <CippaLogo width="100%" height="160" />
            <InputArea>

                <SignInput
                    IconSvg={PersonIcon} 
                    placeholder="Digite seu Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

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
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignmessageButtonTextBold>Faça o Login</SignmessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}