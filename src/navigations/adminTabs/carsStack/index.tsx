import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SCREENS from '../../../constants/screens.ts';
import CarsScreen from '../../../screens/adminScreens/CarsScreen';
import CarsFormScreen from '../../../screens/adminScreens/CarsFormScreen';

type ParamList = {
   AdminCarsScreen: undefined;
   AdminCarsFormScreen: undefined;
};

const CarsStack = createStackNavigator<ParamList>();

const CarsStackScreen: React.FC = () => {
   const insets = useSafeAreaInsets();

   return (
      <View style={{ flex: 1, paddingTop: insets.top, paddingHorizontal: 5 }}>
         <CarsStack.Navigator screenOptions={{ headerShown: false }}>
            <CarsStack.Screen name={SCREENS.ADMIN_CARS} component={CarsScreen} />
            <CarsStack.Screen name={SCREENS.ADMIN_CARS_FORM} component={CarsFormScreen} />
         </CarsStack.Navigator>
      </View>
   );
};

export default CarsStackScreen;
