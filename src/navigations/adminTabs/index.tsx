import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IS_IOS_PLATFORM } from '../../constants';
import CarIcon from '../../assets/svg/CarIcon';
import STACKS from '../../constants/stacks.ts';
import COLORS from '../../constants/colors.ts';
import { AdminTabParamList } from '../types.ts';
import OrdersIcon from '../../assets/svg/OrdersIcon';
import PeopleIcon from '../../assets/svg/PeopleIcon';
import CalendarIcon from '../../assets/svg/CalendarIcon';
import OrdersScreen from '../../screens/adminScreens/OrdersScreen';
import ScheduleScreen from '../../screens/adminScreens/ScheduleScreen';
import { fontFamilies } from '../../constants/fonts.ts';
import CarsStackScreen from '../adminStacks/carsStack';
import DriversStackScreen from '../adminStacks/driversStack';

const Tab = createBottomTabNavigator<AdminTabParamList>();

const AdminTabs: React.FC = () => {
   return (
      <Tab.Navigator
         screenOptions={() => ({
            headerShown: false,
            tabBarActiveTintColor: COLORS.brown,
            tabBarInactiveTintColor: COLORS.primaryText,
            tabBarStyle: {
               height: IS_IOS_PLATFORM ? 85 : 55,
               paddingBottom: 10,
               backgroundColor: COLORS.white,
               elevation: 4,
               shadowColor: '#000000',
               shadowOffset: { width: 0, height: -1 },
               shadowOpacity: 0.1,
               shadowRadius: 3,
            },
            tabBarLabelStyle: {
               fontSize: 12,
               fontWeight: '400',
               fontFamily: fontFamilies.MONTSERRAT['400'],
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
               tabBarIcon: ({ focused }) => (
                  <OrdersIcon
                     stroke={focused ? COLORS.brown : COLORS.primaryText}
                     width={24}
                     height={24}
                     strokeWidth={2}
                  />
               ),
            }}
         />
         <Tab.Screen
            name={STACKS.ADMIN_SCHEDULE}
            component={ScheduleScreen}
            options={{
               tabBarLabel: 'Ժամանակացույց',
               tabBarIcon: ({ focused }) => (
                  <CalendarIcon
                     stroke={focused ? COLORS.brown : COLORS.primaryText}
                     width={24}
                     height={24}
                     strokeWidth={2}
                  />
               ),
            }}
         />
         <Tab.Screen
            name={STACKS.ADMIN_DRIVERS}
            component={DriversStackScreen}
            options={{
               tabBarLabel: 'Վարորդ',
               tabBarIcon: ({ focused }) => (
                  <PeopleIcon
                     stroke={focused ? COLORS.brown : COLORS.primaryText}
                     width={24}
                     height={24}
                  />
               ),
            }}
         />
         <Tab.Screen
            name={STACKS.ADMIN_CARS}
            component={CarsStackScreen}
            options={{
               tabBarLabel: 'Մեքենա',
               tabBarIcon: ({ focused }) => (
                  <CarIcon
                     fill={COLORS.white}
                     stroke={focused ? COLORS.brown : COLORS.primaryText}
                     width={24}
                     height={24}
                  />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

export default AdminTabs;
