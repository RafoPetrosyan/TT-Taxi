import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CarsScreen from '../../../screens/adminScreens/CarsScreen';
import SCREENS from '../../../constants/screens.ts';
import ScheduleScreen from '../../../screens/adminScreens/ScheduleScreen';

type ParamList = {
   AdminSchedulesScreen: undefined;
   AdminSchedulesFormScreen: undefined;
};

const ScheduleStack = createStackNavigator<ParamList>();

const ScheduleStackScreen: React.FC = () => {
   return (
      <ScheduleStack.Navigator screenOptions={{ headerShown: false }}>
         <ScheduleStack.Screen name={SCREENS.ADMIN_SCHEDULES} component={ScheduleScreen} />
         <ScheduleStack.Screen name={SCREENS.ADMIN_SCHEDULES_FORM} component={CarsScreen} />
      </ScheduleStack.Navigator>
   );
};

export default ScheduleStackScreen;
