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
   contents: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   topContent: {
      marginTop: normalize(68, true),
      flex: 1,
   },
   title: {
      fontSize: 18,
      fontWeight: '500',
      color: COLORS.primaryText,
      fontFamily: fontFamilies.MONTSERRAT['500'],
      lineHeight: 21,
      textAlign: 'center',
   },
   form: {
      marginTop: normalize(37, true),
      justifyContent: 'space-between',
      flex: 1,
      paddingBottom: normalize(115, true),
   },
   input: {
      width: normalize(338),
      height: normalize(52, true),
      borderRadius: 7,
      borderWidth: 1,
      borderColor: '#F1F4FB',
      marginTop: normalize(6, true),
      paddingHorizontal: normalize(16),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '#9AA2AE',
      fontSize: 12,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT[400],
   },
   placeholder: {
      color: '#9AA2AE',
      fontSize: 12,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT[400],
   },
   gradient: {
      height: normalize(53, true),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 14,
   },
   submitText: {
      color: COLORS.white,
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamilies.MONTSERRAT[400],
   },
   error: {
      color: COLORS.danger,
      marginLeft: 10,
   },
   ...dropDownStyles,
});

export default styles;
