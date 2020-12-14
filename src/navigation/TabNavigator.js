import React from 'react';
import { Text } from "react-native";

//BOTTOM MENU
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';
import { MainStackNavigator, InspecionNavigator } from './StackNavigator';

import Home from '../screens/Home';
import Inspection from '../screens/Inspection';
// import Configuration from '../screens/Configuration';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={MainStackNavigator} />
        <Tab.Screen name="Inspection" component={InspecionNavigator} />
    </Tab.Navigator>
);
