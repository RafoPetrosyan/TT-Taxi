import React from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import { ScreenProps } from '../../../types';
import { DropDownIcon } from '../../../assets/svg';
import { IS_IOS_PLATFORM } from '../../../constants';
import normalize from '../../../utils/normalize.ts';
import styles from './style.ts';
import useContainer from './hook.ts';

const formTypes = [
   { label: 'Երթուղի', value: 'route' },
   { label: 'Մեքենա', value: 'car' },
   { label: 'Վարորդ', value: 'driver' },
];

const AdminFormScreen: React.FC<ScreenProps> = () => {
   const insets = useSafeAreaInsets();
   const { handleChangeFormType, Component } = useContainer();

   return (
      <KeyboardAvoidingView
         style={{ flex: 1 }}
         behavior={IS_IOS_PLATFORM ? 'padding' : undefined}
         keyboardVerticalOffset={IS_IOS_PLATFORM ? 60 : 0}
      >
         <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
               <View
                  style={[styles.headerContent, { paddingTop: insets.top + normalize(28, true) }]}
               >
                  <Text style={styles.title}>Ավելացնել</Text>
               </View>
               <View style={styles.contents}>
                  <View style={styles.topContent}>
                     <SelectDropdown
                        data={formTypes}
                        onSelect={handleChangeFormType}
                        renderButton={(selectedItem) => (
                           <View style={styles.input}>
                              <Text style={[styles.placeholder, styles.selectedPlaceholder]}>
                                 {selectedItem ? selectedItem.label : 'Վարորդ'}
                              </Text>
                              <DropDownIcon />
                           </View>
                        )}
                        renderItem={(item, index, isSelected) => {
                           console.log(item, '444444');
                           return (
                              <View
                                 style={{
                                    ...styles.dropdownItemStyle,
                                    ...(isSelected && { backgroundColor: '#D2D9DF' }),
                                 }}
                              >
                                 <Text style={styles.dropdownItemTxtStyle}>{item.label}</Text>
                              </View>
                           );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.dropdownMenuStyle}
                     />
                     <Component />
                  </View>
               </View>
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

export default AdminFormScreen;
