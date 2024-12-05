import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenProps } from '../../../types';
import normalize from '../../../utils/normalize.ts';
import styles from './style.ts';
import BackIcon from '../../../assets/svg/BackIcon';

const FollowProgressScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const { t } = useTranslation();
   const insets = useSafeAreaInsets();

   const goToBack = () => {
      navigation.goBack();
   };

   return (
      <View style={styles.container}>
         <View style={[styles.headerContent, { paddingTop: insets.top + normalize(28, true) }]}>
            <Pressable onPress={goToBack} style={{ paddingHorizontal: 10 }}>
               <BackIcon />
            </Pressable>
            <Text style={styles.title}>{t('followTheProgress')}</Text>
            <View />
         </View>
         <View style={styles.contents}>
            <Text>wddwdw</Text>
         </View>
      </View>
   );
};

export default FollowProgressScreen;
