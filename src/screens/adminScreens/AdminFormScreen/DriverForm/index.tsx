import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { isString } from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import { Controller } from 'react-hook-form';
import { DropDownIcon } from '../../../../assets/svg';
import styles from '../style.ts';
import useContainer from './hook.ts';

const cars = ['Mercedes-Benz', 'Ford', 'Tesla'];

const DriverForm: React.FC = () => {
   const { onSubmit, control, handleSubmit, errors } = useContainer();

   return (
      <View style={styles.form}>
         <View>
            {/* License Plate Input */}
            <Controller
               name="fullName"
               control={control}
               rules={{
                  required: 'Պարտադիր լրացման դաշտ',
               }}
               render={({ field: { onChange, value } }) => (
                  <TextInput
                     placeholder="Անուն Ազգանուն"
                     placeholderTextColor="#9AA2AE"
                     style={styles.input}
                     value={value}
                     onChangeText={onChange}
                  />
               )}
            />
            {errors.fullName && (
               <Text style={styles.error}>
                  {isString(errors.fullName.message) ? errors.fullName.message : ''}
               </Text>
            )}

            {/* Model Input */}
            <Controller
               name="phoneNumber"
               control={control}
               rules={{ required: 'Պարտադիր լրացման դաշտ' }}
               render={({ field: { onChange, value } }) => (
                  <TextInput
                     placeholder="Հեռախոսահամար"
                     placeholderTextColor="#9AA2AE"
                     style={styles.input}
                     value={value}
                     onChangeText={onChange}
                     keyboardType="phone-pad"
                  />
               )}
            />
            {errors.phoneNumber && (
               <Text style={styles.error}>
                  {isString(errors.phoneNumber.message) ? errors.phoneNumber.message : ''}
               </Text>
            )}

            {/* Car Select */}
            <Controller
               name="car"
               control={control}
               rules={{ required: 'Պարտադիր լրացման դաշտ' }}
               render={({ field: { onChange, value } }) => (
                  <SelectDropdown
                     data={cars}
                     onSelect={onChange}
                     renderButton={(selectedItem) => (
                        <View style={styles.input}>
                           <Text style={styles.placeholder}>
                              {selectedItem ? selectedItem : 'Մեքենա'}
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
                     showsVerticalScrollIndicator={false}
                     dropdownStyle={styles.dropdownMenuStyle}
                  />
               )}
            />
            {errors.car && (
               <Text style={styles.error}>
                  {isString(errors.car.message) ? errors.car.message : ''}
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

export default DriverForm;
