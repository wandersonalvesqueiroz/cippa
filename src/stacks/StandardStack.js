import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Standard from '../screens/Standard';
import AddStandard from '../screens/AddStandard';


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Standard"

        screenOptions={{
            headerTruncatedBackTitle: 'Voltar',
            headerBackTitleVisible: true,
            headerTitle: ''
        }}
    >
        <Stack.Screen name="Standard" component={Standard} options={{ headerShown: false }}/>
        <Stack.Screen name="AddStandard" component={AddStandard} />
    </Stack.Navigator>
);