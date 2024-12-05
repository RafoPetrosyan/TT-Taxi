import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SCREENS from '../../../constants/screens.ts';
import MyRoutesScreen from '../../../screens/clientScreens/MyRoutesScreen';
import FollowProgressScreen from '../../../screens/clientScreens/FollowProgressScreen';

type ParamList = {
   MyRoutesScreen: undefined;
   FollowProgressScreen: undefined;
};

const MyRoutesStack = createStackNavigator<ParamList>();

const MyRoutesStackScreen: React.FC = () => {
   return (
      <MyRoutesStack.Navigator screenOptions={{ headerShown: false }}>
         <MyRoutesStack.Screen name={SCREENS.MY_ROUTES} component={MyRoutesScreen} />
         <MyRoutesStack.Screen name={SCREENS.FOLLOW_PROGRESS} component={FollowProgressScreen} />
      </MyRoutesStack.Navigator>
   );
};

export default MyRoutesStackScreen;
