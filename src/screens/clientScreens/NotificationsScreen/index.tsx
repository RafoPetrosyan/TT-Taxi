import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenProps } from '../../../types';
import normalize from '../../../utils/normalize.ts';
import { DEVICE_WIDTH } from '../../../constants';
import styles from './style.ts';
import { SuccessIcon, WarningIcon } from '../../../assets/svg';

interface Notification {
   id: string;
   message: string;
   time: string;
   status: string;
}

const data = [
   {
      id: '1',
      message: 'Պատվերը հաջողությամբ չեղարկվել է',
      time: '35 րոպե առաջ',
      status: 'reject',
   },
   {
      id: '2',
      message: 'Պատվերը հաստատվել է',
      time: '35 րոպե առաջ',
      status: 'confirm',
   },
   {
      id: '3',
      message: 'Պատվերը հաջողությամբ չեղարկվել է',
      time: '35 րոպե առաջ',
      status: 'reject',
   },
   {
      id: '4',
      message: 'Պատվերը հաստատվել է',
      time: '35 րոպե առաջ',
      status: 'confirm',
   },
];

const NotificationsScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const { t } = useTranslation();
   const insets = useSafeAreaInsets();

   const onEndReached = () => {};

   const renderItem = ({ item }: { item: Notification }) => {
      return (
         <View
            style={[styles.renderItem, item.status === 'confirm' && { backgroundColor: '#F3F3F4' }]}
         >
            <View style={styles.renderItemContent}>
               <View
                  style={[
                     styles.icon,
                     { backgroundColor: item.status === 'reject' ? '#FFF3F3' : '#F5FFED' },
                  ]}
               >
                  {item.status === 'reject' ? (
                     <WarningIcon width={23} height={23} />
                  ) : (
                     <SuccessIcon width={23} height={23} />
                  )}
               </View>
               <View style={styles.rightContent}>
                  <Text style={styles.message}>{item.message}</Text>
                  <Text style={styles.time}>{item.time}</Text>
               </View>
            </View>
         </View>
      );
   };

   return (
      <View style={styles.container}>
         <View style={[styles.headerContent, { paddingTop: insets.top + normalize(28, true) }]}>
            <Text style={styles.title}>{t('notifications')}</Text>
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

export default NotificationsScreen;
