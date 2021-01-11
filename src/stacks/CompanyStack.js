import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Company from '../screens/Company';
import AddCompany from '../screens/AddCompany';


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Company"

        screenOptions={{
            headerTruncatedBackTitle: 'Voltar',
            headerBackTitleVisible: true,
            headerTitle: ''
        }}
    >
        <Stack.Screen name="Company" component={Company} options={{ headerShown: false }}/>
        <Stack.Screen name="AddCompany" component={AddCompany} />
    </Stack.Navigator>
);