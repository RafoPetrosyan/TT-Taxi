import { PixelRatio } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH, FIGMA_DEVICE_WIDTH, FIGMA_DEVICE_HEIGHT } from '../constants';

const scale = DEVICE_WIDTH / FIGMA_DEVICE_WIDTH;
const scaleHeight = DEVICE_HEIGHT / FIGMA_DEVICE_HEIGHT;

const normalize = (size: number, forHeight?: boolean): number => {
   const newSize = size * (forHeight ? scaleHeight : scale);
   return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default normalize;
