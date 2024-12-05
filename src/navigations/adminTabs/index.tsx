import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IS_IOS_PLATFORM } from '../../constants';
import STACKS from '../../constants/stacks.ts';
import COLORS from '../../constants/colors.ts';
import { AdminTabParamList } from '../types.ts';
import OrdersIcon from '../../assets/svg/OrdersIcon';
import OrdersScreen from '../../screens/adminScreens/OrdersScreen';
import ScheduleScreen from '../../screens/adminScreens/ScheduleScreen';
import { fontFamilies } from '../../constants/fonts.ts';
import CarsStackScreen from '../adminStacks/carsStack';
import DriversStackScreen from '../adminStacks/driversStack';
import ScheduleRoutesIcon from '../../assets/svg/ScheduleRoutesIcon';
import CarTabIcon from '../../assets/svg/CarTabIcon';
import DriverIcon from '../../assets/svg/DriverIcon';
import PlusIcon from '../../assets/svg/PlusIcon';
import { useNavigationState } from '@react-navigation/native';
import { navigationService } from '../../services/navigations.ts';

const screens = {
   AdminOrdersStack: 1,
   AdminScheduleStack: 1,
   AdminDriversStack: 1,
   AdminCarsStack: 1,
   AdminCarsScreen: 1,
   AdminDriversScreen: 1,
   AdminSchedulesScreen: 1,
};

const Tab = createBottomTabNavigator<AdminTabParamList>();

const AdminTabs: React.FC = () => {
   const tabState = useNavigationState((state) => state);

   const handleAddButton = () => {
      const currentScreen = navigationService.getCurrentScreen();
      console.log(currentScreen, 'currentScreen');
   };

   return (
      <Tab.Navigator
         screenOptions={() => ({
            headerShown: false,
            tabBarActiveTintColor: COLORS.brown,
            tabBarInactiveTintColor: COLORS.secondaryText,
            tabBarStyle: {
               height: IS_IOS_PLATFORM ? 85 : 60,
               paddingBottom: 10,
               backgroundColor: COLORS.white,
               elevation: 4,
               shadowColor: '#000000',
               shadowOffset: { width: 0, height: -1 },
               shadowOpacity: 0.1,
               shadowRadius: 3,
            },
            tabBarLabelStyle: {
               fontSize: 11,
               fontWeight: '400',
               fontFamily: fontFamilies.MONTSERRAT['400'],
               lineHeight: 20,
            },
            tabBarItemStyle: {
               flex: 1,
            },
         })}
      >
         <Tab.Screen
            name={STACKS.ADMIN_ORDERS}
            component={OrdersScreen}
            options={{
               tabBarLabel: 'Պատվեր',
               tabBarIcon: ({ focused }) => <OrdersIcon stroke={focused && '#D59608'} />,
            }}
         />
         <Tab.Screen
            name={STACKS.ADMIN_SCHEDULE}
            component={ScheduleScreen}
            options={{
               tabBarLabel: 'Երթեր',
               tabBarIcon: ({ focused }) => <ScheduleRoutesIcon stroke={focused && '#D59608'} />,
            }}
         />
         <Tab.Screen
            name="Add"
            options={{
               tabBarButton: () => (
                  <TouchableOpacity style={styles.addButton} onPress={handleAddButton}>
                     <PlusIcon />
                  </TouchableOpacity>
               ),
            }}
         >
            {() => null}
         </Tab.Screen>
         <Tab.Screen
            name={STACKS.ADMIN_CARS}
            component={CarsStackScreen}
            options={{
               tabBarLabel: 'Մեքենա',
               tabBarIcon: ({ focused }) => <CarTabIcon stroke={focused && '#D59608'} />,
            }}
         />
         <Tab.Screen
            name={STACKS.ADMIN_DRIVERS}
            component={DriversStackScreen}
            options={{
               tabBarLabel: 'Վարորդ',
               tabBarIcon: ({ focused }) => <DriverIcon stroke={focused && '#D59608'} />,
            }}
         />
      </Tab.Navigator>
   );
};

const styles = StyleSheet.create({
   addButton: {
      top: -25,
      position: 'absolute',
      bottom: 10,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.brown,
      width: 50,
      height: 50,
      borderRadius: 25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
      elevation: 5,
   },
});

export default AdminTabs;
