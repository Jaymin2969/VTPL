import { StyleSheet } from 'react-native';
import { brandColors, fontScale, horizontalScale, isIOS, verticalScale } from '../../../components/Core/basicStyles';

const style = StyleSheet.create({
  viewInner: {
    marginTop: isIOS ? verticalScale(50) : verticalScale(30),
    paddingHorizontal: horizontalScale(20),
  },
  containerStyle: { flex: 1, backgroundColor: brandColors.white },
  titleText: {
    // fontFamily: 'SFProText-Semibold',
    fontSize: fontScale(22),
    marginTop: verticalScale(10),
    fontWeight: '700',
    color: brandColors.black,
  },
  subTitleText: {
    // fontFamily: 'SFProText-Semibold',
    fontSize: fontScale(18),
    fontWeight: '700',
    color: brandColors.gray,
    textAlign: 'center'
  },
  image: {
    resizeMode: 'contain',
    height: horizontalScale(130),
    width: horizontalScale(130),
  },
  dotStyle: {
    height: horizontalScale(6),
    width: horizontalScale(6),
    borderRadius: horizontalScale(6),
    marginLeft: horizontalScale(5)
  },
  iconStyle: {
    backgroundColor: brandColors.fillColor,
    position: 'absolute',
    top: verticalScale(30),
    padding: horizontalScale(5),
    borderRadius: horizontalScale(8),
    zIndex: 1,
    marginLeft: 10
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
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonText: {
    fontSize: fontScale(17),
  },
  buttonStyle: {
    marginHorizontal: horizontalScale(20),
    backgroundColor: brandColors.black,
    marginBottom: verticalScale(20)
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
