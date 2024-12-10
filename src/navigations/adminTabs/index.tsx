import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IS_IOS_PLATFORM } from '../../constants';
import COLORS from '../../constants/colors.ts';
import { AdminTabParamList } from '../types.ts';
import OrdersIcon from '../../assets/svg/OrdersIcon';
import OrdersScreen from '../../screens/adminScreens/OrdersScreen';
import ScheduleScreen from '../../screens/adminScreens/ScheduleScreen';
import { fontFamilies } from '../../constants/fonts.ts';
import ScheduleRoutesIcon from '../../assets/svg/ScheduleRoutesIcon';
import CarTabIcon from '../../assets/svg/CarTabIcon';
import DriverIcon from '../../assets/svg/DriverIcon';
import PlusIcon from '../../assets/svg/PlusIcon';
import SCREENS from '../../constants/screens.ts';
import CarsScreen from '../../screens/adminScreens/CarsScreen';
import DriversScreen from '../../screens/adminScreens/DriversScreen';
import AdminFormScreen from '../../screens/adminScreens/AdminFormScreen';

const Tab = createBottomTabNavigator<AdminTabParamList>();

const AdminTabs: React.FC = () => {
   return (
      <Tab.Navigator
         screenOptions={{
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
         }}
      >
         <Tab.Screen
            name={SCREENS.ADMIN_ORDERS}
            component={OrdersScreen}
            options={{
               tabBarLabel: 'Պատվեր',
               tabBarIcon: ({ focused }) => (
                  <OrdersIcon stroke={focused ? '#D59608' : COLORS.secondaryText} />
               ),
            }}
         />
         <Tab.Screen
            name={SCREENS.ADMIN_SCHEDULES}
            component={ScheduleScreen}
            options={{
               tabBarLabel: 'Երթեր',
               tabBarIcon: ({ focused }) => (
                  <ScheduleRoutesIcon stroke={focused ? '#D59608' : COLORS.secondaryText} />
               ),
            }}
         />
         <Tab.Screen
            name={SCREENS.ADMIN_FORMS}
            component={AdminFormScreen}
            options={{
               tabBarLabel: '',
               tabBarIcon: () => (
                  <View style={styles.addButton}>
                     <PlusIcon />
                  </View>
               ),
            }}
         />
         <Tab.Screen
            name={SCREENS.ADMIN_CARS}
            component={CarsScreen}
            options={{
               tabBarLabel: 'Մեքենա',
               tabBarIcon: ({ focused }) => (
                  <CarTabIcon stroke={focused ? '#D59608' : COLORS.secondaryText} />
               ),
            }}
         />
         <Tab.Screen
            name={SCREENS.ADMIN_DRIVERS}
            component={DriversScreen}
            options={{
               tabBarLabel: 'Վարորդ',
               tabBarIcon: ({ focused }) => (
                  <DriverIcon stroke={focused ? '#D59608' : COLORS.secondaryText} />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

const styles = StyleSheet.create({
   addButton: {
      top: -25,
      position: 'absolute',
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
