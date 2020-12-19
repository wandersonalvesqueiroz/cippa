import React from 'react';
import { Text } from 'react-native-elements';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


import Home from '../screens/Home';
import User from '../screens/User';
import AddUser from '../screens/AddUser';
import Profile from '../screens/Profile';
import Inspection from '../screens/Inspection';
import Regulation from '../screens/Regulation';
import Configuration from '../screens/Configuration';

import HomeIcon from '../assets/icons/solid/home.svg';
import UserIcon from '../assets/icons/solid/user.svg';
import InspectionIcon from '../assets/icons/solid/check.svg';
import RegulationIcon from '../assets/icons/solid/clipboard-check.svg';
import ConfigurationIcon from '../assets/icons/solid/cog.svg';
import HeaderBar from '../components/Hearder';

import UserStack from '../stacks/UserStack'

const Drawer = createDrawerNavigator();

function Logout() {
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label={() => <Text style={{ fontSize: 20, color: 'white', justifyContent: "flex-end"}}>Sair</Text>}
                onPress={() => alert('Sair')}
            />
        </DrawerContentScrollView>
    );
}

export default () => (
    <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
            backgroundColor: '#1E661C',
        }}

        drawerContentOptions={{
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#FFFFFF',
            labelStyle: {
                fontSize: 20,
                marginLeft: 10,
            },
        }}

        drawerContent={props => <CustomDrawerContent {...props} />}
    >
        <Drawer.Screen name="Home" component={Home}
            options={{
                drawerLabel: 'Home',
                drawerIcon: config => <HomeIcon width="24" height="24" fill="#FFFFFF" />
            }}
        />
        <Drawer.Screen name="User" component={UserStack}
            options={{
                drawerLabel: 'Usuários',
                drawerIcon: config => <UserIcon width="24" height="24" fill="#FFFFFF" />
            }}
        />
        <Drawer.Screen name="Inspection" component={Inspection}
            options={{
                drawerLabel: 'Vistorias',
                drawerIcon: config => <InspectionIcon width="24" height="24" fill="#FFFFFF" />
            }}
        />
        <Drawer.Screen name="Regulation" component={Regulation}
            options={{
                drawerLabel: 'Normas',
                drawerIcon: config => <RegulationIcon width="24" height="24" fill="#FFFFFF" />
            }}
        />
        <Drawer.Screen name="Configuration" component={Configuration}
            options={{
                drawerLabel: 'Configurações',
                drawerIcon: config => <ConfigurationIcon width="24" height="24" fill="#FFFFFF" />
            }}
        />

        <Drawer.Screen name="Profile" component={Profile}
            options={{
                drawerLabel: () => null,
                drawerIcon: () => null
            }}
        />

        <Drawer.Screen name="AddUser" component={AddUser}
            options={{
                drawerLabel: () => null,
                drawerIcon: () => null,
            }}
        />

    </Drawer.Navigator>
);