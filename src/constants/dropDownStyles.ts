import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
   dropdownMenuStyle: {
      backgroundColor: '#E9ECEF',
      borderRadius: 8,
   },
});

export default styles;
