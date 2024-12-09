import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors.ts';
import normalize from '../../../utils/normalize.ts';
import { fontFamilies } from '@constants/fonts.ts';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: COLORS.baseBackgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
   },
   headerContent: {
      backgroundColor: COLORS.statusBarBackground,
      width: '100%',
      paddingBottom: normalize(24, true),
   },
   contents: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   topContent: {
      marginTop: normalize(22, true),
      flex: 1,
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
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.12,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      marginBottom: 20,
      marginHorizontal: 'auto',
   },
   leftContent: {
      backgroundColor: '#fff',
      width: normalize(17),
      borderTopLeftRadius: 14,
      borderBottomLeftRadius: 14,
   },
   rightContent: {
      paddingVertical: normalize(10),
      marginLeft: normalize(10),
      paddingRight: normalize(25),
   },
   row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: normalize(8),
   },
   rowKey: {
      marginLeft: 6,
      color: COLORS.secondaryText,
      fontSize: 12,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
   },
   rowValue: {
      color: COLORS.secondaryText,
      fontSize: 14,
      fontWeight: '500',
      fontFamily: fontFamilies.MONTSERRAT['500'],
      marginLeft: 5,
   },
   buttons: {
      flexDirection: 'row',
      marginTop: normalize(18),
      justifyContent: 'flex-end',
   },
   cancel: {
      fontSize: 12,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
      color: COLORS.danger,
   },
   edit: {
      color: '#343332',
      marginLeft: 14,
   },
   followProgress: {
      width: normalize(172),
      height: normalize(26),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EAB337',
      borderRadius: 46,
   },
   followText: {
      color: COLORS.white,
      fontSize: 12,
      fontWeight: '400',
      marginLeft: 2,
   },
});

export default styles;
