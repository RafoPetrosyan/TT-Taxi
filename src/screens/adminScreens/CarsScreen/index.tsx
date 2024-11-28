import React from 'react';
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScreenProps } from '../../../types';
import normalize from '../../../utils/normalize.ts';
import { DEVICE_WIDTH } from '../../../constants';
import styles from './style.ts';

interface Car {
   id: string;
   carModel: string;
   carNumber: string;
   carType: string;
   numberOfPassengers: number;
}

const data = [
   {
      id: '1',
      numberOfPassengers: 2,
      carNumber: '00 TT 000',
      carType: 'economy',
      carModel: 'Ֆորդ',
   },
   {
      id: '2',
      numberOfPassengers: 2,
      carNumber: '00 TT 000',
      carType: 'comfort',
      carModel: 'Կիա',
   },
];

const CarsScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const onEndReached = () => {};

   const renderItem = ({ item }: { item: Car }) => {
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
                  <Text style={styles.boldText}>{item.carModel}</Text>
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
               <View style={[styles.row, { marginTop: 5 }]}>
                  <Text style={[styles.boldText, { fontSize: 16 }]}>{item.carNumber}</Text>
               </View>

               <View style={[styles.row, { alignItems: 'flex-start' }]}>
                  <Text style={styles.text}>
                     {`Ուղևորիների քանակը։ ${item.numberOfPassengers}`}
                  </Text>
                  <View style={styles.buttons}>
                     <TouchableOpacity>
                        <Text style={styles.delete}>Ջնջել</Text>
                     </TouchableOpacity>
                     <TouchableOpacity>
                        <Text style={[styles.delete, styles.edit]}>Փոփոխել</Text>
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
               <Text style={styles.title}>Մեքենաներ</Text>
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

export default CarsScreen;
