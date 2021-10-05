// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import TweetView from '../screens/TweetView';

const Stack = createNativeStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{header: () => null}}
          name="Profile"
          component={Profile}
        />
         <Stack.Screen
          name="Tweet"
          component={TweetView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
