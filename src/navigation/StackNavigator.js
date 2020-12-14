import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../screens/Home';
import Inspection from '../screens/Inspection';
// import Configuration from '../screens/Configuration';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const InspecionNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inspection" component={Inspection} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, InspecionNavigator };