import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-date-picker';
import { Controller } from 'react-hook-form';
import moment from 'moment/moment';
import { isString } from 'lodash';
import i18n from 'i18next';
import { DropDownIcon } from '../../../../assets/svg';
import styles from '../style.ts';
import useContainer from './hook.ts';

const routeOptions = ['Գյումրու ավտոկայան', 'Երևան, Սասունցի Դավիթ կայարան'];

const RouteForm: React.FC = () => {
   const {
      onSubmit,
      control,
      handleSubmit,
      errors,
      setIsTimePickerOpen,
      setIsDatePickerOpen,
      isTimePickerOpen,
      isDatePickerOpen,
   } = useContainer();

   return (
      <View style={styles.form}>
         <View>
            {/* Dropdown 1 */}
            <Controller
               name="dropdown1"
               control={control}
               rules={{ required: 'Պարտադիր լրացման դաշտ' }}
               render={({ field: { onChange, value } }) => (
                  <SelectDropdown
                     data={routeOptions}
                     onSelect={onChange}
                     renderButton={(selectedItem) => (
                        <View style={styles.input}>
                           <Text
                              style={[
                                 styles.placeholder,
                                 selectedItem && styles.selectedPlaceholder,
                              ]}
                           >
                              {selectedItem || 'Երթի սկզբ.'}
                           </Text>
                           <DropDownIcon />
                        </View>
                     )}
                     renderItem={(item, index, isSelected) => (
                        <View
                           style={{
                              ...styles.dropdownItemStyle,
                              ...(isSelected && { backgroundColor: '#D2D9DF' }),
                           }}
                        >
                           <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                        </View>
                     )}
                     dropdownStyle={styles.dropdownMenuStyle}
                     showsVerticalScrollIndicator={false}
                     statusBarTranslucent={true}
                  />
               )}
            />
            {errors.dropdown1 && (
               <Text style={styles.error}>
                  {isString(errors.dropdown1.message) ? errors.dropdown1.message : ''}
               </Text>
            )}

            {/* Dropdown 2 */}
            <Controller
               name="dropdown2"
               control={control}
               rules={{ required: 'Պարտադիր լրացման դաշտ' }}
               render={({ field: { onChange, value } }) => (
                  <SelectDropdown
                     data={routeOptions}
                     onSelect={onChange}
                     renderButton={(selectedItem) => (
                        <View style={styles.input}>
                           <Text
                              style={[
                                 styles.placeholder,
                                 selectedItem && styles.selectedPlaceholder,
                              ]}
                           >
                              {selectedItem || 'Երթի ավարտ'}
                           </Text>
                           <DropDownIcon />
                        </View>
                     )}
                     renderItem={(item, index, isSelected) => (
                        <View
                           style={{
                              ...styles.dropdownItemStyle,
                              ...(isSelected && { backgroundColor: '#D2D9DF' }),
                           }}
                        >
                           <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                        </View>
                     )}
                     dropdownStyle={styles.dropdownMenuStyle}
                     showsVerticalScrollIndicator={false}
                     statusBarTranslucent={true}
                  />
               )}
            />
            {errors.dropdown2 && (
               <Text style={styles.error}>
                  {isString(errors.dropdown2.message) ? errors.dropdown2.message : ''}
               </Text>
            )}

            {/* Date Picker */}
            <Controller
               name="date"
               control={control}
               rules={{ required: 'Պարտադիր լրացման դաշտ' }}
               render={({ field: { onChange, value } }) => (
                  <>
                     <TouchableOpacity onPress={() => setIsDatePickerOpen(true)}>
                        <View style={styles.input}>
                           <Text style={[styles.placeholder, value && styles.selectedPlaceholder]}>
                              {value ? moment(value).format('L') : 'Ամսաթիվ'}
                           </Text>
                        </View>
                     </TouchableOpacity>
                     <DatePicker
                        modal
                        open={isDatePickerOpen}
                        date={value || new Date()}
                        onConfirm={(selectedDate) => {
                           setIsDatePickerOpen(false);
                           onChange(selectedDate);
                        }}
                        onCancel={() => setIsDatePickerOpen(false)}
                        locale={i18n.language}
                        mode="date"
                        confirmText={'Հաստատել'}
                        cancelText={'Չեղարկել'}
                        title={'Ընտրեք Ամսաթիվ'}
                     />
                  </>
               )}
            />
            {errors.date && (
               <Text style={styles.error}>
                  {isString(errors.date.message) ? errors.date.message : ''}
               </Text>
            )}

            {/* Time Picker */}
            <Controller
               name="time"
               control={control}
               rules={{ required: 'Պարտադիր լրացման դաշտ' }}
               render={({ field: { onChange, value } }) => (
                  <>
                     <TouchableOpacity onPress={() => setIsTimePickerOpen(true)}>
                        <View style={styles.input}>
                           <Text style={[styles.placeholder, value && styles.selectedPlaceholder]}>
                              {value ? moment(value).format('HH:mm') : 'Ժամ'}
                           </Text>
                        </View>
                     </TouchableOpacity>
                     <DatePicker
                        locale="en_GB"
                        is24hourSource="locale"
                        modal
                        open={isTimePickerOpen}
                        date={value || new Date()}
                        mode="time"
                        onConfirm={(selectedTime) => {
                           setIsTimePickerOpen(false);
                           onChange(selectedTime);
                        }}
                        onCancel={() => setIsTimePickerOpen(false)}
                        confirmText={'Հաստատել'}
                        cancelText={'Չեղարկել'}
                        title={'Ընտրեք Ժամը'}
                     />
                  </>
               )}
            />
            {errors.time && (
               <Text style={styles.error}>
                  {isString(errors.time.message) ? errors.time.message : ''}
               </Text>
            )}

            {/* Max Passengers */}
            <Controller
               name="maxPassengers"
               control={control}
               rules={{ required: 'Պարտադիր լրացման դաշտ' }}
               render={({ field: { onChange, value } }) => (
                  <TextInput
                     placeholder="Ուղևորների մաքս. քանակ"
                     placeholderTextColor="#9AA2AE"
                     style={styles.input}
                     value={value}
                     onChangeText={onChange}
                     keyboardType="numeric"
                  />
               )}
            />
            {errors.maxPassengers && (
               <Text style={styles.error}>
                  {isString(errors.maxPassengers.message) ? errors.maxPassengers.message : ''}
               </Text>
            )}

            {/* Price */}
            <Controller
               name="price"
               control={control}
               rules={{ required: 'Պարտադիր լրացման դաշտ' }}
               render={({ field: { onChange, value } }) => (
                  <TextInput
                     placeholder="Գինը"
                     placeholderTextColor="#9AA2AE"
                     style={styles.input}
                     value={value}
                     onChangeText={onChange}
                     keyboardType="numeric"
                  />
               )}
            />
            {errors.price && (
               <Text style={styles.error}>
                  {isString(errors.price.message) ? errors.price.message : ''}
               </Text>
            )}
         </View>

         {/* Submit Button */}
         <TouchableOpacity onPress={handleSubmit(onSubmit)} style={{ marginTop: 20 }}>
            <LinearGradient
               colors={['#D6990E', '#E2AB2D', '#FFD77D']}
               start={{ x: 0, y: 0 }}
               end={{ x: 1, y: 0 }}
               style={styles.gradient}
            >
               <Text style={styles.submitText}>Ավելացնել</Text>
            </LinearGradient>
         </TouchableOpacity>
      </View>
   );
};

export default RouteForm;
