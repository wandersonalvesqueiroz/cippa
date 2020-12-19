import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import User from '../screens/User';
import AddUser from '../screens/AddUser';


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="User"

        screenOptions={{
            headerTruncatedBackTitle: 'Voltar',
            headerBackTitleVisible: true,
            headerTitle: ''
        }}
        

    >
        <Stack.Screen name="User" component={User} options={{ headerShown: false }}/>
        <Stack.Screen name="AddUser" component={AddUser} />
    </Stack.Navigator>
);