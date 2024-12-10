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
   topContent: {
      marginTop: normalize(123, true),
      alignItems: 'center',
      flex: 1,
   },
   logo: {
      width: normalize(146),
      height: normalize(204, true),
   },
   bottomContent: {
      alignItems: 'center',
      marginBottom: normalize(58, true),
      marginTop: normalize(15, true),
   },
   contents: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   errorText: {
      color: COLORS.danger,
      fontSize: 14,
      marginBottom: 10,
   },
   inputError: {
      borderColor: COLORS.danger,
   },
   form: {
      marginTop: normalize(50, true),
   },
   info: {
      maxWidth: normalize(354),
      color: COLORS.secondaryText,
      fontSize: 12,
      fontWeight: '300',
      fontFamily: fontFamilies.MONTSERRAT['300'],
      lineHeight: 17,
   },
   input: {
      width: normalize(354),
      height: normalize(52, true),
      borderColor: COLORS.inputBorder,
      borderWidth: 1,
      paddingHorizontal: normalize(16),
      borderRadius: 7,
      marginTop: 8,
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
   secondButtonText: {
      color: COLORS.secondaryText,
      fontFamily: fontFamilies.MONTSERRAT[400],
      fontSize: 14,
   },
});

export default styles;
