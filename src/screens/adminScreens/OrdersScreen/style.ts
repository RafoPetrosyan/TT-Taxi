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
   contents: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   topContent: {
      marginTop: normalize(22, true),
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
      borderLeftWidth: 0,
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
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: normalize(8),
      justifyContent: 'space-between',
   },
   rowKey: {
      marginLeft: 6,
      color: COLORS.secondaryText,
      fontSize: 14,
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
   confirm: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT['400'],
      color: COLORS.brown,
   },
});

export default styles;
