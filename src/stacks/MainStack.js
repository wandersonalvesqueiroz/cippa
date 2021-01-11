import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import RecoveryPassword from '../screens/RecoveryPassword';
import MainTab from './MainTab';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Inspection from '../screens/Inspection';
import Regulation from '../screens/Regulation';
import User from '../screens/User';
import AddUser from '../screens/AddUser';
import Company from '../screens/Company';
import AddCompany from '../screens/AddCompany';
import Standard from '../screens/Standard';
import AddStandard from '../screens/AddStandard';
import Configuration from '../screens/Configuration';



const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Inspection" component={Inspection} />
        <Stack.Screen name="Regulation" component={Regulation} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="AddUser" component={AddUser} />
        <Stack.Screen name="Company" component={Company} />
        <Stack.Screen name="AddCompany" component={AddCompany} />
        <Stack.Screen name="Standard" component={Standard} />
        <Stack.Screen name="AddStandard" component={AddStandard} />
        <Stack.Screen name="Configuration" component={Configuration} />
    </Stack.Navigator>
);