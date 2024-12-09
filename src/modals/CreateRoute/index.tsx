import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import CloseModalIcon from '../../assets/svg/CloseModalIcon';
import COLORS from '../../constants/colors.ts';
import { fontFamilies } from '@constants/fonts.ts';
import normalize from '../../utils/normalize.ts';
import { ModalProps } from '../types.ts';
import DropDownIcon from '../../assets/svg/DropDownIcon';

const places = ['Գյումրի', 'Գյումրի', 'Երևան'];

const CreateRoute: React.FC<ModalProps> = ({ onClose }) => {
   return (
      <Modal visible={true} transparent animationType="fade">
         <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
               <View style={styles.header}>
                  <Text style={styles.headerText}>Ավելացնել երթ</Text>
                  <TouchableOpacity onPress={onClose}>
                     <CloseModalIcon />
                  </TouchableOpacity>
               </View>
               <View style={styles.infoContent}>
                  <Text style={styles.label}>Ընտրել մեքենա առաջարկվող մեքենաների ցանկից</Text>
                  <SelectDropdown
                     data={places}
                     onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                     }}
                     renderButton={(selectedItem) => {
                        return (
                           <View style={styles.selectOption}>
                              <Text style={styles.selectOptionText}>
                                 {selectedItem ? selectedItem : 'Ընտրել Ժամանակացույցից'}
                              </Text>
                              <DropDownIcon />
                           </View>
                        );
                     }}
                     renderItem={(item, index, isSelected) => {
                        return (
                           <View
                              style={{
                                 ...styles.dropdownItemStyle,
                                 ...(isSelected && { backgroundColor: '#D2D9DF' }),
                              }}
                           >
                              <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                           </View>
                        );
                     }}
                     showsVerticalScrollIndicator={false}
                     dropdownStyle={styles.dropdownMenuStyle}
                     statusBarTranslucent={true}
                  />
               </View>
               <View style={styles.bottomContent}>
                  <View style={{ flexDirection: 'row' }}>
                     <TouchableOpacity style={styles.confirm}>
                        <Text style={styles.confirmText}>Հաստատել</Text>
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
      marginTop: normalize(47, true),
      paddingBottom: normalize(27, true),
   },
   label: {
      color: '#ABB1BE',
      fontSize: 12,
      fontWeight: '300',
      fontFamily: fontFamilies.MONTSERRAT['300'],
   },
   bottomContent: {
      alignItems: 'center',
      marginTop: normalize(90, true),
   },
   confirm: {
      width: normalize(289),
      height: normalize(42),
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#262C28',
   },
   confirmText: {
      color: COLORS.white,
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
   },

   selectOption: {
      width: normalize(281),
      height: normalize(46, true),
      borderWidth: 1,
      borderColor: '#F1F4FB',
      borderRadius: 14,
      marginTop: normalize(7, true),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: normalize(15),
   },

   selectOptionText: {
      color: COLORS.secondaryText,
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
   },

   dropdownButtonStyle: {
      width: '100%',
      height: normalize(52, true),
      borderRadius: 14,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: normalize(16),
      borderWidth: 1,
      borderColor: '#F1F4FB',
      marginTop: 6,
   },
   dropdownButtonTxtStyle: {
      flex: 1,
      fontSize: 14,
      fontWeight: '400',
      color: '#151E26',
      marginLeft: normalize(11),
      fontFamily: fontFamilies.MONTSERRAT['400'],
   },
   dropdownButtonArrowStyle: {
      fontSize: 28,
   },
   dropdownButtonIconStyle: {
      fontSize: 28,
      marginRight: 8,
   },
   dropdownMenuStyle: {
      backgroundColor: '#E9ECEF',
      borderRadius: 8,
   },
   dropdownItemStyle: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
   },
   dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
   },
   dropdownItemIconStyle: {
      fontSize: 28,
      marginRight: 8,
   },
});

export default CreateRoute;
