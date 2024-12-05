import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenProps } from '../../../types';
import normalize from '../../../utils/normalize.ts';
import styles from './style.ts';
import RightArrowIcon from '../../../assets/svg/RightArrowIcon';

const ProfileScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const { t } = useTranslation();
   const insets = useSafeAreaInsets();

   return (
      <View style={styles.container}>
         <View style={[styles.headerContent, { paddingTop: insets.top + normalize(28, true) }]}>
            <Text style={styles.title}>{t('personalPage')}</Text>
         </View>
         <View style={styles.contents}>
            <TouchableOpacity style={styles.row}>
               <Text style={styles.menuText}>{t('personalInformation')}</Text>
               <RightArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
               <Text style={styles.menuText}>{t('orderHistory')}</Text>
               <RightArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.row, { backgroundColor: '#F3F3F4' }]}>
               <Text style={styles.menuText}>{t('settings')}</Text>
               <RightArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
               <Text style={styles.menuText}>{t('privacy')}</Text>
               <RightArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.row, { backgroundColor: '#F3F3F4' }]}>
               <Text style={styles.menuText}>{t('contactUs')}</Text>
               <RightArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
               <Text style={styles.menuText}>{t('exit')}</Text>
               <RightArrowIcon />
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default ProfileScreen;
