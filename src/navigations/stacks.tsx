import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { isEmpty } from 'lodash';
import SCREENS from '../constants/screens.ts';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import OTPVerificationScreen from '../screens/authScreens/OTPVerificationScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import PhoneSignInScreen from '../screens/authScreens/PhoneSignInScreen';
import STACKS from '../constants/stacks.ts';
import { authService } from '../services/auth.ts';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { AuthParamList, RootParamList } from './types.ts';
import AdminTabs from './adminTabs';
import ClientTabs from './cientTabs';
import { setCurrentUser } from '../store/auth';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import COLORS from '../constants/colors.ts';

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
   const dispatch = useAppDispatch();
   const { currentUser } = useAppSelector((state) => state.auth);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      (async () => {
         try {
            const user = await authService.getCurrentUser();
            dispatch(setCurrentUser(user));
         } catch (error) {
            console.error('Error fetching current user:', error);
         } finally {
            setIsLoading(false);
         }
      })();
   }, [dispatch]);

   if (isLoading) {
      return (
         <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={COLORS.brown} />
         </View>
      );
   }

   return (
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
         {isEmpty(currentUser) ? (
            <RootStack.Screen name={STACKS.AUTH_STACK} component={AuthNavigator} />
         ) : currentUser.role === 'admin' ? (
            <RootStack.Screen name={STACKS.ADMIN_STACK} component={AdminTabs} />
         ) : (
            <RootStack.Screen name={STACKS.CLIENT_STACK} component={ClientTabs} />
         )}
      </RootStack.Navigator>
   );
};

const styles = StyleSheet.create({
   loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
});

export default Stacks;
