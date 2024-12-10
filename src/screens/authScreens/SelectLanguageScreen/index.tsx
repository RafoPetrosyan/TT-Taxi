import React, { useMemo } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import { ScreenProps } from '../../../types';
import SCREENS from '../../../constants/screens.ts';
import styles from './style.ts';
import { DropDownIcon, FlagArmIcon, FlagEngIcon, FlagRusIcon } from '../../../assets/svg';

const languages = [
   { value: 'hy', label: 'ARM', icon: <FlagArmIcon /> },
   { value: 'en', label: 'ENG', icon: <FlagEngIcon /> },
   { value: 'ru', label: 'RUS', icon: <FlagRusIcon /> },
];

const SelectLanguageScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const { t } = useTranslation();

   const activeItem = useMemo(() => {
      return languages.find((e) => e.value === i18n.language);
   }, [i18n.language]);

   const goToNextScreen = () => {
      navigation.navigate(SCREENS.WELCOME_SCREEN);
   };

   const handleChangeLanguage = (item: any) => {
      i18n.changeLanguage(item.value);
   };

   return (
      <View style={styles.container}>
         <View style={styles.background}>
            <View style={styles.topContent}>
               <Image
                  style={styles.logo}
                  resizeMode={'contain'}
                  source={require('../../../assets/images/logo.png')}
               />
               <Text style={styles.title}>{t('selectLanguage')}</Text>
               <SelectDropdown
                  data={languages}
                  onSelect={handleChangeLanguage}
                  defaultValue={activeItem}
                  renderButton={() => (
                     <View style={styles.selectItem}>
                        <View style={styles.renderButtonLeft}>
                           {activeItem?.icon}
                           <Text style={styles.placeholder}>{activeItem?.label || ''}</Text>
                        </View>
                        <DropDownIcon />
                     </View>
                  )}
                  renderItem={(item, index, isSelected) => {
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
                  statusBarTranslucent={true}
               />
            </View>
            <View style={styles.bottomContent}>
               <TouchableOpacity style={styles.firstButton} onPress={goToNextScreen}>
                  <LinearGradient
                     colors={['#D6990E', '#E2AB2D', '#FFD77D']}
                     start={{ x: 0, y: 0 }}
                     end={{ x: 1, y: 0 }}
                     style={styles.gradient}
                  >
                     <Text style={styles.firstButtonText}>{t('next')}</Text>
                  </LinearGradient>
               </TouchableOpacity>
               <View style={styles.secondButton} />
            </View>
         </View>
      </View>
   );
};

export default SelectLanguageScreen;
