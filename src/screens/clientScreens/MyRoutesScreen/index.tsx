import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenProps } from '../../../types';
import RouteDirectionIcon from '../../../assets/svg/RouteDirectionIcon';
import normalize from '../../../utils/normalize.ts';
import CalendarIcon from '../../../assets/svg/CalendarIcon.js';
import ClockIcon from '../../../assets/svg/ClockIcon';
import PeopleIcon from '../../../assets/svg/PeopleIcon';
import LocationIcon from '../../../assets/svg/LocationIcon';
import CarIcon from '../../../assets/svg/CarIcon';
import { DEVICE_WIDTH } from '../../../constants';
import { useAppDispatch } from '../../../store/hooks.ts';
import { openModal } from '../../../store/modals';
import styles from './style.ts';
import SCREENS from '../../../constants/screens.ts';

interface Car {
   id: string;
   routeDirection: string;
   date: string;
   time: string;
   numberOfPassengers: number;
   address: string;
   car: string;
   status: string;
}

const data = [
   {
      id: '1',
      routeDirection: 'Գյումրի - Երևան',
      date: '12.05.2025',
      time: '12:30',
      numberOfPassengers: 2,
      address: 'Գյումրու ավտոկայան',
      car: 'Կոմֆորտ / Tesla / 55 TT 555',
      status: 'in_pending',
   },
   {
      id: '2',
      routeDirection: 'Գյումրի - Երևան',
      date: '12.05.2025',
      time: '12:30',
      numberOfPassengers: 2,
      address: 'Գյումրու ավտոկայան',
      car: 'Կոմֆորտ / Tesla / 55 TT 555',
      status: 'in_progress',
   },
];

const MyRoutesScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const { t } = useTranslation();
   const insets = useSafeAreaInsets();
   const dispatch = useAppDispatch();

   const onEndReached = () => {};

   const handleCancelOrder = () => {
      dispatch(openModal({ type: 'ORDER_CANCEL' }));
   };

   const goToFollowProgress = () => {
      navigation.navigate(SCREENS.FOLLOW_PROGRESS);
   };

   const renderItem = ({ item }: { item: Car }) => {
      return (
         <View style={styles.renderItem}>
            {item.status === 'in_progress' ? (
               <LinearGradient
                  style={styles.leftContent}
                  colors={['#D6990E', '#E2AB2D', '#FFD77D']}
                  start={{ x: 0.0159, y: 0 }}
                  end={{ x: 1, y: 0 }}
               />
            ) : (
               <View style={[styles.leftContent, { backgroundColor: '#6AA84F' }]} />
            )}

            <View style={styles.rightContent}>
               <View style={styles.row}>
                  <RouteDirectionIcon />
                  <Text style={styles.rowKey}>{t('directionOfTravel')}:</Text>
                  <Text style={styles.rowValue}>{item.routeDirection}</Text>
               </View>
               <View style={styles.row}>
                  <CalendarIcon width={24} height={24} />
                  <Text style={styles.rowKey}>{t('date')}:</Text>
                  <Text style={styles.rowValue}>{item.date}</Text>
               </View>
               <View style={styles.row}>
                  <ClockIcon width={24} height={24} />
                  <Text style={styles.rowKey}>{t('time')}:</Text>
                  <Text style={styles.rowValue}>{item.time}</Text>
               </View>
               <View style={styles.row}>
                  <PeopleIcon width={24} height={24} />
                  <Text style={styles.rowKey}>{t('numberOfPassengers')}:</Text>
                  <Text style={styles.rowValue}>{item.numberOfPassengers}</Text>
               </View>
               <View style={styles.row}>
                  <LocationIcon width={24} height={24} stroke={'#D59608'} />
                  <Text style={styles.rowKey}>{t('address')}:</Text>
                  <Text style={styles.rowValue}>{item.address}</Text>
               </View>
               <View style={styles.row}>
                  <CarIcon width={24} height={24} />
                  <Text style={styles.rowKey}>{t('car')}:</Text>
                  <Text style={styles.rowValue}>{item.car}</Text>
               </View>
               <View style={styles.buttons}>
                  {item.status === 'in_pending' ? (
                     <>
                        <TouchableOpacity onPress={handleCancelOrder}>
                           <Text style={styles.cancel}>{t('cancel')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                           <Text style={[styles.cancel, styles.edit]}>{t('edit')}</Text>
                        </TouchableOpacity>
                     </>
                  ) : (
                     <TouchableOpacity onPress={goToFollowProgress} style={styles.followProgress}>
                        <LocationIcon stroke={'#FFFFFF'} width={20} />
                        <Text style={styles.followText}>{t('followTheProgress')}</Text>
                     </TouchableOpacity>
                  )}
               </View>
            </View>
         </View>
      );
   };

   return (
      <View style={styles.container}>
         <View style={[styles.headerContent, { paddingTop: insets.top + normalize(28, true) }]}>
            <Text style={styles.title}>{t('myMarches')}</Text>
         </View>
         <View style={styles.contents}>
            <View style={styles.topContent}>
               <FlatList
                  data={data}
                  renderItem={renderItem}
                  pagingEnabled
                  snapToAlignment={'center'}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id}
                  onEndReachedThreshold={1}
                  onEndReached={onEndReached}
                  style={{
                     width: DEVICE_WIDTH,
                     paddingTop: normalize(16),
                  }}
               />
            </View>
         </View>
      </View>
   );
};

export default MyRoutesScreen;
