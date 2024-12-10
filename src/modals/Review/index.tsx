import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Rating } from 'react-native-ratings';
import { closeModal } from '../../store/modals';
import CloseModalIcon from '../../assets/svg/CloseModalIcon';
import { useTranslation } from 'react-i18next';
import COLORS from '../../constants/colors.ts';
import { fontFamilies } from '../../constants/fonts.ts';
import normalize from '../../utils/normalize.ts';
import ReviewModalIcon from '../../assets/svg/ReviewModalIcon';

const Review: React.FC = () => {
   const { t } = useTranslation();
   const dispatch = useDispatch();

   const handleClose = () => {
      dispatch(closeModal());
   };

   return (
      <Modal visible={true} transparent animationType="fade">
         <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
               <View style={styles.header}>
                  <TouchableOpacity onPress={handleClose}>
                     <CloseModalIcon />
                  </TouchableOpacity>
               </View>
               <ReviewModalIcon />
               <Text style={styles.title}>{t('rateTheMarch')}</Text>
               <Rating
                  onFinishRating={(e: any) => console.log(e)}
                  style={{ paddingVertical: 10 }}
                  showRating={false}
                  ratingColor={'#378fe9'}
               />
               <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>{t('send')}</Text>
               </TouchableOpacity>
               <Text style={styles.desc}>{t('reviewDesc')}</Text>
            </View>
         </View>
      </Modal>
   );
};

const styles = StyleSheet.create({
   modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   },
   modalContent: {
      width: '80%',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 16,
      alignItems: 'center',
   },
   header: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'flex-end',
      width: '100%',
   },
   //#EAB337
   title: {
      color: COLORS.primaryText,
      lineHeight: 19,
      fontSize: 16,
      fontWeight: '500',
      fontFamily: fontFamilies.MONTSERRAT['500'],
      textTransform: 'uppercase',
      marginTop: normalize(26, true),
   },
   subTitle: {
      color: COLORS.primaryText,
      lineHeight: 17,
      fontSize: 12,
      fontWeight: '300',
      fontFamily: fontFamilies.MONTSERRAT['300'],
      marginTop: normalize(14, true),
      textAlign: 'center',
   },
   desc: {
      color: COLORS.secondaryText,
      lineHeight: 17,
      fontSize: 12,
      fontWeight: '300',
      fontFamily: fontFamilies.MONTSERRAT['300'],
      marginTop: normalize(9, true),
      textAlign: 'center',
   },
   button: {
      width: normalize(289),
      height: normalize(42, true),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#262C28',
      borderRadius: 14,
      marginTop: normalize(64, true),
   },
   buttonText: {
      color: COLORS.white,
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
   },
});

export default Review;
