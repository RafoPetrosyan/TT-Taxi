import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DriversScreen from '../../../screens/adminScreens/DriversScreen';
import DriversFormScreen from '../../../screens/adminScreens/DriversFormScreen';
import SCREENS from '../../../constants/screens.ts';

type ParamList = {
   AdminDriversScreen: undefined;
   AdminDriversFormScreen: undefined;
};

const DriversStack = createStackNavigator<ParamList>();

const DriversStackScreen: React.FC = () => {
   return (
      <DriversStack.Navigator screenOptions={{ headerShown: false }}>
         <DriversStack.Screen name={SCREENS.ADMIN_DRIVERS_FORM} component={DriversFormScreen} />
         <DriversStack.Screen name={SCREENS.ADMIN_DRIVERS} component={DriversScreen} />
      </DriversStack.Navigator>
   );
};

export default DriversStackScreen;
