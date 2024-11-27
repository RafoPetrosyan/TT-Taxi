import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/modals';
import CloseModalIcon from '../../assets/svg/CloseModalIcon';
import { useTranslation } from 'react-i18next';
import COLORS from '../../constants/colors.ts';
import { fontFamilies } from '../../constants/fonts.ts';
import normalize from '../../utils/normalize.ts';
import SuccessIcon from '../../assets/svg/SuccessIcon';

const OrderCancelComplete: React.FC = () => {
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
               <View style={{ marginTop: normalize(89, true) }}>
                  <SuccessIcon />
               </View>
               <Text style={styles.subTitle}>{t('orderSuccessfullyCanceled')}</Text>
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
      width: normalize(326),
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
   subTitle: {
      width: 200,
      color: COLORS.primaryText,
      lineHeight: 17,
      fontSize: 14,
      fontWeight: '300',
      fontFamily: fontFamilies.MONTSERRAT['300'],
      marginTop: normalize(14, true),
      textAlign: 'center',
      marginBottom: normalize(119, true),
   },
});

export default OrderCancelComplete;
