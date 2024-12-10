import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CloseModalIcon from '../../assets/svg/CloseModalIcon';
import COLORS from '../../constants/colors.ts';
import { fontFamilies } from '../../constants/fonts.ts';
import normalize from '../../utils/normalize.ts';
import { ModalProps } from '../types.ts';
import { Rating } from 'react-native-ratings';

const reviews = [
   { id: '1', phoneNumber: '+374 77 11 12 13', rating: 3, date: '12․12․2024' },
   { id: '2', phoneNumber: '+374 77 11 12 13', rating: 3, date: '12․12․2024' },
   { id: '3', phoneNumber: '+374 77 11 12 13', rating: 3, date: '12․12․2024' },
];

const ReviewsList: React.FC<ModalProps> = ({ onClose }) => {
   return (
      <Modal visible={true} transparent animationType="fade">
         <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
               <View style={styles.header}>
                  <Text style={styles.headerText}>Անուն Ազգանուն</Text>
                  <TouchableOpacity onPress={onClose}>
                     <CloseModalIcon />
                  </TouchableOpacity>
               </View>
               <View style={styles.infoContent}>
                  {reviews.map((item, index) => (
                     <View style={styles.row} key={index}>
                        <View style={styles.rowItem}>
                           <Text style={styles.text}>{item.phoneNumber}</Text>
                           <Text style={[styles.text, styles.date]}>{item.date}</Text>
                        </View>
                        <View style={styles.ratingItem}>
                           <Rating
                              showRating={false}
                              imageSize={13}
                              readonly={true}
                              startingValue={item.rating}
                              ratingColor={'#FFA012'}
                           />
                           <Text style={[styles.rate, styles.date]}>{item.rating}</Text>
                        </View>
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
      marginTop: normalize(8, true),
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#F1F4FB',
   },
   rowItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
   },
   ratingItem: {
      flexDirection: 'row',
      width: '100%',
      marginTop: normalize(9, true),
      alignItems: 'center',
   },
   text: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
      lineHeight: 17,
      color: COLORS.secondaryText,
   },
   date: { color: '#818195' },
   rate: { marginLeft: 5 },
   value: {
      color: COLORS.secondaryText,
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
      marginLeft: 5,
   },
});

export default ReviewsList;
