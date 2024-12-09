import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../services/httpClient.ts';
import { authService } from '../../services/auth.ts';
import i18n from '../../translations/i18n.ts';
import { CurrentUser, SignInPayload, SignInResponse } from './types.ts';
import { showToast } from '../../utils/toast.ts';
import { navigationService } from '../../services/navigations.ts';
import SCREENS from '../../constants/screens.ts';
import STACKS from '../../constants/stacks.ts';

export const signIn = createAsyncThunk<CurrentUser, SignInPayload>(
   'auth/signIn',
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await httpClient.post<SignInResponse>('/user/login', payload);

         await authService.setCurrentUser(data.data);
         await authService.setAccessToken(data.data.auth_key);

         if (data.data.verified && data.data.role === 'client') {
            navigationService.navigate(STACKS.CLIENT_STACK, {
               screen: SCREENS.FIND_ROUTE,
            });
         } else if (!data.data.verified && data.data.role === 'client') {
            navigationService.navigate(SCREENS.OTP_VERIFICATION);
         }

         return data.data;
      } catch (error: any) {
         showToast('error', i18n.t('signInError'));
         return rejectWithValue(error.message);
      }
   },
);
