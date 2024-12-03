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
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import { useForm, Controller } from 'react-hook-form';
import { ScreenProps } from '../../../types';
import { DropDownIcon } from '../../../assets/svg';
import styles from './style.ts';
import { IS_IOS_PLATFORM } from '../../../constants';
import { isString } from 'lodash';

const cars = ['Mercedes-Benz', 'Ford', 'Tesla'];
const types = ['Կոմֆորտ', 'Էկոնոմ'];
const drivers = ['Poxos', 'Petros'];

const CarsFormScreen: React.FC<ScreenProps> = ({ navigation }) => {
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

                           {/* License Plate Input */}
                           <Controller
                              name="carNumber"
                              control={control}
                              rules={{
                                 required: 'Պարտադիր լրացման դաշտ',
                              }}
                              render={({ field: { onChange, value } }) => (
                                 <TextInput
                                    placeholder="Համարանիշ"
                                    placeholderTextColor="#9AA2AE"
                                    style={styles.input}
                                    value={value}
                                    onChangeText={onChange}
                                 />
                              )}
                           />
                           {errors.carNumber && (
                              <Text style={styles.error}>
                                 {isString(errors.carNumber.message)
                                    ? errors.carNumber.message
                                    : ''}
                              </Text>
                           )}

                           {/* Model Input */}
                           <Controller
                              name="model"
                              control={control}
                              rules={{ required: 'Պարտադիր լրացման դաշտ' }}
                              render={({ field: { onChange, value } }) => (
                                 <TextInput
                                    placeholder="Մակնիշ"
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

                           {/* Type Select */}
                           <Controller
                              name="type"
                              control={control}
                              rules={{ required: 'Պարտադիր լրացման դաշտ' }}
                              render={({ field: { onChange, value } }) => (
                                 <SelectDropdown
                                    data={types}
                                    onSelect={onChange}
                                    renderButton={(selectedItem) => (
                                       <View style={styles.input}>
                                          <Text style={styles.placeholder}>
                                             {selectedItem ? selectedItem : 'Դաս'}
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
                           {errors.type && (
                              <Text style={styles.error}>
                                 {isString(errors.type.message) ? errors.type.message : ''}
                              </Text>
                           )}

                           {/* Max Passengers Input */}
                           <Controller
                              name="maxPassengers"
                              control={control}
                              rules={{
                                 required: 'Պարտադիր լրացման դաշտ',
                                 validate: (value) =>
                                    !isNaN(value) && parseInt(value) > 0 ? true : 'Սխալ քանակ',
                              }}
                              render={({ field: { onChange, value } }) => (
                                 <TextInput
                                    placeholder="Ուղևորների մաքս․ քանակ"
                                    placeholderTextColor="#9AA2AE"
                                    style={styles.input}
                                    keyboardType="numeric"
                                    value={value}
                                    onChangeText={onChange}
                                 />
                              )}
                           />
                           {errors.maxPassengers && (
                              <Text style={styles.error}>
                                 {isString(errors.maxPassengers.message)
                                    ? errors.maxPassengers.message
                                    : ''}
                              </Text>
                           )}

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

export default CarsFormScreen;
