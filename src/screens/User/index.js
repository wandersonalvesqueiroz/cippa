import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Text } from 'react-native-elements';
import { DataTable } from 'react-native-paper';


import {
    Container,
    ProfileButton,
    EditUserButton,
    DeleteUserButton,
    AddUserButton
} from './styles';

import Api from '../../Api';

import CippaLogo from '../../assets/cippa_logo.svg';
import UserIcon from '../../assets/icons/solid/user-circle.svg';
import MenuIcon from '../../assets/icons/solid/bars.svg';
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
        Api.users().then(users => this.setState({ ...this.state, usersList: users }))
    }



    handleProfileButtonClick = () => {
        this.props.navigation.reset({
            routes: [{ name: 'Profile' }]
        });
    }

    handleAddButtonClick = () => {
        this.props.navigation.reset({
            routes: [{ name: 'AddUser' }]
        });
    }

    renderRows = () => {

        const list = this.state.usersList

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
                    <EditUserButton>
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
                    <DeleteUserButton>
                        <DeleteUserIcon width="20" height="20" fill="#B90000" />
                    </DeleteUserButton>
                </DataTable.Cell>
            </DataTable.Row>
        ))
    }
    render() {
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

                    <AddUserButton style={{alignSelf: "flex-end"}} onPress={this.handleAddButtonClick}>
                        <AddIcon width="50" height="50" fill="#1E661C" />
                    </AddUserButton>

                </DataTable>


            </Container >
        );
    }

}

export default User;