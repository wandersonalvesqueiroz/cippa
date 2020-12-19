import React, { useState, Component } from 'react';
import { StyleSheet, View, TextInput, ScrollView} from 'react-native';
import { Text } from 'react-native-elements';

import {
    Container,
    Input,
    InputArea,
    CustomButton,
    CustomButtonText,
} from './styles';

import Api from '../../Api';

class AddUser extends Component {

    handleAddUserClick = () => {
        navigation.reset({
            routes: [{ name: 'User' }]
        });
    }

    render() {

        // const [cpfField, setCpfField] = useState('');
        // const [emailField, setEmailField] = useState('');
        // const [confirmEmailField, setConfirmEmailField] = useState('');
        
        // const navigation = useNavigation();

        // const handleBackButtonClick = () => {
        //     navigation.reset({
        //         routes: [{ name: 'User' }]
        //     });
        // }

        return (
            <Container>
                <View>
                    <Text h4 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Cadastrar Usuário</Text>
                </View>


                <Input name="name" placeholder="Nome"/>
                <Input name="birthday" placeholder="Data de Nascimento"/>
                <Input name="email" placeholder="E-mail"/>
                <Input name="cpf" placeholder="CPF"/>
                <Input name="professional_register" placeholder="Registro Profissional"/>
                <Input name="rg" placeholder="Orgão Emissor"/>
                <Input name="rg" placeholder="Data de Emissão"/>
                <Input name="rg" placeholder="Logradouro"/>
                <Input name="rg" placeholder="Número"/>
                <Input name="rg" placeholder="Complemento"/>
                <Input name="rg" placeholder="Bairro"/>
                <Input name="rg" placeholder="Cidade"/>
                <Input name="rg" placeholder="CEP"/>

                    {/*
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
            </Container >
        );
    }

}

export default AddUser;