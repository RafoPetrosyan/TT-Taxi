import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CloseModalIcon from '../../assets/svg/CloseModalIcon';
import COLORS from '../../constants/colors.ts';
import { fontFamilies } from '../../constants/fonts.ts';
import normalize from '../../utils/normalize.ts';
import { ModalProps } from '../types.ts';

const addresses = [
   'Մուշ 2 թաղ․, թիվ 4/54',
   'Գարեգին Նժդեհի 7',
   'Կայարանամերձ Հրապարակ',
   'Մ.խորենացու Փ 10 Շ',
   'Շչորսի Փ 1 Շ',
];

const Addresses: React.FC<ModalProps> = ({ onClose }) => {
   return (
      <Modal visible={true} transparent animationType="fade">
         <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
               <View style={styles.header}>
                  <Text style={styles.headerText}>Հասցեներ</Text>
                  <TouchableOpacity onPress={onClose}>
                     <CloseModalIcon />
                  </TouchableOpacity>
               </View>
               <View style={styles.infoContent}>
                  {addresses.map((item, index) => (
                     <View style={styles.row} key={index}>
                        <Text style={styles.value}>{index + 1}.</Text>
                        <Text style={styles.value}>{item}</Text>
                     </View>
                  ))}
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
      marginTop: normalize(16, true),
   },
   value: {
      color: COLORS.secondaryText,
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
      marginLeft: 5,
   },
});

export default Addresses;