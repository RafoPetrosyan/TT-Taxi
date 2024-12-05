import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SCREENS from '../constants/screens.ts';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import OTPVerificationScreen from '../screens/authScreens/OTPVerificationScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import PhoneSignInScreen from '../screens/authScreens/PhoneSignInScreen';
import STACKS from '../constants/stacks.ts';
import { AuthParamList, RootParamList } from './types.ts';
import AdminTabs from './adminTabs';
import ClientTabs from './cientTabs';

const RootStack = createStackNavigator<RootParamList>();
const AuthStack = createStackNavigator<AuthParamList>();

const AuthNavigator = () => (
   <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={SCREENS.WELCOME_SCREEN} component={WelcomeScreen} />
      <AuthStack.Screen name={SCREENS.OTP_VERIFICATION} component={OTPVerificationScreen} />
      <AuthStack.Screen name={SCREENS.SIGN_IN_SCREEN} component={SignInScreen} />
      <AuthStack.Screen name={SCREENS.SIGN_UP_SCREEN} component={SignUpScreen} />
      <AuthStack.Screen name={SCREENS.PHONE_SIGN_IN} component={PhoneSignInScreen} />
   </AuthStack.Navigator>
);

const Stacks = () => {
   return (
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
         <RootStack.Screen name={STACKS.ADMIN_STACK} component={AdminTabs} />
         <RootStack.Screen name={STACKS.CLIENT_STACK} component={ClientTabs} />
         <RootStack.Screen name={STACKS.AUTH_STACK} component={AuthNavigator} />
      </RootStack.Navigator>
   );
};

export default Stacks;
