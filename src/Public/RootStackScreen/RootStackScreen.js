import React from 'react';
import SplashScreen from '../SplashScreen/SplashScreen';
import MainScreen from '../MainScreen/MainScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SuccessScreen from '../SuccessScreen/SuccessScreen';
import NameScreen from '../NameScreen/NameScreen';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import BathroomRoutineScreen from '../BathroomRoutineScreen/BathroomRoutineScreen';

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="MainScreen" component={MainScreen} />
    <RootStack.Screen name="NameScreen" component={NameScreen} />
    <RootStack.Screen name="SuccessScreen" component={SuccessScreen} />
    <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <RootStack.Screen name="BathroomRoutineScreen" component={BathroomRoutineScreen} />
  </RootStack.Navigator>
);
export default RootStackScreen;