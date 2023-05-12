import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const [shortDimension, longDimension] =
  SCREEN_WIDTH < SCREEN_HEIGHT
    ? [SCREEN_WIDTH, SCREEN_HEIGHT]
    : [SCREEN_HEIGHT, SCREEN_WIDTH];

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const hScale = shortDimension / guidelineBaseWidth;
const vScale = longDimension / guidelineBaseHeight;

export function horizontalScale(val) {
  return hScale * val;
}

export function verticalScale(val) {
  return vScale * val;
}

export const isIOS = Platform.OS === 'ios';

export function fontScale(size) {
  const newSize = hScale * size;
  if (isIOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export function normalFontScale(size) {
  const newSize = hScale * size;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

let fontPrimaryHeavy = 'Avenir-Heavy';
let fontPrimaryOblique = 'Avenir-Oblique';
let fontPrimaryBlack = 'Avenir-Black';
let fontPrimaryBook = 'Avenir-Book';
let fontPrimaryMedium = 'Avenir-Medium';
let fontMontserratLight = 'Montserrat-Light';
let fontSourceSansPro = 'SourceSansPro-Black';
export const textStyles = {
  fontPrimaryHeavy,
  fontPrimaryOblique,
  fontPrimaryBlack,
  fontPrimaryBook,
  fontPrimaryMedium,
  fontMontserratLight,
  fontSourceSansPro,
};

export const brandColors = {
  inActiveDot: '#E7E6FB',
  activeDot: '#2C2867',
  buttonColor: '#4597B1',
  fillColor: '#F6F6F6',
  textColor: '#333333',
  redShadowColor: '#FFE8E8',
  barColor: '#FD6E26',
  addSquareColor: '#FF6372',
  billColor: '#FEF7F2',
  warningColor: '#F8F3D6',
  warningTextColor: '#96722E',
  bottomColor: '#C5C6CC',
  timeColor: '#FD9253',
  barLightColor: 'rgba(253,146,83,0.3)',
  diastolicColor: '#FFB686',
  dividerColor: 'rgba(124,130,161,0.26)',
  sliderColor: '#FFB686',
  informationColor: '#616161',
  greenColor: '#06AE00',
  greenLightColor: '#89BF52',
  greenLighter: '#4CE304',
  yellowColor: '#F8B84E',
  messageColor: '#84BACE',
  redColor: '#FF0A0A',
  headerColor: '#4B4B4B',
  checkboxBorder: '#263238',
  otpColor: '#F8F9FA',
  checkboxBorderColor: 'rgba(38,50,56,0.38)',
  textBlackColor: '#333647',
  screenColor: '#E1E7EF',
  backgroundColor: '#f9fafa',
  greyBackgroundColor: '#413D3D',
  inputColor: '#F3F4F6',
  placeHolder: '#7C82A1',
  darkerGrayColor: '#DADADA',
  healthTakerBgColor: '#F9F0DE',
  exampleColor: '#8A8FA8',
  inchColor: '#rgba(38,50,56,0.6)',
  greyColor: '#4A4A4A',
  whiteColor: '#FFFFFF',
  blackColor: '#000000',
  borderColor: '#E4E4E4',
  titleGrayColor: '#6a6a6a',
  transparentBlackColor: 'rgba(0, 0, 0, 0.1)',
  grayLight: 'rgba(95,105,120,0.2)',
  appBackgroundColor: '#F4F5F9',
  borderGrayColor: '#E2EBF2',
  white: '#fff',
  dusk: '#E8E8E8',
  whiteDark: '#f3f3f3',
  whiteOff: '#F4F5F9',
  black: '#000',
  gray: '#9D9BB2',
  counter: '#CECCF7',
  pink: '#F76C89',
  Dusk: '#F1F1F1',
  facebook: '#3b5998',
  blueLight: '#b2c1cf',
  skyLight: '#e7ecee',
  transparent: 'rgba(0,0,0,0)',
  error: '#F92323',
  grayWhite: '#F5F5F5',
  blackGray: '#171719',
};

let paddingMedium = horizontalScale(20);

export const layoutStyles = {
  paddingMedium,
  screenHeight: SCREEN_HEIGHT,
  screenWidth: SCREEN_WIDTH,
};
