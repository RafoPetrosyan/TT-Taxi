import React from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Spinner from 'react-native-loading-spinner-overlay';
import { fontFamilies } from '@constants/fonts.ts';
import COLORS from '../../constants/colors.ts';

type Props = {
   visible: boolean;
};

const Loader: React.FC<Props> = ({ visible }) => {
   const { t } = useTranslation();

   return <Spinner visible={visible} textContent={t('loading')} textStyle={styles.spinnerText} />;
};

const styles = StyleSheet.create({
   spinnerText: {
      fontSize: 16,
      color: COLORS.secondaryText,
      fontFamily: fontFamilies.MONTSERRAT['400'],
      fontWeight: '400',
   },
});

export default Loader;
