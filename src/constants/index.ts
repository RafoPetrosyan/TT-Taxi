import { Dimensions, Platform } from 'react-native';

export const API_BASE_URL = 'https://taxi.brainfors.am';

export const STORE_LANGUAGE_KEY = 'settings.lang';
export const STORE_USER_KEY = 'auth.user';
export const STORE_TOKEN_KEY = 'auth.token';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const FIGMA_DEVICE_WIDTH = 402;
export const FIGMA_DEVICE_HEIGHT = 874;

export const IS_IOS_PLATFORM = Platform.OS === 'ios';
export const IS_ANDROID_PLATFORM = Platform.OS === 'android';
