import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IS_IOS_PLATFORM } from '../../constants';
import STACKS from '../../constants/stacks.ts';
import COLORS from '../../constants/colors.ts';
import HomeIcon from '../../assets/svg/HomeIcon';
import RoutesIcon from '../../assets/svg/RoutesIcon';
import NotificationIcon from '../../assets/svg/NotificationIcon';
import ProfileIcon from '../../assets/svg/ProfileIcon';
import FindRouteScreen from '../../screens/clientScreens/FindRouteScreen';
import SCREENS from '../../constants/screens.ts';
import MyRoutesStack from '../cientStacks/myRoutesStack';
import NotificationsScreen from '../../screens/clientScreens/NotificationsScreen';
import ProfileScreen from '../../screens/clientScreens/ProfileScreen';
import { ClientTabParamList } from '../types.ts';

const Tab = createBottomTabNavigator<ClientTabParamList>();

const ClientTabs: React.FC = () => {
   const insets = useSafeAreaInsets();

   return (
      <Tab.Navigator
         screenOptions={() => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
               height: IS_IOS_PLATFORM ? 45 + insets.bottom : 55,
               paddingTop: IS_IOS_PLATFORM ? 12 : 0,
               backgroundColor: COLORS.white,
               elevation: 4,
               shadowColor: '#000000',
               shadowOffset: { width: 0, height: -1 },
               shadowOpacity: 0.1,
               shadowRadius: 3,
               alignItems: 'center',
               justifyContent: 'center',
            },
            tabBarItemStyle: {
               flex: 1,
               alignItems: 'center',
               justifyContent: 'center',
               flexDirection: 'row',
            },
         })}
      >
         <Tab.Screen
            name={SCREENS.FIND_ROUTE}
            component={FindRouteScreen}
            options={{
               tabBarIcon: ({ focused }) => (
                  <HomeIcon fill={focused ? '#EAB337' : '#FFFFFF'} stroke={focused && '#EAB337'} />
               ),
            }}
         />
         <Tab.Screen
            name={STACKS.MY_ROUTES_STACK}
            component={MyRoutesStack}
            options={{
               tabBarIcon: ({ focused }) => (
                  <RoutesIcon
                     fill={focused ? '#EAB337' : '#FFFFFF'}
                     borderStroke={focused && '#EAB337'}
                     stroke={focused && '#FFFFFF'}
                  />
               ),
            }}
         />
         <Tab.Screen
            name={SCREENS.NOTIFICATIONS}
            component={NotificationsScreen}
            options={{
               tabBarIcon: ({ focused }) => (
                  <NotificationIcon
                     fill={focused ? '#EAB337' : '#FFFFFF'}
                     stroke={focused && '#EAB337'}
                  />
               ),
            }}
         />
         <Tab.Screen
            name={SCREENS.PROFILE}
            component={ProfileScreen}
            options={{
               tabBarIcon: ({ focused }) => <ProfileIcon stroke={focused && '#EAB337'} />,
            }}
         />
      </Tab.Navigator>
   );
};

export default ClientTabs;
