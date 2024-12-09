import React from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   Image,
   TextInput,
   KeyboardAvoidingView,
   ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { ScreenProps } from '../../../types';
import COLORS from '../../../constants/colors.ts';
import { IS_IOS_PLATFORM } from '../../../constants';
import SCREENS from '../../../constants/screens.ts';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { signIn } from '../../../store/auth/operations.ts';
import Loader from '../../../components/Loader';
import formatAndValidatePhoneNumber from '../../../utils/formatAndValidatePhoneNumber.ts';
import styles from './style.ts';

type FormData = {
   phoneNumber: string;
   password: string;
};

const SignInScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const { loading } = useAppSelector((state) => state.auth);
   const { t } = useTranslation();
   const dispatch = useAppDispatch();
   const {
      control,
      handleSubmit,
      formState: { errors },
      setError,
   } = useForm<FormData>();

   const onSubmit = (data: FormData) => {
      const formattedPhone = formatAndValidatePhoneNumber(data.phoneNumber);

      if (!formattedPhone) {
         setError('phoneNumber', { type: 'custom', message: t('invalidPhoneNumber') });
         return;
      }

      dispatch(
         signIn({
            phone: formattedPhone,
            password: data.password,
         }),
      );
   };

   const goToSignUp = () => {
      navigation.navigate(SCREENS.SIGN_UP_SCREEN);
   };

   return (
      <KeyboardAvoidingView
         style={{ flex: 1 }}
         behavior={IS_IOS_PLATFORM ? 'padding' : undefined}
         keyboardVerticalOffset={IS_IOS_PLATFORM ? 60 : 0}
      >
         <Loader visible={loading} />
         <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
               <View style={styles.contents}>
                  <View style={styles.topContent}>
                     <Image
                        style={styles.logo}
                        resizeMode={'contain'}
                        source={require('../../../assets/images/logo.png')}
                     />
                     <View style={styles.form}>
                        <Controller
                           control={control}
                           name="phoneNumber"
                           rules={{ required: t('phoneNumberIsRequired') }}
                           render={({ field: { onChange, value } }) => (
                              <TextInput
                                 style={[styles.input, errors.phoneNumber && styles.inputError]}
                                 placeholderTextColor={COLORS.inputPlaceholder}
                                 onChangeText={onChange}
                                 value={value}
                                 keyboardType="phone-pad"
                                 placeholder="+374 (XX) XXX XXX"
                              />
                           )}
                        />
                        {errors.phoneNumber && (
                           <Text style={styles.errorText}>{errors.phoneNumber.message}</Text>
                        )}

                        <Controller
                           control={control}
                           name="password"
                           rules={{
                              required: t('passwordIsRequired'),
                           }}
                           render={({ field: { onChange, value } }) => (
                              <TextInput
                                 style={[styles.input, errors.password && styles.inputError]}
                                 placeholder={t('enterPassword')}
                                 placeholderTextColor={COLORS.inputPlaceholder}
                                 onChangeText={onChange}
                                 value={value}
                                 secureTextEntry={true}
                              />
                           )}
                        />
                        {errors.password && (
                           <Text style={styles.errorText}>{errors.password.message}</Text>
                        )}

                        <TouchableOpacity style={styles.forgotPasswordContent}>
                           <Text style={styles.forgotPasswordText}>{t('forgotPassword')}</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
                  <View style={styles.bottomContent}>
                     <TouchableOpacity style={styles.firstButton} onPress={handleSubmit(onSubmit)}>
                        <LinearGradient
                           colors={['#D6990E', '#E2AB2D', '#FFD77D']}
                           start={{ x: 0, y: 0 }}
                           end={{ x: 1, y: 0 }}
                           style={styles.gradient}
                        >
                           <Text style={styles.firstButtonText}>{t('login')}</Text>
                        </LinearGradient>
                     </TouchableOpacity>
                     <View style={styles.secondButton}>
                        <Text style={styles.secondButtonText}>{t("don'tHaveAnAccountYet")}:</Text>
                        <TouchableOpacity onPress={goToSignUp}>
                           <Text
                              style={[
                                 styles.secondButtonText,
                                 { marginLeft: 5, color: COLORS.brown },
                              ]}
                           >
                              {t('signUp')}
                           </Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

export default SignInScreen;
