import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, destroy } from '../../redux/companies/action/companiesAction'

import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { DataTable } from 'react-native-paper';

import {
    Container,
    EditCompanyButton,
    DeleteCompanyButton,
    AddCompanyButton
} from './styles';

import ScreenMainDrawer from '../../components/ScreenMainDrawer';

import EditCompanyIcon from '../../assets/icons/solid/edit.svg';
import DeleteCompanyIcon from '../../assets/icons/solid/trash.svg';
import AddIcon from '../../assets/icons/solid/plus-circle.svg';

class Company extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getList()
    }    

    handleAddButtonClick = () => {
        this.props.navigation.reset({
            routes: [{ name: 'AddCompany' }]
        });
    }
    
    renderRows = () => {
        const list = this.props.list

        return list.map(company => (
            <DataTable.Row key={company.id}>
                <DataTable.Cell style={{ flex: 15 }}>{company.name}</DataTable.Cell>
                <DataTable.Cell style={{ flex: 15 }}>{company.cnpj}</DataTable.Cell>
                {/* <DataTable.Cell
                    style={{
                        flex: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >{company.status}</DataTable.Cell> */}
                <DataTable.Cell
                    style={{
                        flex: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <EditCompanyButton onPress = {() => this.props.navigation.navigate('AddCompany', {companyId: company.id})}>
                        <EditCompanyIcon width="20" height="20" fill="#EA8C00" />
                    </EditCompanyButton>
                </DataTable.Cell>
                <DataTable.Cell
                    style={{
                        flex: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <DeleteCompanyButton onPress={() => this.props.destroy(company.id)}>
                        <DeleteCompanyIcon width="20" height="20" fill="#B90000" />
                    </DeleteCompanyButton>
                </DataTable.Cell>
            </DataTable.Row>
        ))
    }
    render() {

        

        return (
            <ScreenMainDrawer {...this.props.navigation}>
                <Container>
                    <View>
                        <Text h4 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Empresas</Text>
                    </View>

                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title style={{ flex: 15 }} >
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Nome</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ flex: 15 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>CNPJ</Text>
                            </DataTable.Title>
                            {/* <DataTable.Title style={{ flex: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Status</Text>
                            </DataTable.Title> */}
                            <DataTable.Title style={{ flex: 10, justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Ações</Text>
                            </DataTable.Title>
                        </DataTable.Header>

                        {this.renderRows()}
                        {/* <DataTable.Pagination
                        page={1}
                        numberOfPages={1}
                        onPageChange={page => {
                            console.log(page);
                        }}
                        label="1-2 of 6"
                    /> */}

                        <AddCompanyButton style={{ alignSelf: "flex-end" }} onPress={() => this.props.navigation.navigate('AddCompany')}>
                            <AddIcon width="50" height="50" fill="#1E661C" />
                        </AddCompanyButton>

                    </DataTable>

                </Container >
           </ScreenMainDrawer>
        );
    }

}

const mapStateToProps = state => ({list: state.Companies.listCompanies})
const mapDispatchToProps = dispatch => bindActionCreators({getList, destroy}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Company)