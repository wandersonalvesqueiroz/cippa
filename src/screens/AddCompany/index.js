import React, { useState, Component } from 'react';
import { showUpdate, create, update } from '../../redux/companies/action/companiesAction'
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
        <Input {...input} placeholder={placeholder} keyboardType={keyboardType} style={type ? { display: 'none' } : null} />
    );
};


class AddCompany extends Component {

    companyId = this.props.route.params?.companyId ?? null
    isAddMode = !this.companyId;

    componentDidMount() {
        if (this.companyId) {
            this.props.showUpdate(this.companyId)
        }
    }

    onSubmit = (formData) => {
        this.isAddMode ? this.props.create(formData) : this.props.update(formData)
    }

    render() {

        const { handleSubmit, category } = this.props

        return (
            <Scroll>
                <Container>
                    <View>
                        <Text h4 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>{this.isAddMode ? "Cadastrar" : "Editando"} Empresa</Text>
                    </View>
                    <View>
                        <Text h5 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Dados Gerais</Text>
                    </View>
                    <Field
                        name="name"
                        placeholder="Razão Social"
                        component={renderField}
                    />
                    <Field
                        name="companyName"
                        placeholder="Nome Fantasia"
                        component={renderField}
                    />

                    <Field
                        name="cnpj"
                        placeholder="CNPJ"
                        component={renderField}
                        keyboardType="number-pad"
                    />

                    <Field
                        name="email"
                        placeholder="E-mail"
                        component={renderField}
                        keyboardType="email-address"
                    />

                    <Field
                        name="tel"
                        placeholder="Telefone"
                        component={renderField}
                        keyboardType="number-pad"
                    />

                    <Field
                        component={renderField}
                        name="category"
                        type="hidden"
                        style={{ height: 0 }}
                    />
                    <Picker
                        selectedValue={this.props.category}
                        style={{ fontSize: 16, width: '94%', backgroundColor: '#FFF', marginBottom: 10 }}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState({ category: itemValue })
                            this.props.change("category", itemValue);
                        }
                        }>
                        <Picker.Item label="Segurança do Trabalho" value="Segurança do Trabalho" />
                    </Picker>

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
                        keyboardType="number-pad"
                    />

                    <CustomButton onPress={handleSubmit(this.onSubmit)}>
                        <CustomButtonText>{this.isAddMode ? "CADASTRAR" : "ALTERAR"}</CustomButtonText>
                    </CustomButton>
                </Container>
            </Scroll>
        );
    }

}

AddCompany = reduxForm({ form: 'companyForm' })(AddCompany)
const mapDispactchToProps = dispatch => bindActionCreators({ showUpdate, create, update }, dispatch)
const selector = formValueSelector('companyForm')
const mapStateToProps = state => { return { category: selector(state, 'category') } }
export default connect(mapStateToProps, mapDispactchToProps)(AddCompany)