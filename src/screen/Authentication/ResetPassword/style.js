import { StyleSheet } from 'react-native';
import { brandColors, fontScale, horizontalScale, isIOS, verticalScale } from '../../../components/Core/basicStyles';

const style = StyleSheet.create({
  viewInner: {
    marginTop: isIOS ? verticalScale(50) : verticalScale(30),
    paddingHorizontal: horizontalScale(20),
  },
  text: {
    // fontFamily: 'SFProText-Semibold',
    fontSize: fontScale(22),
    marginVertical: verticalScale(10),
    fontWeight: '200',
  },
  mainView: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: horizontalScale(40),
  },
  image: {
    resizeMode: 'cover',
    height: horizontalScale(28),
    width: horizontalScale(28),
  },
  des: {
    // fontFamily: 'SourceSansPro-Regular',
    fontSize: fontScale(15),
    width: '100%',
    marginVertical: verticalScale(10),
    paddingBottom: verticalScale(10),
    fontWeight: '200',
    color: brandColors.placeHolder,
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
    marginTop: horizontalScale(40),
    justifyContent: 'flex-end',
  },
  buttonText: {
    fontSize: fontScale(17),
  },
  buttonStyle: {
    marginHorizontal: horizontalScale(20),
  },
  account: {
    alignItems: 'center',
    paddingVertical: verticalScale(20),
  },
  bottomText: {
    fontSize: fontScale(15),
    color: brandColors.placeHolder,
    // fontFamily: 'SourceSansPro-Regular',
  },
  rightTextBottom: {
    color: brandColors.textBlackColor,
    fontSize: fontScale(17),
  },
});

export default style;
