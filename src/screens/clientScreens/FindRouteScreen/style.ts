import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors.ts';
import normalize from '../../../utils/normalize.ts';
import { fontFamilies } from '@constants/fonts.ts';
import { DEVICE_WIDTH } from '../../../constants';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: COLORS.baseBackgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
   },
   contents: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      width: DEVICE_WIDTH - 20,
   },
   headerContent: {
      backgroundColor: COLORS.statusBarBackground,
      width: '100%',
      paddingBottom: normalize(24, true),
   },
   topContent: {
      marginTop: normalize(22, true),
      flex: 1,
   },
   selectRoutesContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 19,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: '#F1F4FB',
      width: '100%',
   },
   leftContent: {
      flex: 1,
   },
   textContainer: {
      flex: 1,
   },
   text: {
      fontSize: 14,
      color: '#9AA2AE',
      fontFamily: fontFamilies.MONTSERRAT['400'],
      fontWeight: '400',
   },
   locationText: {
      color: '#2D2D2D',
      fontSize: 12,
      fontFamily: fontFamilies.MONTSERRAT['500'],
      fontWeight: '500',
      marginTop: 3,
   },
   divider: {
      height: 1,
      backgroundColor: '#E5E7EB',
      marginVertical: normalize(20, true),
   },
   replaceRouteContainer: {
      padding: 10,
   },
   replaceCircle: {
      width: 25,
      height: 25,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#F1F4FB',
      justifyContent: 'center',
      alignItems: 'center',
   },
   iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   iconButton: {
      backgroundColor: '#D59608',
      borderRadius: normalize(24),
      justifyContent: 'center',
      alignItems: 'center',
      width: 34,
      height: 34,
   },
   iconDivider: {
      height: 16,
      width: 1,
      backgroundColor: '#D1D5DB',
      marginVertical: 8,
   },
   textInputStyle: {
      borderWidth: 0.5,
      borderBottomWidth: 0.5,
      borderColor: '#DEDEE8',
      width: normalize(72),
      height: normalize(74),
      borderRadius: 7,
   },
   bottomContent: {
      alignItems: 'center',
      marginBottom: normalize(58, true),
      marginTop: normalize(62, true),
   },
   form: {},
   title: {
      fontSize: 18,
      fontWeight: '500',
      color: COLORS.primaryText,
      fontFamily: fontFamilies.MONTSERRAT[500],
      lineHeight: 21,
      textAlign: 'center',
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
      flexDirection: 'row',
   },
   detailsContent: {
      marginTop: normalize(28),
   },
   detailsText: {
      fontSize: 16,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
      color: COLORS.secondaryText,
      marginBottom: 10,
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
   datePicker: {
      width: '100%',
      height: normalize(52, true),
      borderRadius: 14,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: normalize(16),
      borderWidth: 1,
      borderColor: '#F1F4FB',
      marginTop: 6,
   },
   selectCarType: {
      marginTop: normalize(27, true),
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   carType: {
      width: '49%',
      height: normalize(99, true),
      borderRadius: 7,
      borderColor: '#F1F4FB',
      borderWidth: 1,
      justifyContent: 'space-between',
   },
   carTypeDisabled: {
      opacity: 0.5,
   },
   carTypeShadow: {
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 4,
   },
   cartTypeTop: {
      flexDirection: 'row',
   },
   carTypeText: {
      fontSize: 14,
      fontWeight: '500',
      fontFamily: fontFamilies.MONTSERRAT['500'],
      color: '#343332',
      textTransform: 'uppercase',
      marginTop: 14,
      marginLeft: 5,
   },
   price: {
      marginBottom: 21,
      textAlign: 'center',
      fontWeight: '500',
      color: '#343332',
   },
});

export default styles;
