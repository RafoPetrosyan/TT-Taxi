import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors.ts';
import normalize from '../../../utils/normalize.ts';
import { fontFamilies } from '@constants/fonts.ts';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
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
      marginTop: normalize(24, true),
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
      width: '100%',
      backgroundColor: '#F8F8F8',
      flexDirection: 'row',
      marginBottom: 20,
      marginHorizontal: 'auto',
      paddingVertical: normalize(11, true),
      justifyContent: 'center',
   },
   renderItemContent: {
      width: '100%',
      maxWidth: normalize(354),
      flexDirection: 'row',
   },
   icon: {
      width: normalize(44),
      height: normalize(44),
      justifyContent: 'center',
      alignItems: 'center',
   },
   rightContent: {
      marginLeft: normalize(6),
      justifyContent: 'center',
   },
   message: {
      color: COLORS.secondaryText,
      fontSize: 14,
      fontWeight: '300',
      fontFamily: fontFamilies.MONTSERRAT['300'],
   },
   time: {
      color: '#818195',
      fontSize: 14,
      fontWeight: '300',
      fontFamily: fontFamilies.MONTSERRAT['300'],
   },
});

export default styles;
