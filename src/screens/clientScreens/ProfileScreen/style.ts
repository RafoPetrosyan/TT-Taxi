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
      width: '100%',
      marginTop: normalize(20, true),
   },
   title: {
      fontSize: 18,
      fontWeight: '500',
      color: COLORS.primaryText,
      fontFamily: fontFamilies.MONTSERRAT[500],
      lineHeight: 21,
      textAlign: 'center',
   },
   row: {
      flexDirection: 'row',
      width: '100%',
      height: normalize(42, true),
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: normalize(34),
   },
   menuText: {
      fontSize: 14,
      color: COLORS.secondaryText,
      fontWeight: '300',
      fontFamily: fontFamilies.MONTSERRAT['300'],
   },
});

export default styles;
