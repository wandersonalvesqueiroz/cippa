import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, destroy } from '../../redux/users/action/usersAction'

import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { DataTable } from 'react-native-paper';

import {
    Container,
    EditUserButton,
    DeleteUserButton,
    AddUserButton
} from './styles';

import ScreenMainDrawer from '../../components/ScreenMainDrawer';

import EditUserIcon from '../../assets/icons/solid/edit.svg';
import DeleteUserIcon from '../../assets/icons/solid/trash.svg';
import AddIcon from '../../assets/icons/solid/plus-circle.svg';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: []
        }
    }

    componentDidMount() {
        this.props.getList()
    }    

    handleAddButtonClick = () => {
        this.props.navigation.reset({
            routes: [{ name: 'AddUser' }]
        });
    }
    
    renderRows = () => {
        const list = this.props.list

        return list.map(user => (
            <DataTable.Row key={user.id}>
                <DataTable.Cell style={{ flex: 15 }}>{user.name}</DataTable.Cell>
                <DataTable.Cell style={{ flex: 15 }}>{user.cpf}</DataTable.Cell>
                <DataTable.Cell
                    style={{
                        flex: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >{user.status}</DataTable.Cell>
                <DataTable.Cell
                    style={{
                        flex: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <EditUserButton onPress = {() => this.props.navigation.navigate('AddUser', {userId: user.id})}>
                        <EditUserIcon width="20" height="20" fill="#EA8C00" />
                    </EditUserButton>
                </DataTable.Cell>
                <DataTable.Cell
                    style={{
                        flex: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <DeleteUserButton onPress={() => this.props.destroy(user.id)}>
                        <DeleteUserIcon width="20" height="20" fill="#B90000" />
                    </DeleteUserButton>
                </DataTable.Cell>
            </DataTable.Row>
        ))
    }
    render() {

        

        return (
            <ScreenMainDrawer {...this.props.navigation}>
                <Container>
                    <View>
                        <Text h4 style={{ textAlign: 'center', paddingTop: 20, marginBottom: 10, justifyContent: 'flex-end' }}>Usuários</Text>
                    </View>

                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title style={{ flex: 15 }} >
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Nome</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ flex: 15 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>CPF</Text>
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

                        <AddUserButton style={{ alignSelf: "flex-end" }} onPress={() => this.props.navigation.navigate('AddUser')}>
                            <AddIcon width="50" height="50" fill="#1E661C" />
                        </AddUserButton>

                    </DataTable>

                </Container >
           </ScreenMainDrawer>
        );
    }

}

const mapStateToProps = state => ({list: state.Users.listUsers})
const mapDispatchToProps = dispatch => bindActionCreators({getList, destroy}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(User)