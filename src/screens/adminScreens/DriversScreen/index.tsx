import React from 'react';
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Rating } from 'react-native-ratings';
import { ScreenProps } from '../../../types';
import { DEVICE_WIDTH } from '../../../constants';
import normalize from '../../../utils/normalize.ts';
import { useAppDispatch } from '../../../store/hooks.ts';
import { openModal } from '../../../store/modals';
import styles from './style.ts';

interface Driver {
   id: string;
   driver: string;
   car: string;
   phoneNumber: string;
   carType: string;
   rating: number;
}

const data = [
   {
      id: '1',
      driver: 'Անուն Ազգանուն',
      car: 'Ֆորդ / 00 TT 000',
      carType: 'economy',
      phoneNumber: '+374 77 11 55 11',
      rating: 4.9,
   },
   {
      id: '2',
      driver: 'Անուն Ազգանուն',
      car: 'Ֆորդ / 00 TT 000',
      carType: 'comfort',
      phoneNumber: '+374 77 11 55 11',
      rating: 3,
   },
];

const DriversScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const insets = useSafeAreaInsets();
   const dispatch = useAppDispatch();

   const onEndReached = () => {};

   const seeReviews = () => {
      dispatch(openModal({ type: 'REVIEWS_LIST' }));
   };

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
                        item.carType === 'comfort' && { backgroundColor: '#334581' },
                     ]}
                  >
                     <Text style={styles.carTypeText}>
                        {item.carType === 'economy' ? 'Էկոնոմ' : 'կոնֆորտ'}
                     </Text>
                  </View>
               </View>

               <View style={styles.row}>
                  <View style={styles.ratingContent}>
                     <Rating
                        showRating={false}
                        imageSize={13}
                        readonly={true}
                        startingValue={item.rating}
                        ratingColor={'#FFA012'}
                     />
                     <Text style={styles.ratingText}>{item.rating}</Text>
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
               </View>
               <View style={styles.buttons}>
                  <TouchableOpacity onPress={seeReviews}>
                     <Text style={[styles.edit, styles.seeRating]}>Տեսնել վարկանիշը</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                     <Text style={styles.edit}>Փոփոխել</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      );
   };

   return (
      <View style={styles.container}>
         <View style={[styles.headerContent, { paddingTop: insets.top + normalize(28, true) }]}>
            <Text style={styles.title}>Վարորդներ</Text>
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

export default DriversScreen;
