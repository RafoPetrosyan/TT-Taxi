import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CarsScreen from '../../../screens/adminScreens/CarsScreen';
import CarsFormScreen from '../../../screens/adminScreens/CarsFormScreen';
import SCREENS from '../../../constants/screens.ts';

type ParamList = {
   AdminCarsScreen: undefined;
   AdminCarsFormScreen: undefined;
};

const CarsStack = createStackNavigator<ParamList>();

const CarsStackScreen: React.FC = () => {
   return (
      <CarsStack.Navigator screenOptions={{ headerShown: false }}>
         <CarsStack.Screen name={SCREENS.ADMIN_CARS_FORM} component={CarsFormScreen} />
         <CarsStack.Screen name={SCREENS.ADMIN_CARS} component={CarsScreen} />
      </CarsStack.Navigator>
   );
};

export default CarsStackScreen;
