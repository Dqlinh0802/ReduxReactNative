/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { useColorScheme } from 'react-native';
import Main from './src/components/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {value: 0};

const reducer = (state = defaultState, action) => {
  if(action.type === 'TINHTOAN') {
    return{
      value: Number(action.num1) + Number(action.num2)
    };
  }

  return state;
};

const store = createStore(reducer);

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
