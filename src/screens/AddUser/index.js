import React, { useState, Component } from 'react';
import { showUpdate, create, update } from '../../redux/users/action/usersAction'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Text } from 'react-native-elements';

import {
    Container,
    Input,
    InputArea,
    Scroll,
    CustomButton,
    CustomButtonText,
} from './styles';

const renderField = ({ placeholder, keyboardType = "default", input, type }) => {
    return (
        <Input {...input} placeholder={placeholder} keyboardType={keyboardType} style={type?{display: 'none'}:null}/>
    );
};

const initialState = { 
    category: ''
}

class AddUser extends Component {

    state = {
        ...initialState
    }


    userId = this.props.route.params?.userId ?? null
    isAddMode = !this.userId;

    componentDidMount() {
        if (this.userId) {
            this.props.showUpdate(this.userId)
            
            this.setState({category: this.props.role})
        }
    }

    onSubmit = (formData) => {
        this.isAddMode ? this.props.create(formData) : this.props.update(formData)
    }



    render() {

        const { handleSubmit, role } = this.props
        console.log(this.props.role)
        
        return (
            <Scroll>
                <Container>
                    <View>
                        <Text h4 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Cadastrar Usuário</Text>
                    </View>
                    <View>
                        <Text h5 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Dados Gerais</Text>
                    </View>
                    <Field
                        name="name"
                        placeholder="Nome"
                        component={renderField}
                    />
                    <Field
                        name="email"
                        placeholder="Email"
                        component={renderField}
                        keyboardType = "email-address"
                    />

                    <Field
                        name="cpf"
                        placeholder="CPF"
                        component={renderField}
                        keyboardType = "number-pad"
                    />

                    <Field
                        name="dateOfBirth"
                        placeholder="Data de Nascimento"
                        component={renderField}
                        keyboardType = "number-pad"
                    />

                    <Field
                        name="professionalRegistry"
                        placeholder="Registro Profissional"
                        component={renderField}
                    />

                    <Field
                        name="rg"
                        placeholder="RG"
                        component={renderField}
                    />

                    <Field
                        name="emittingOrgan"
                        placeholder="Orgão Emissor"
                        component={renderField}
                    />

                    <Field
                        name="issueDate"
                        placeholder="Data de Emissão"
                        component={renderField}
                        keyboardType = "number-pad"
                    />

                    <View>
                        <Text h5 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Endereço</Text>
                    </View>

                    <Field
                        name="street"
                        placeholder="Rua"
                        component={renderField}
                    />

                    <Field
                        name="number"
                        placeholder="Número"
                        component={renderField}
                    />

                    <Field
                        name="complement"
                        placeholder="Complemento"
                        component={renderField}
                    />

                    <Field
                        name="neighborhood"
                        placeholder="Bairro"
                        component={renderField}
                    />
                    <Field
                        name="city"
                        placeholder="Cidade"
                        component={renderField}
                    />
                    <Field
                        name="cep"
                        placeholder="CEP"
                        component={renderField}
                        keyboardType = "number-pad"
                    />

                    <View>
                        <Text h5 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Permissão de acesso</Text>
                    </View>
                    <Field
                        component={renderField}
                        name="role"
                        type="hidden"
                        style={{ height: 0 }}
                    />
                    <Picker
                        selectedValue={this.state.category}
                        style={{fontSize: 16, width: '94%', backgroundColor: '#FFF', marginBottom: 10}}
                        onValueChange={(itemValue, itemIndex) =>{
                            this.setState({category: itemValue})
                            this.props.change("role", itemValue);
                            }
                        }>
                        <Picker.Item label="Administrador" value="administrator" />
                        <Picker.Item label="Vistoriador" value="vistoriador" />
                    </Picker>


                    <CustomButton onPress={handleSubmit(this.onSubmit)}>
                        <CustomButtonText>{this.isAddMode ? "CADASTRAR" : "ALTERAR"}</CustomButtonText>
                    </CustomButton>
                </Container>
            </Scroll>
        );
    }

}

AddUser = reduxForm({ form: 'userForm' })(AddUser)
const mapDispactchToProps = dispatch => bindActionCreators({ showUpdate, create, update }, dispatch)
const selector = formValueSelector('userForm')
const mapStateToProps = state => ({role: selector(state, 'role')})
export default connect(state => {
    // can select values individually
    const role = selector(state, 'role')
    return {role}}
    , mapDispactchToProps)(AddUser)