import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SCREENS from '../constants/screens.ts';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import FindRouteScreen from '../screens/routeScreens/FindRouteScreen';
import OTPVerificationScreen from '../screens/authScreens/OTPVerificationScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import PhoneSignInScreen from '../screens/authScreens/PhoneSignInScreen';
import STACKS from '../constants/stacks.ts';
import { AuthParamList, ClientParamList, RootParamList } from './types.ts';
import MyRoutesScreen from '../screens/routeScreens/MyRoutesScreen';

const RootStack = createStackNavigator<RootParamList>();
const AuthStack = createStackNavigator<AuthParamList>();
const ClientStack = createStackNavigator<ClientParamList>();

const AuthNavigator = () => (
   <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={SCREENS.WELCOME_SCREEN} component={WelcomeScreen} />
      <AuthStack.Screen name={SCREENS.OTP_VERIFICATION} component={OTPVerificationScreen} />
      <AuthStack.Screen name={SCREENS.SIGN_IN_SCREEN} component={SignInScreen} />
      <AuthStack.Screen name={SCREENS.SIGN_UP_SCREEN} component={SignUpScreen} />
      <AuthStack.Screen name={SCREENS.PHONE_SIGN_IN} component={PhoneSignInScreen} />
   </AuthStack.Navigator>
);

const ClientNavigator = () => (
   <ClientStack.Navigator screenOptions={{ headerShown: false }}>
      <ClientStack.Screen name={SCREENS.MY_ROUTES} component={MyRoutesScreen} />
      <ClientStack.Screen name={SCREENS.FIND_ROUTE} component={FindRouteScreen} />
   </ClientStack.Navigator>
);

const Stacks = () => {
   return (
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
         {/*<RootStack.Screen name={STACKS.AUTH_STACK} component={AuthNavigator} />*/}
         <RootStack.Screen name={STACKS.CLIENT_STACK} component={ClientNavigator} />
      </RootStack.Navigator>
   );
};

export default Stacks;