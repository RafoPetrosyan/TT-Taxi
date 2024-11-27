import React, { useState } from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   KeyboardAvoidingView,
   ScrollView,
   Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-native-date-picker';
import SelectDropdown from 'react-native-select-dropdown';
import { IS_IOS_PLATFORM } from '../../../constants';
import { ScreenProps } from '../../../types';
import DownIcon from '../../../assets/svg/DownIcon';
import LocationIcon from '../../../assets/svg/LocationIcon';
import ReplaceIcon from '../../../assets/svg/ReplaceIcon';
import DropDownIcon from '../../../assets/svg/DropDownIcon';
import PeopleIcon from '../../../assets/svg/PeopleIcon';
import styles from './style.ts';
import moment from 'moment';
import CalendarIcon from '../../../assets/svg/CalendarIcon.js';
import { useAppDispatch } from '../../../store/hooks.ts';
import { openModal } from '../../../store/modals';

const passengersCounts = [1, 2, 3, 4];
const places = [
   'Գյումրի, ավտոկայանի տարածք',
   'Գյումրի, Ալեք Մանուկյան 1',
   'Երևան, Սասունցի Դավիթ կայարան',
];

const FindRouteScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const { t } = useTranslation();
   const dispatch = useAppDispatch();
   const [openDatePicker, setOpenDatePicker] = useState(false);
   const [openTimePicker, setOpenTimePicker] = useState(false);
   const [selectedCarType, setSelectedCarType] = useState('comfort');
   const [date, setDate] = useState<Date | null>(null);
   const [time, setTime] = useState<Date | null>(null);

   const onSubmit = () => {
      dispatch(openModal({ type: 'ORDER_CANCEL_ERROR', content: { x: 2 } }));
   };

   return (
      <KeyboardAvoidingView
         style={{ flex: 1 }}
         behavior={IS_IOS_PLATFORM ? 'padding' : undefined}
         keyboardVerticalOffset={IS_IOS_PLATFORM ? 60 : 0}
      >
         <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
               <View style={styles.contents}>
                  <View style={styles.topContent}>
                     <Text style={styles.title}>{t('findARoute')}</Text>
                     <View style={styles.form}>
                        <View style={styles.selectRoutesContent}>
                           <View style={styles.leftContent}>
                              <SelectDropdown
                                 data={places}
                                 onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                 }}
                                 renderButton={(selectedItem) => {
                                    return (
                                       <View style={styles.textContainer}>
                                          <Text style={styles.text}>{t('startOfTheMarch')}</Text>
                                          {selectedItem && (
                                             <Text style={styles.locationText}>{selectedItem}</Text>
                                          )}
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
                              />

                              <View style={styles.divider}></View>

                              <SelectDropdown
                                 data={places}
                                 onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                 }}
                                 renderButton={(selectedItem) => {
                                    return (
                                       <View style={styles.textContainer}>
                                          <Text style={styles.text}>{t('endOfTheMarch')}</Text>

                                          {selectedItem && (
                                             <Text style={styles.locationText}>{selectedItem}</Text>
                                          )}
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
                              />
                           </View>

                           <TouchableOpacity style={styles.replaceRouteContainer}>
                              <View style={styles.replaceCircle}>
                                 <ReplaceIcon width={14} height={14} />
                              </View>
                           </TouchableOpacity>

                           <View style={styles.iconContainer}>
                              <View
                                 style={{
                                    borderLeftWidth: 1.5,
                                    borderLeftColor: '#F1F4FB',
                                    paddingLeft: 10,
                                 }}
                              >
                                 <View style={styles.iconButton}>
                                    <DownIcon width={18} height={17} fill="#B96D11" />
                                 </View>
                              </View>
                              <View style={styles.iconDivider}></View>
                              <View
                                 style={{
                                    borderLeftWidth: 1.5,
                                    borderLeftColor: '#F1F4FB',
                                    paddingLeft: 10,
                                 }}
                              >
                                 <View style={styles.iconButton}>
                                    <LocationIcon width={18} height={18} stroke="#ffffff" />
                                 </View>
                              </View>
                           </View>
                        </View>
                        <View style={styles.detailsContent}>
                           <Text style={styles.detailsText}> {t('processionDetails')}</Text>
                           <SelectDropdown
                              data={passengersCounts}
                              onSelect={(selectedItem, index) => {
                                 console.log(selectedItem, index);
                              }}
                              renderButton={(selectedItem) => {
                                 return (
                                    <View style={styles.dropdownButtonStyle}>
                                       <PeopleIcon />
                                       <Text style={styles.dropdownButtonTxtStyle}>
                                          {(selectedItem && selectedItem) ||
                                             t('numberOfPassengers')}
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
                           />

                           <TouchableOpacity
                              style={styles.datePicker}
                              onPress={() => setOpenDatePicker(true)}
                           >
                              <CalendarIcon />
                              <Text style={styles.dropdownButtonTxtStyle}>
                                 {date ? moment(date).format('L') : t('date')}
                              </Text>
                           </TouchableOpacity>

                           <DatePicker
                              modal
                              open={openDatePicker}
                              date={date || new Date()}
                              mode="date"
                              onConfirm={(selectedDate) => {
                                 setOpenDatePicker(false);
                                 setDate(selectedDate);
                              }}
                              onCancel={() => setOpenDatePicker(false)}
                           />

                           <TouchableOpacity
                              style={styles.datePicker}
                              onPress={() => setOpenTimePicker(true)}
                           >
                              <CalendarIcon />
                              <Text style={styles.dropdownButtonTxtStyle}>
                                 {time ? moment(time).format('HH:mm') : t('time')}
                              </Text>
                           </TouchableOpacity>

                           <DatePicker
                              modal
                              open={openTimePicker}
                              date={time || new Date()}
                              mode="time"
                              locale="en_GB"
                              is24hourSource="locale"
                              onConfirm={(selectedDate) => {
                                 setOpenTimePicker(false);
                                 setTime(selectedDate);
                              }}
                              onCancel={() => setOpenTimePicker(false)}
                           />
                        </View>
                     </View>

                     <View style={styles.selectCarType}>
                        <TouchableOpacity
                           style={[
                              styles.carType,
                              selectedCarType === 'comfort'
                                 ? styles.carTypeShadow
                                 : styles.carTypeDisabled,
                           ]}
                           onPress={() => setSelectedCarType('comfort')}
                        >
                           <View style={styles.cartTypeTop}>
                              <Image source={require('../../../assets/images/comfort.png')} />
                              <Text style={styles.carTypeText}>{t('comfort')}</Text>
                           </View>
                           <Text style={styles.price}>Սկսած ֏ 1500</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={[
                              styles.carType,
                              selectedCarType === 'economy'
                                 ? styles.carTypeShadow
                                 : styles.carTypeDisabled,
                           ]}
                           onPress={() => setSelectedCarType('economy')}
                        >
                           <View style={styles.cartTypeTop}>
                              <Image source={require('../../../assets/images/economy.png')} />
                              <Text style={styles.carTypeText}>{t('economy')}</Text>
                           </View>
                           <Text style={styles.price}>Սկսած ֏ 1500</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
                  <View style={styles.bottomContent}>
                     <TouchableOpacity style={styles.firstButton} onPress={onSubmit}>
                        <LinearGradient
                           colors={['#D6990E', '#E2AB2D', '#FFD77D']}
                           start={{ x: 0, y: 0 }}
                           end={{ x: 1, y: 0 }}
                           style={styles.gradient}
                        >
                           <Text style={styles.firstButtonText}>{t('confirm')}</Text>
                        </LinearGradient>
                     </TouchableOpacity>
                     <View style={styles.secondButton}></View>
                  </View>
               </View>
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

export default FindRouteScreen;
