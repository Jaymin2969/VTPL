import {StyleSheet} from 'react-native';
import {
  brandColors,
  fontScale,
  horizontalScale,
  isIOS,
  verticalScale,
} from '../../../components/Core/basicStyles';

const style = StyleSheet.create({
  viewInner: {
    marginTop: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  text: {
    // fontFamily: 'SFProText-Semibold',
    fontSize: fontScale(22),
    fontWeight: '700',
    color: brandColors.black,
  },
  image: {
    resizeMode: 'contain',
    height: horizontalScale(230),
    width: horizontalScale(230),
    alignSelf: 'center',
  },
  des: {
    // fontFamily: 'SourceSansPro-Regular',
    fontSize: fontScale(13),
    // marginTop: verticalScale(5),
    fontWeight: '400',
    color: brandColors.textColor,
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },
  input: {marginTop: verticalScale(5)},
  divider: {
    alignSelf: 'center',
    height: 2,
    width: '30%',
    backgroundColor: 'rgba(84,66,148,0.1)',
    opacity: 1,
  },
  googleLogin: {
    backgroundColor: brandColors.fillColor,
    padding: horizontalScale(15),
    borderRadius: horizontalScale(10),
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkView: {
    alignItems: 'flex-end',
    paddingHorizontal: horizontalScale(10),
    marginTop: verticalScale(20),
  },
  forgot: {
    padding: 10,
    fontSize: fontScale(15),
    color: brandColors.placeHolder,
    // fontFamily: 'SourceSansPro-Regular',
  },
  buttonView: {
    paddingBottom: verticalScale(20),
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonText: {
    fontSize: fontScale(17),
    color: brandColors.black,
  },
  buttonStyle: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
  },
  account: {
    alignItems: 'center',
    paddingVertical: verticalScale(20),
  },
  bottomText: {
    fontSize: fontScale(15),
    color: brandColors.black,
    // fontFamily: 'SourceSansPro-Regular',
  },
  appleImage: {
    resizeMode: 'contain',
    width: horizontalScale(20),
    height: horizontalScale(20),
    marginRight: horizontalScale(10),
  },
  googleImage: {
    resizeMode: 'contain',
    width: horizontalScale(20),
    height: horizontalScale(20),
    marginRight: horizontalScale(10),
  },
  rightTextBottom: {
    color: brandColors.error,
    fontSize: fontScale(17),
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
});

export default style;
