import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import { Controller } from 'react-hook-form';
import { isString } from 'lodash';
import { DropDownIcon } from '../../../../assets/svg';
import styles from '../style.ts';
import useContainer from './hook.ts';

const drivers = ['Poxos Poxosyan', 'Simon Simonyan'];

const CarForm: React.FC = () => {
   const { onSubmit, control, handleSubmit, errors } = useContainer();

   return (
      <View style={styles.form}>
         <View>
            {/* Car number */}
            <Controller
               name="carNumber"
               control={control}
               rules={{ required: 'Պարտադիր լրացման դաշտ' }}
               render={({ field: { onChange, value } }) => (
                  <TextInput
                     placeholder="Հմարանիշը"
                     placeholderTextColor="#9AA2AE"
                     style={styles.input}
                     value={value}
                     onChangeText={onChange}
                  />
               )}
            />
            {errors.carNumber && (
               <Text style={styles.error}>
                  {isString(errors.carNumber.message) ? errors.carNumber.message : ''}
               </Text>
            )}

            {/* Car Model */}
            <Controller
               name="model"
               control={control}
               rules={{ required: 'Պարտադիր լրացման դաշտ' }}
               render={({ field: { onChange, value } }) => (
                  <TextInput
                     placeholder="Մոդել"
                     placeholderTextColor="#9AA2AE"
                     style={styles.input}
                     value={value}
                     onChangeText={onChange}
                  />
               )}
            />
            {errors.model && (
               <Text style={styles.error}>
                  {isString(errors.model.message) ? errors.model.message : ''}
               </Text>
            )}

            {/* Car class */}
            <Controller
               name="class"
               control={control}
               rules={{ required: 'Պարտադիր լրացման դաշտ' }}
               render={({ field: { onChange, value } }) => (
                  <TextInput
                     placeholder="Դասը"
                     placeholderTextColor="#9AA2AE"
                     style={styles.input}
                     value={value}
                     onChangeText={onChange}
                  />
               )}
            />
            {errors.class && (
               <Text style={styles.error}>
                  {isString(errors.class.message) ? errors.class.message : ''}
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

            {/* Dropdown 1 */}
            <Controller
               name="driver"
               control={control}
               rules={{ required: 'Պարտադիր լրացման դաշտ' }}
               render={({ field: { onChange, value } }) => (
                  <SelectDropdown
                     data={drivers}
                     onSelect={onChange}
                     renderButton={(selectedItem) => (
                        <View style={styles.input}>
                           <Text
                              style={[
                                 styles.placeholder,
                                 selectedItem && styles.selectedPlaceholder,
                              ]}
                           >
                              {selectedItem || 'Վարորդ'}
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
            {errors.driver && (
               <Text style={styles.error}>
                  {isString(errors.driver.message) ? errors.driver.message : ''}
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

export default CarForm;
