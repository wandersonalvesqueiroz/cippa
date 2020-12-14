import React, { useState, Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Text } from 'react-native-elements';

import SignInput from '../../components/SignInput';

import {
    Container,
    ProfileButton,
    InputArea,
    CustomButton,
    CustomButtonText,
} from './styles';

import Api from '../../Api';

import CippaLogo from '../../assets/cippa_logo.svg';
import UserIcon from '../../assets/icons/solid/user-circle.svg';
import MenuIcon from '../../assets/icons/solid/bars.svg';
import EmailIcon from '../../assets/icons/solid/envelope.svg';

class AddUser extends Component {

    handleProfileButtonClick = () => {
        this.props.navigation.reset({
            routes: [{ name: 'Profile' }]
        });
    }

    handleAddUserClick = () => {
        navigation.reset({
            routes: [{ name: 'User' }]
        });
    }

    render() {

        // const [nameField, setNameField] = useState('');
        // const [cpfField, setCpfField] = useState('');
        // const [emailField, setEmailField] = useState('');
        // const [confirmEmailField, setConfirmEmailField] = useState('');
        

        return (
            <Container>
                <Header

                    leftComponent={
                        <MenuIcon width="36" height="36" style={{ marginLeft: 10 }} fill="#FFFFFF" onPress={() => this.props.navigation.openDrawer()} />
                    }
                    centerComponent={
                        <CippaLogo width="100%" height="80" />
                    }
                    rightComponent={
                        <ProfileButton onPress={this.handleProfileButtonClick}>
                            <UserIcon width="36" height="36" fill="#FFFFFF" />
                        </ProfileButton>
                    }

                    containerStyle={{
                        backgroundColor: '#1E661C',
                        justifyContent: 'space-around',
                        height: 140
                    }}
                />

                <View>
                    <Text h4 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Cadastrar Usuário</Text>
                </View>

                <InputArea>

                    {/* <SignInput
                        placeholder="Nome"
                        value={nameField}
                        // onChangeText={t => setNameField(t)}
                    />

                    <SignInput
                        placeholder="CPF"
                        value={cpfField}
                        // onChangeText={t => setCpfField(t)}
                    />

                    <SignInput
                        IconSvg={EmailIcon}
                        placeholder="Digite seu e-mail"
                        // value={emailField}
                        // onChangeText={t => setEmailField(t)}
                    />

                    <SignInput
                        IconSvg={EmailIcon}
                        placeholder="Confirme seu e-mail"
                        // value={confirmEmailField}
                        // onChangeText={t => setConfirmEmailField(t)}
                    /> */}

                    <CustomButton onPress={this.handleAddUserClick}>
                        <CustomButtonText>CADASTRAR</CustomButtonText>
                    </CustomButton>
                </InputArea>

            </Container >
        );
    }

}

export default AddUser;