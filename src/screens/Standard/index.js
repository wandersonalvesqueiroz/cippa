import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, destroy } from '../../redux/standards/action/standardsAction'

import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { DataTable } from 'react-native-paper';

import {
    Container,
    EditStandardButton,
    DeleteStandardButton,
    AddStandardButton
} from './styles';

import ScreenMainDrawer from '../../components/ScreenMainDrawer';

import EditStandardIcon from '../../assets/icons/solid/edit.svg';
import DeleteStandardIcon from '../../assets/icons/solid/trash.svg';
import AddIcon from '../../assets/icons/solid/plus-circle.svg';

class Standard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getList()
    }    

    handleAddButtonClick = () => {
        this.props.navigation.reset({
            routes: [{ name: 'AddStandard' }]
        });
    }
    
    renderRows = () => {
        const list = this.props.list

        return list.map(standard => (
            <DataTable.Row key={standard.id}>
                <DataTable.Cell style={{ flex: 15 }}>{standard.name}</DataTable.Cell>
                <DataTable.Cell style={{ flex: 15 }}>{standard.codeStandard}</DataTable.Cell>
                <DataTable.Cell
                    style={{
                        flex: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >{standard.status}</DataTable.Cell>
                <DataTable.Cell
                    style={{
                        flex: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <EditStandardButton onPress = {() => this.props.navigation.navigate('AddStandard', {standardId: standard.id})}>
                        <EditStandardIcon width="20" height="20" fill="#EA8C00" />
                    </EditStandardButton>
                </DataTable.Cell>
                <DataTable.Cell
                    style={{
                        flex: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <DeleteStandardButton onPress={() => this.props.destroy(standard.id)}>
                        <DeleteStandardIcon width="20" height="20" fill="#B90000" />
                    </DeleteStandardButton>
                </DataTable.Cell>
            </DataTable.Row>
        ))
    }
    render() {

        

        return (
            <ScreenMainDrawer {...this.props.navigation}>
                <Container>
                    <View>
                        <Text h4 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Normas</Text>
                    </View>

                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title style={{ flex: 15 }} >
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Nome</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ flex: 15 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Código</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ flex: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Status</Text>
                            </DataTable.Title>
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

                        <AddStandardButton style={{ alignSelf: "flex-end" }} onPress={() => this.props.navigation.navigate('AddStandard')}>
                            <AddIcon width="50" height="50" fill="#1E661C" />
                        </AddStandardButton>

                    </DataTable>

                </Container >
           </ScreenMainDrawer>
        );
    }

}

const mapStateToProps = state => ({list: state.Standards.listStandards})
const mapDispatchToProps = dispatch => bindActionCreators({getList, destroy}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Standard)