import React from 'react';
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScreenProps } from '../../../types';
import normalize from '../../../utils/normalize.ts';
import { DEVICE_WIDTH } from '../../../constants';
import styles from './style.ts';

interface Driver {
   id: string;
   driver: string;
   car: string;
   phoneNumber: string;
   carType: string;
}

const data = [
   {
      id: '1',
      driver: 'Անուն Ազգանուն',
      car: 'Ֆորդ / 00 TT 000',
      carType: 'economy',
      phoneNumber: '+374 77 11 55 11',
   },
   {
      id: '2',
      driver: 'Անուն Ազգանուն',
      car: 'Ֆորդ / 00 TT 000',
      carType: 'comfort',
      phoneNumber: '+374 77 11 55 11',
   },
];

const DriversScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const onEndReached = () => {};

   const renderItem = ({ item }: { item: Driver }) => {
      return (
         <View style={[styles.renderItem, { position: 'relative' }]}>
            <Image
               source={
                  item.carType === 'economy'
                     ? require('../../../assets/images/economy.png')
                     : require('../../../assets/images/comfort.png')
               }
               style={styles.backgroundImage}
            />
            <View style={styles.rightContent}>
               <View style={styles.row}>
                  <Text style={styles.boldText}>{item.driver}</Text>
                  <View
                     style={[
                        styles.carType,
                        item.carType === 'comfort' && { backgroundColor: '#6488EA' },
                     ]}
                  >
                     <Text style={styles.carTypeText}>
                        {item.carType === 'economy' ? 'Էկոնոմ' : 'կոնֆորտ'}
                     </Text>
                  </View>
               </View>

               <View style={styles.row}>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.textKey}>Մեքենա.</Text>
                     <Text style={styles.textValue}>{item.car}</Text>
                  </View>
               </View>

               <View style={[styles.row, { alignItems: 'flex-start' }]}>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.textKey}>Հեռ.</Text>
                     <Text style={styles.textValue}>{item.phoneNumber}</Text>
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
               <Text style={styles.title}>Վարորդներ</Text>
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

export default DriversScreen;
