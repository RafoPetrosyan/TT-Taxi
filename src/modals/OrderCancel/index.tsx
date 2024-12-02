import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CloseModalIcon from '../../assets/svg/CloseModalIcon';
import { useTranslation } from 'react-i18next';
import COLORS from '../../constants/colors.ts';
import { fontFamilies } from '../../constants/fonts.ts';
import normalize from '../../utils/normalize.ts';
import ErrorIcon from '../../assets/svg/ErrorIcon';
import { ModalProps } from '../types.ts';

const OrderCancel: React.FC<ModalProps> = ({ onClose }) => {
   const { t } = useTranslation();

   return (
      <Modal visible={true} transparent animationType="fade">
         <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
               <View style={styles.header}>
                  <TouchableOpacity onPress={onClose}>
                     <CloseModalIcon />
                  </TouchableOpacity>
               </View>
               <View style={{ marginTop: normalize(89, true) }}>
                  <ErrorIcon />
               </View>
               <Text style={styles.subTitle}>{t('cancelOrderError')}</Text>
               <TouchableOpacity style={styles.cancelButton}>
                  <Text>{t('cancel')}</Text>
               </TouchableOpacity>
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
   subTitle: {
      color: COLORS.primaryText,
      lineHeight: 17,
      fontSize: 14,
      fontWeight: '300',
      fontFamily: fontFamilies.MONTSERRAT['300'],
      marginTop: normalize(14, true),
      textAlign: 'center',
      marginBottom: normalize(119, true),
      maxWidth: normalize(267),
   },
   cancelButton: {
      width: normalize(289),
      height: normalize(42),
      borderRadius: 14,
      backgroundColor: '#FFF3F3',
      justifyContent: 'center',
      alignItems: 'center',
   },
   cancelText: {
      color: '#CC252B',
      fontSize: 14,
      fontWeight: '500',
      fontFamily: fontFamilies.MONTSERRAT['500'],
   },
});

export default OrderCancel;
