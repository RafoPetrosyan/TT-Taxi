import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenProps } from '../../../types';
import normalize from '../../../utils/normalize.ts';
import { DEVICE_WIDTH } from '../../../constants';
import COLORS from '../../../constants/colors.ts';
import { useAppDispatch } from '../../../store/hooks.ts';
import { openModal } from '../../../store/modals';
import styles from './style.ts';

interface Order {
   id: string;
   routeDirection: string;
   date: string;
   time: string;
   numberOfPassengers: number;
   phoneNumber: string;
   carType: string;
   confirmed: boolean;
}

const data = [
   {
      id: '1',
      routeDirection: 'Գյումրի-Երևան',
      date: '12.05.2025',
      time: '12:30',
      numberOfPassengers: 2,
      phoneNumber: '+374 93 11 20 94',
      carType: 'Կոմֆորտ',
      confirmed: false,
   },
   {
      id: '2',
      routeDirection: 'Գյումրի-Երևան',
      date: '12.05.2025',
      time: '12:30',
      numberOfPassengers: 2,
      phoneNumber: '+374 93 11 20 94',
      carType: 'Կոմֆորտ',
      confirmed: true,
   },
];

const OrdersScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const { t } = useTranslation();
   const insets = useSafeAreaInsets();
   const dispatch = useAppDispatch();

   const onEndReached = () => {};

   const showOrderDetails = () => {
      dispatch(openModal({ type: 'CREATE_ROUTE' }));
   };

   const renderItem = ({ item }: { item: Order }) => {
      return (
         <TouchableOpacity style={styles.renderItem} onPress={showOrderDetails}>
            {item.confirmed ? (
               <View style={[styles.leftContent, { backgroundColor: COLORS.confirmedColor }]} />
            ) : (
               <LinearGradient
                  style={styles.leftContent}
                  colors={['#D6990E', '#E2AB2D', '#FFD77D']}
                  start={{ x: 0.0159, y: 0 }}
                  end={{ x: 1, y: 0 }}
               />
            )}
            <View style={styles.rightContent}>
               <View style={styles.row}>
                  <Text style={styles.rowValue}>{item.routeDirection}:</Text>
                  <Text style={styles.rowKey}>{`Օր: ${item.date}`}</Text>
               </View>
               <View style={styles.row}>
                  <Text style={styles.rowKey}>{`Հեռ. ${item.phoneNumber}`}</Text>
                  <Text style={styles.rowValue}>{`Ժամ: ${item.time}`}</Text>
               </View>
               <View style={styles.row}>
                  <Text style={styles.rowKey}>{t('time')}:</Text>
                  <Text style={styles.rowValue}>{item.time}</Text>
               </View>
               <View style={styles.row}>
                  <Text style={styles.rowKey}>{`Ուղևոր․ ${item.numberOfPassengers}`}:</Text>
               </View>
               <View style={styles.row}>
                  <Text style={styles.rowKey}>{`Տեսակ․ ${item.carType}`}:</Text>
                  <TouchableOpacity onPress={showOrderDetails}>
                     <Text
                        style={[styles.confirm, item.confirmed && { color: COLORS.confirmedColor }]}
                     >
                        {item.confirmed ? 'Հաստատված' : 'Հաստատել'}
                     </Text>
                  </TouchableOpacity>
               </View>
            </View>
         </TouchableOpacity>
      );
   };

   return (
      <View style={styles.container}>
         <View style={[styles.headerContent, { paddingTop: insets.top + normalize(28, true) }]}>
            <Text style={styles.title}>Պատվերներ</Text>
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
                  }}
               />
            </View>
         </View>
      </View>
   );
};

export default OrdersScreen;
