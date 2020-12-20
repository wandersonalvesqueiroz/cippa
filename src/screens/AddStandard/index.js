import React, { useState, Component } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import { Text } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';

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
    codeStandard: '', 
    name: '', 
    category: '', 
    description: ''
}

class AddStandard extends Component {

    standardId = this.props.route.params?.standardId ?? null

    state = {
        ...initialState
    }

    loadListStandard(standardId) {
        Api.standard(standardId).then(standard => this.setState({ ...standard }))
    }

    componentDidMount() {
        
        if(this.standardId){
            this.loadListStandard(this.standardId)
        }
    }

    saveStandard = () => {
        const newStandard = {
            ...this.state
        }
        if(newStandard.id){
            Api.editStandard(newStandard)
                .then((res) => {
                    if (res.ok) {
                        alert('Cadastro alterado!')
                        this.loadListStandard(this.standardId)
                    } else {
                        alert('Erro ao alterar cadastro!')
                    }
                })
        } else {
            Api.addStandard(newStandard)
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
    handleChangeValue = value => alert(`Changed value to ${value}`);
    render() {

        return (
            <Scroll>
                <Container>
                    <View>
                        <Text h4 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Cadastrar Norma</Text>
                    </View>
                    <View>
                        <Text h5 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Dados Gerais</Text>
                    </View>
                    <Input 
                        name="codeStandard" 
                        placeholder="Código" 
                        onChangeText={codeStandard => this.setState({ codeStandard })} 
                        value={this.state.codeStandard}/>
                    
                    <Input 
                        name="name"
                        placeholder="Nome"
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name}/>

                    <Picker
                        selectedValue={this.state.category}
                        style={{fontSize: 16, width: '94%', backgroundColor: '#FFF', marginBottom: 10}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({category: itemValue})
                        }>
                        <Picker.Item label="NR 01 - Disposições Gerais" value="NR 01 - Disposições Gerais" />
                        <Picker.Item label="NR 02 - Inspeção Prévia" value="NR 02 - Inspeção Prévia" />
                        <Picker.Item label="NR 03 - Embargo ou Interdição" value="NR 03 - Embargo ou Interdição" />
                        <Picker.Item label="NR 04 - Serviços Especializados em Eng. de Segurança e em Medicina do Trabalho" value="NR 04 - Serviços Especializados em Eng. de Segurança e em Medicina do Trabalho" />
                        <Picker.Item label="NR 05 - Comissão Interna de Prevenção de Acidentes" value="NR 05 - Comissão Interna de Prevenção de Acidentes" />
                        <Picker.Item label="NR 06 - Equipamentos de Proteção Individual - EPI" value="NR 06 - Equipamentos de Proteção Individual - EPI" />
                    </Picker>

                    <Input 
                        name="description" 
                        placeholder="Descrição"
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={description => this.setState({ description })}
                        value={this.state.description}
                        />
                  

                    <CustomButton onPress={this.saveStandard}>
                        <CustomButtonText>CADASTRAR</CustomButtonText>
                    </CustomButton>
                </Container>
            </Scroll>
        );
    }

}

export default AddStandard;