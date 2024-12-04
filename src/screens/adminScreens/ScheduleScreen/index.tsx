import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { ScreenProps } from '../../../types';
import normalize from '../../../utils/normalize.ts';
import { DEVICE_WIDTH } from '../../../constants';
import styles from './style.ts';

interface Schedule {
   id: string;
   car: string;
   direction: string;
   carType: string;
   date: string;
   driver: string;
   phoneNumber: string;
   status: string;
   numberOfPassengers: number;
}

const data = [
   {
      id: '1',
      direction: 'Երևան-Գյումրի',
      numberOfPassengers: 2,
      carType: 'economy',
      car: 'Ֆորդ / 00 TT 000',
      date: 'Օր։ 13․12․24 | Ժամ։ 12։00',
      driver: 'Անուն Ազգանուն',
      phoneNumber: '+374 77 11 55 11',
      status: 'pending',
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
];

const ScheduleScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const onEndReached = () => {};

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
                        item.status === 'ready' && { backgroundColor: '#269B26' },
                     ]}
                  >
                     <Text style={styles.carTypeText}>
                        {item.carType === 'pending' ? 'Հավաքվում է' : 'Պատրաստ է'}
                     </Text>
                  </View>
               </View>
               <View style={[styles.row, { marginTop: 5 }]}>
                  <Text style={styles.boldText}>{item.date}</Text>
               </View>

               <View style={styles.row}>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.textKey}>Վարորդ.</Text>
                     <Text style={styles.textValue}>{item.driver}</Text>
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
                     <Text style={styles.textKey}>Հեռ.</Text>
                     <Text style={styles.textValue}>{item.phoneNumber}</Text>
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

               <View style={[styles.row, { alignItems: 'flex-start' }]}>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.textKey}>Ուղևորիների քանակը.</Text>
                     <Text style={styles.textValue}>{item.numberOfPassengers}</Text>
                  </View>
                  <View style={styles.buttons}>
                     <TouchableOpacity>
                        <Text style={styles.edit}>Փոփոխել</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </View>
      );
   };

   return (
      <View style={styles.container}>
         <View style={styles.contents}>
            <View style={styles.topContent}>
               <Text style={styles.title}>Ժամանակացույց</Text>
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
                     paddingTop: normalize(41),
                  }}
               />
            </View>
         </View>
      </View>
   );
};

export default ScheduleScreen;
