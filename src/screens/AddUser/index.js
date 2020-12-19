import React, { useState, Component } from 'react';
import { StyleSheet, View, TextInput, ScrollView} from 'react-native';
import { Text } from 'react-native-elements';

import {
    Container,
    Input,
    InputArea,
    Scroll,
    CustomButton,
    CustomButtonText,
} from './styles';

import Api from '../../Api';

const initialState = { 
    name: '', 
    email: '', 
    cpf: '', 
    dateOfBirth: '', 
    professionalRegistry: '', 
    rg: '', 
    emittingOrgan: '', 
    issueDate:'',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    cep: ''
}

class AddUser extends Component {

    userId = this.props.route.params?.userId ?? null

    state = {
        ...initialState
    }

    loadListUser(userId) {
        Api.user(userId).then(user => this.setState({ ...user }))
    }

    componentDidMount() {
        
        if(this.userId){
            this.loadListUser(this.userId)
        }
    }

    saveUser = () => {
        const newUser = {
            ...this.state
        }
        if(newUser.id){
            Api.editUser(newUser)
                .then((res) => {
                    if (res.ok) {
                        alert('Cadastro alterado!')
                        this.loadListUser(this.userId)
                    } else {
                        alert('Erro ao alterar cadastro!')
                    }
                })
        } else {
            Api.addUser(newUser)
                .then((res) => {
                    if (res.ok) {
                        alert('Cadastro realizado!')
                        this.setState({ ...initialState })
                    } else {
                        alert('Erro ao realizar cadastro!')
                    }
                })
        }
    }

    render() {

        return (
            <Scroll>
                <Container>
                    <View>
                        <Text h4 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Cadastrar Usuário</Text>
                    </View>
                    <View>
                        <Text h5 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Dados Gerais</Text>
                    </View>
                    <Input 
                        name="name" 
                        placeholder="Nome" 
                        onChangeText={name => this.setState({ name })} 
                        value={this.state.name}/>
                    {/* <Input name="birthday" placeholder="Data de Nascimento"/> */}
                    
                    <Input 
                        name="email"
                        placeholder="E-mail"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}/>

                    <Input name="cpf" 
                        placeholder="CPF"
                        onChangeText={cpf => this.setState({ cpf })}
                        value={this.state.cpf}
                        />

                    <Input name="dateOfBirth" 
                        placeholder="Data de Nascimento"
                        onChangeText={dateOfBirth => this.setState({ dateOfBirth })}
                        value={this.state.dateOfBirth}
                        />

                    <Input name="professionalRegistry" 
                        placeholder="Registro Profissional"
                        onChangeText={professionalRegistry => this.setState({ professionalRegistry })}
                        value={this.state.professionalRegistry}
                        />

                    <Input name="rg" 
                        placeholder="RG"
                        onChangeText={rg => this.setState({ rg })}
                        value={this.state.rg}
                        />
                    
                    <Input name="emittingOrgan" 
                        placeholder="Orgão Emissor"
                        onChangeText={emittingOrgan => this.setState({ emittingOrgan })}
                        value={this.state.emittingOrgan}
                        />

                    <Input name="issueDate" 
                        placeholder="Data de Emissão"
                        onChangeText={issueDate => this.setState({ issueDate })}
                        value={this.state.issueDate}
                        />

                    <View>
                        <Text h5 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Endereço</Text>
                    </View>
                    {/* Endereço */}
                    <Input name="street" 
                        placeholder="Rua"
                        onChangeText={street => this.setState({ street })}
                        value={this.state.street}
                        />
                    <Input name="number" 
                        placeholder="Número"
                        onChangeText={number => this.setState({ number })}
                        value={this.state.number}
                        />
                    <Input name="complement" 
                        placeholder="Complemento"
                        onChangeText={complement => this.setState({ complement })}
                        value={this.state.complement}
                        />
                    <Input name="neighborhood" 
                        placeholder="Bairro"
                        onChangeText={neighborhood => this.setState({ neighborhood })}
                        value={this.state.neighborhood}
                        />
                    <Input name="city" 
                        placeholder="Cidade"
                        onChangeText={city => this.setState({ city })}
                        value={this.state.city}
                        />
                    <Input name="cep" 
                        placeholder="CEP"
                        onChangeText={cep => this.setState({ cep })}
                        value={this.state.cep}
                        />
                    

                        <CustomButton onPress={this.saveUser}>
                            <CustomButtonText>CADASTRAR</CustomButtonText>
                        </CustomButton>
                </Container>
            </Scroll>
        );
    }

}

export default AddUser;