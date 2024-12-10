import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenProps } from '../../../types';
import normalize from '../../../utils/normalize.ts';
import { DEVICE_WIDTH } from '../../../constants';
import styles from './style.ts';
import { useAppDispatch } from '../../../store/hooks.ts';
import { openModal } from '../../../store/modals';

const statusColors: Record<'inPending' | 'ready' | 'gathering' | 'finished', string> = {
   inPending: '#EBB946',
   ready: '#2E7D32',
   gathering: '#334581',
   finished: '#CC252B',
};

type StatusType = keyof typeof statusColors;

interface Schedule {
   id: string;
   car: string;
   direction: string;
   carType: string;
   date: string;
   driver: string;
   phoneNumber: string;
   status: StatusType;
   numberOfPassengers: number;
}

const data: Schedule[] = [
   {
      id: '1',
      direction: 'Երևան-Գյումրի',
      numberOfPassengers: 2,
      carType: 'economy',
      car: 'Ֆորդ / 00 TT 000',
      date: 'Օր։ 13․12․24 | Ժամ։ 12։00',
      driver: 'Անուն Ազգանուն',
      phoneNumber: '+374 77 11 55 11',
      status: 'inPending',
   },
   {
      id: '2',
      direction: 'Երևան-Գյումրի',
      numberOfPassengers: 5,
      carType: 'economy',
      car: 'Ֆորդ / 00 TT 000',
      date: 'Օր։ 13․12․24 | Ժամ։ 12։00',
      driver: 'Անուն Ազգանուն',
      phoneNumber: '+374 77 11 55 11',
      status: 'ready',
   },
   {
      id: '3',
      direction: 'Երևան-Գյումրի',
      numberOfPassengers: 5,
      carType: 'economy',
      car: 'Ֆորդ / 00 TT 000',
      date: 'Օր։ 13․12․24 | Ժամ։ 12։00',
      driver: 'Անուն Ազգանուն',
      phoneNumber: '+374 77 11 55 11',
      status: 'gathering',
   },
   {
      id: '4',
      direction: 'Երևան-Գյումրի',
      numberOfPassengers: 5,
      carType: 'economy',
      car: 'Ֆորդ / 00 TT 000',
      date: 'Օր։ 13․12․24 | Ժամ։ 12։00',
      driver: 'Անուն Ազգանուն',
      phoneNumber: '+374 77 11 55 11',
      status: 'finished',
   },
];

const DriverScheduleScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const insets = useSafeAreaInsets();
   const dispatch = useAppDispatch();

   const onEndReached = () => {};

   const showAddresses = () => {
      dispatch(openModal({ type: 'ADDRESSES' }));
   };

   const renderItem = ({ item }: { item: Schedule }) => {
      return (
         <View style={[styles.renderItem, { position: 'relative' }]}>
            <View style={styles.rightContent}>
               <View style={styles.row}>
                  <Text style={[styles.boldText, { fontSize: 18, marginTop: 12 }]}>
                     {item.direction}
                  </Text>
                  <View
                     style={[
                        styles.status,
                        {
                           backgroundColor: statusColors[item.status],
                        },
                     ]}
                  >
                     <Text style={styles.carTypeText}>
                        {item.status === 'inPending' && 'Ընթացքի մեջ է'}
                        {item.status === 'ready' && 'Սկսել'}
                        {item.status === 'gathering' && 'Հավաքվում է'}
                        {item.status === 'finished' && 'Ավարտված'}
                     </Text>
                  </View>
               </View>
               <View style={[styles.row, { marginTop: 5 }]}>
                  <Text style={styles.boldText}>{item.date}</Text>
               </View>
               <View style={styles.row}>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.textKey}>Ուղևորիների թիվը.</Text>
                     <Text style={styles.textValue}>{item.numberOfPassengers}</Text>
                  </View>
               </View>
               <View style={styles.row}>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.textKey}>Մեքենա.</Text>
                     <Text style={styles.textValue}>{item.car}</Text>
                  </View>
               </View>
               <View style={styles.row}>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.textKey}>Դաս.</Text>
                     <Text style={styles.textValue}>
                        {item.carType === 'economy' ? 'Էկոնոմ' : 'Կոմֆորտ'}
                     </Text>
                  </View>
               </View>
               <View style={styles.buttons}>
                  <TouchableOpacity onPress={showAddresses}>
                     <Text style={styles.see}>Տեսնել Հասցեները</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      );
   };

   return (
      <View style={styles.container}>
         <View style={[styles.headerContent, { paddingTop: insets.top + normalize(28, true) }]}>
            <Text style={styles.title}>Ժամանակացույց</Text>
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

export default DriverScheduleScreen;
