import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const metrics = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  XXSMALL: 3,
  XSMALL: 5,
  SMALL: 10,
  MEDIUM: 15,
  BIG: 20,
  XBIG: 25,
  XXBIG: 30,
  XXXBIG: 50,
  RADIUS: 10,
  SAFEVIEW: 35,
};
