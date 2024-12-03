import React from 'react';
import {
   Text,
   View,
   TouchableOpacity,
   TextInput,
   KeyboardAvoidingView,
   ScrollView,
   Alert,
} from 'react-native';
import { isString } from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import { useForm, Controller } from 'react-hook-form';
import { ScreenProps } from '../../../types';
import { DropDownIcon } from '../../../assets/svg';
import { IS_IOS_PLATFORM } from '../../../constants';
import styles from './style.ts';

const cars = ['Mercedes-Benz', 'Ford', 'Tesla'];
const drivers = ['Poxos', 'Petros'];

const DriversFormScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data: any) => {
      Alert.alert('Form Submitted', JSON.stringify(data, null, 2));
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
                     <Text style={styles.title}>Ավելացնել</Text>
                     <View style={styles.form}>
                        <View>
                           {/* Driver Select */}
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
                                          <Text style={styles.placeholder}>
                                             {selectedItem ? selectedItem : 'Վարորդ'}
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
                           {errors.driver && (
                              <Text style={styles.error}>
                                 {isString(errors.driver.message) ? errors.driver.message : ''}
                              </Text>
                           )}

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
                                 {isString(errors.phoneNumber.message)
                                    ? errors.phoneNumber.message
                                    : ''}
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
                        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
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
                  </View>
               </View>
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

export default DriversFormScreen;
