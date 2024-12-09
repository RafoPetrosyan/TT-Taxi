import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/modals';
import CloseModalIcon from '../../assets/svg/CloseModalIcon';
import CompleteOrderIcon from '../../assets/svg/CompleteOrderIcon';
import { useTranslation } from 'react-i18next';
import COLORS from '../../constants/colors.ts';
import { fontFamilies } from '@constants/fonts.ts';
import normalize from '../../utils/normalize.ts';

const OrderComplete: React.FC = () => {
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
               <CompleteOrderIcon />
               <Text style={styles.title}>{t('yourOrderHasBeenConfirmed')}</Text>
               <Text style={styles.subTitle}>{t('confirmationReceipt')}</Text>
               <Text style={[styles.subTitle, styles.desc]}>
                  {t('thankYouForUsingOurServices')}
               </Text>
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
      marginTop: normalize(79, true),
   },
});

export default OrderComplete;
