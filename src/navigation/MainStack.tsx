import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from 'react-native';

import MainScreen from '../screens/MainScreen';
import BasketScreen from '../screens/BasketScreen';

import {MainStackParams} from '../types/navigationTypes';

const Stack = createNativeStackNavigator<MainStackParams>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('BasketScreen')}
              title="Корзина"
              color="#000"
            />
          ),
        })}
      />
      <Stack.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{
          title: 'Корзина',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
