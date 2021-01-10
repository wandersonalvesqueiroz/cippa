import React from 'react';
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './Reducers'

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers);

export default () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <NavigationContainer>
          <StatusBar translucent backgroundColor="transparent" />
          <MainStack />
        </NavigationContainer>
      </UserContextProvider>
    </Provider>
  );
}