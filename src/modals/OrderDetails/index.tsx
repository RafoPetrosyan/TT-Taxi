import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CloseModalIcon from '../../assets/svg/CloseModalIcon';
import { useTranslation } from 'react-i18next';
import COLORS from '../../constants/colors.ts';
import { fontFamilies } from '@constants/fonts.ts';
import normalize from '../../utils/normalize.ts';
import { ModalProps } from '../types.ts';

const OrderDetails: React.FC<ModalProps> = ({ onClose }) => {
   const { t } = useTranslation();

   return (
      <Modal visible={true} transparent animationType="fade">
         <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
               <View style={styles.header}>
                  <Text style={styles.headerText}>Երթի մանրամասներ</Text>
                  <TouchableOpacity onPress={onClose}>
                     <CloseModalIcon />
                  </TouchableOpacity>
               </View>
               <View style={styles.infoContent}>
                  <View style={styles.row}>
                     <Text style={styles.key}>Ամսաթիվ։</Text>
                     <Text style={styles.value}>12․02․2025</Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.key}>Ժամ։</Text>
                     <Text style={styles.value}>12։30</Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.key}>Ուղևորների թիվը։</Text>
                     <Text style={styles.value}>2</Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.key}>Հասցե։</Text>
                     <Text style={styles.value}>Գյումրու ավտոկայան</Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.key}>Երթի ուղղությունը։</Text>
                     <Text style={styles.value}>Գյումրի - Երևան</Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.key}>Մեքենա։</Text>
                     <Text style={styles.value}>Կոմֆորտ / Tesla / 55 TT 555</Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.key}>Հեռ։</Text>
                     <Text style={styles.value}>+374 00 00 00 00</Text>
                  </View>
               </View>
               <View style={styles.bottomContent}>
                  <View style={{ flexDirection: 'row' }}>
                     <TouchableOpacity>
                        <Text style={styles.cancel}>{t('cancel')}</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={{ marginLeft: normalize(18) }}>
                        <Text style={[styles.cancel, styles.confirm]}>{t('cancel')}</Text>
                     </TouchableOpacity>
                  </View>
               </View>
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
   },
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#F1F4FB',
      paddingBottom: 18,
   },
   headerText: {
      color: COLORS.primaryText,
      fontSize: 16,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
   },
   infoContent: {
      marginTop: normalize(9, true),
      paddingBottom: normalize(27, true),
   },
   row: {
      flexDirection: 'row',
      marginTop: normalize(8, true),
   },
   key: {
      color: COLORS.secondaryText,
      fontSize: 12,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
   },
   value: {
      color: '#050505',
      fontSize: 14,
      fontWeight: '500',
      fontFamily: fontFamilies.MONTSERRAT['500'],
      marginLeft: 5,
   },
   bottomContent: {
      alignItems: 'flex-end',
      paddingTop: normalize(14, true),
      borderTopWidth: 1,
      borderTopColor: '#F1F4FB',
   },
   cancel: {
      color: COLORS.danger,
      fontSize: 12,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
   },
   confirm: {
      color: COLORS.primary,
   },
});

export default OrderDetails;
