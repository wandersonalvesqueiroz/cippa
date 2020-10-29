import React from 'react';
import { Text } from "react-native";

// MENU LATERAL
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

//BOTTOM MENU
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Inspection from '../screens/Inspection';
import Configuration from '../screens/Configuration';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Inspection" component={Inspection} />
        <Tab.Screen name="Configuration" component={Configuration} />
    </Tab.Navigator>
);

// const Drawer = createDrawerNavigator();

// export default function Menu(){
//     <NavigationContainer>
//         <Drawer.Navigator
//             initialRouteName="Home"
//             drawerStyle={{
//                 backgroundColor: "#ABCDEF",
//                 paddingVertical: 20
//             }}
//         >
//             <Drawer.Screen name="Home" component={Home} />
//             <Drawer.Screen name="Inspection" component={Inspection} />
//         </Drawer.Navigator>
//     </NavigationContainer>
// }