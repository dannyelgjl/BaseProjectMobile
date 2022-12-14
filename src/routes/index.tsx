import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name="Home" component={Home} />
  </Navigator>
);

export default Routes;
