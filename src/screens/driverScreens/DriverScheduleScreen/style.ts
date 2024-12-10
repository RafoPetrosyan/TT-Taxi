import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors.ts';
import normalize from '../../../utils/normalize.ts';
import { fontFamilies } from '../../../constants/fonts.ts';

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
      paddingBottom: 20,
   },
   topContent: {
      marginTop: normalize(20, true),
      flex: 1,
   },
   headerContent: {
      backgroundColor: COLORS.statusBarBackground,
      width: '100%',
      paddingBottom: normalize(24, true),
   },
   title: {
      fontSize: 18,
      fontWeight: '500',
      color: COLORS.primaryText,
      fontFamily: fontFamilies.MONTSERRAT[500],
      lineHeight: 21,
      textAlign: 'center',
   },
   renderItem: {
      width: '95%',
      maxWidth: normalize(354),
      backgroundColor: '#fff',
      borderRadius: 14,
      flexDirection: 'row',
      marginBottom: 20,
      borderColor: '#DEDEE8',
      borderWidth: 1,
      marginHorizontal: 'auto',
      paddingHorizontal: normalize(16),
   },
   rightContent: {
      paddingVertical: normalize(12),
   },
   row: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: normalize(8),
      justifyContent: 'space-between',
   },
   textKey: {
      color: COLORS.secondaryText,
      fontSize: 12,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
   },
   textValue: {
      color: COLORS.primaryText,
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
      marginLeft: 5,
   },
   boldText: {
      color: COLORS.primaryText,
      fontSize: 14,
      fontWeight: '500',
      fontFamily: fontFamilies.MONTSERRAT['500'],
   },
   confirm: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
      color: COLORS.brown,
   },
   status: {
      borderRadius: 46,
      height: normalize(24),
      backgroundColor: '#D59608',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: normalize(14),
   },
   carTypeText: {
      color: COLORS.white,
      fontSize: 12,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
   },
   buttons: {
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'flex-end',
   },
   edit: {
      color: '#9AA2AE',
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
   },
   see: {
      color: '#4949EA',
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
      marginLeft: 10,
   },
});

export default styles;
