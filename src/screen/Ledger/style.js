import {StyleSheet} from 'react-native';
import {
  brandColors,
  fontScale,
  horizontalScale,
  isIOS,
  verticalScale,
} from '../../components/Core/basicStyles';

const style = StyleSheet.create({
  dropdown: {
    width: '90%',
    marginTop: verticalScale(10),
    alignSelf: 'center',
    backgroundColor: brandColors.white,
    height: horizontalScale(45),
    borderRadius: horizontalScale(8),
    shadowOffset: {height: horizontalScale(5), width: horizontalScale(5)},
    shadowOpacity: 0.1,
    shadowRadius: horizontalScale(5),
    borderWidth: 1,
    borderColor: brandColors.activeDot,
    paddingHorizontal: horizontalScale(10),
  },
  inputWrapper: {flexDirection: 'row', alignItems: 'center', width: '50%'},
  input: {width: '65%', marginHorizontal: 0, marginLeft: 10},
  textWrapper: {
    backgroundColor: brandColors.blueLight,
    paddingVertical: verticalScale(20),
    marginTop: verticalScale(20),
    borderTopLeftRadius: horizontalScale(20),
    borderTopRightRadius: horizontalScale(20),
    height: '40%',
  },
  dropdownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(10),
  },
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
  leftSpace: {marginLeft: 10},
  dropdownView: {width: '48%'},
  mainWrapper: {
    paddingTop: verticalScale(20),
    backgroundColor: brandColors.skyLight,
    paddingVertical: verticalScale(200),
  },
  mX: {
    marginHorizontal: horizontalScale(15),
  },
  image: {
    resizeMode: 'contain',
    height: horizontalScale(230),
    width: horizontalScale(230),
    alignSelf: 'center',
  },
  des: {
    // fontFamily: 'SourceSansPro-Regular',
    fontSize: fontScale(15),
    marginTop: verticalScale(10),
    fontWeight: '400',
    color: brandColors.textColor,
    marginLeft: horizontalScale(17),
  },
  textStyle: {
    fontSize: fontScale(15),
    fontWeight: '600',
    color: brandColors.gray,
  },
  checkWrapper: {
    backgroundColor: brandColors.skyLight,
    marginTop: verticalScale(10),
    borderWidth: 0,
    width: '50%',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },
  divider: {
    alignSelf: 'center',
    height: 2,
    width: '95%',
    backgroundColor: 'rgba(84,66,148,0.1)',
    opacity: 1,
    marginTop: verticalScale(10),
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
    color: brandColors.white,
  },
  buttonStyle: {
    // marginHorizontal: horizontalScale(20),
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
  rightTextBottom: {
    color: brandColors.error,
    fontSize: fontScale(17),
    textDecorationLine: 'underline',
    fontWeight: '700',
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
});

export default style;
