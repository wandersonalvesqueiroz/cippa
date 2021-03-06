import React from 'react';
import { Text } from 'react-native-elements';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


import Home from '../screens/Home';
import AddUser from '../screens/AddUser';
import Profile from '../screens/Profile';
import Inspection from '../screens/Inspection';
import Configuration from '../screens/Configuration';

import HomeIcon from '../assets/icons/solid/home.svg';
import UserIcon from '../assets/icons/solid/user.svg';
import CompanyIcon from '../assets/icons/solid/building.svg';
import InspectionIcon from '../assets/icons/solid/check.svg';
import StandardIcon from '../assets/icons/solid/clipboard-check.svg';
import ConfigurationIcon from '../assets/icons/solid/cog.svg';

import UserStack from '../stacks/UserStack'
import StandardStack from '../stacks/StandardStack'
import CompanyStack from '../stacks/CompanyStack'

import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

async function Logout() {
    
    await AsyncStorage.clear();
    // navigation.navigate('SignIn');
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label={() => <Text style={{ fontSize: 20, color: 'white', justifyContent: "flex-end" }}>Sair</Text>}
                onPress={Logout}
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
        <Drawer.Screen name="Company" component={CompanyStack}
            options={{
                drawerLabel: 'Empresas',
                drawerIcon: config => <CompanyIcon width="24" height="24" fill="#FFFFFF" />
            }}
        />
        <Drawer.Screen name="Inspection" component={Inspection}
            options={{
                drawerLabel: 'Vistorias',
                drawerIcon: config => <InspectionIcon width="24" height="24" fill="#FFFFFF" />
            }}
        />
        <Drawer.Screen name="Standard" component={StandardStack}
            options={{
                drawerLabel: 'Normas',
                drawerIcon: config => <StandardIcon width="24" height="24" fill="#FFFFFF" />
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