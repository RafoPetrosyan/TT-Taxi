import { Dimensions, Platform } from 'react-native';

export const STORE_LANGUAGE_KEY = 'settings.lang';
export const API_BASE_URL = 'https://taxi.brainfors.am';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const IS_IOS_PLATFORM = Platform.OS === 'ios';
export const IS_ANDROID_PLATFORM = Platform.OS === 'android';

export const FIGMA_DEVICE_WIDTH = 402;
export const FIGMA_DEVICE_HEIGHT = 874;
