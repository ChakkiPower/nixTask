import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import {rootReducer} from './src/store/reducers';

import MainStack from './src/navigation/MainStack';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
