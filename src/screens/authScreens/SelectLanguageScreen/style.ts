import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors.ts';
import normalize from '../../../utils/normalize.ts';
import { fontFamilies } from '../../../constants/fonts.ts';
import dropDownStyles from '../../../constants/dropDownStyles.ts';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: COLORS.baseBackgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
   },
   topContent: {
      marginTop: normalize(187, true),
      alignItems: 'center',
      flex: 1,
   },
   bottomContent: {
      alignItems: 'center',
      marginBottom: normalize(58, true),
   },
   background: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
   },
   title: {
      fontSize: 15,
      fontWeight: '400',
      color: COLORS.secondaryText,
      marginBottom: 10,
      fontFamily: fontFamilies.MONTSERRAT['400'],
      lineHeight: 18,
      marginTop: normalize(56, true),
   },
   selectItem: {
      width: normalize(294),
      height: normalize(55, true),
      borderRadius: 7,
      borderWidth: 1.06,
      borderColor: '#C3C3C3',
      marginTop: normalize(26, true),
      paddingHorizontal: normalize(16),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '#343332',
      fontSize: 12,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT[400],
   },
   renderButtonLeft: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   placeholder: {
      color: COLORS.secondaryText,
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
      marginLeft: normalize(14),
   },
   logo: {
      width: normalize(146),
      height: normalize(204, true),
   },
   gradient: {
      height: normalize(53, true),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 14,
   },
   firstButton: {
      width: normalize(354),
      borderRadius: 14,
   },
   firstButtonText: {
      color: COLORS.white,
      fontFamily: fontFamilies.MONTSERRAT[400],
      fontSize: 14,
   },
   secondButton: {
      marginTop: normalize(14),
   },
   ...dropDownStyles,
});

export default styles;
