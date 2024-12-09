import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORE_TOKEN_KEY, STORE_USER_KEY } from '../constants';
import { CurrentUser } from '../store/auth/types.ts';

class AuthService {
   public getAccessToken(): Promise<string | null> {
      return AsyncStorage.getItem(STORE_TOKEN_KEY);
   }

   public async getCurrentUser(): Promise<CurrentUser | null> {
      try {
         const userData = await AsyncStorage.getItem(STORE_USER_KEY);
         return userData ? JSON.parse(userData) : null;
      } catch (error) {
         console.error('Error retrieving or parsing user data:', error);
         return null;
      }
   }

   public async setCurrentUser(data: CurrentUser): Promise<void> {
      await AsyncStorage.setItem(STORE_USER_KEY, JSON.stringify(data));
   }

   public async setAccessToken(data: string): Promise<void> {
      await AsyncStorage.setItem(STORE_TOKEN_KEY, data);
   }
}

export const authService = new AuthService();
