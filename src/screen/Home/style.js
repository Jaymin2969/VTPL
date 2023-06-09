import {StyleSheet} from 'react-native';
import {
  brandColors,
  fontScale,
  horizontalScale,
  isIOS,
  verticalScale,
} from '../../components/Core/basicStyles';

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
  mainWrapper: {
    marginTop: verticalScale(20),
  },
  image: {
    resizeMode: 'contain',
    height: horizontalScale(230),
    width: horizontalScale(230),
    alignSelf: 'center',
  },
  tabWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: brandColors.white,
    shadowOffset: {height: horizontalScale(5), width: horizontalScale(5)},
    shadowOpacity: 0.1,
    shadowRadius: horizontalScale(5),
  },
  tab: {
    width: '50%',
    padding: horizontalScale(13),
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#0707071f',
    borderBottomWidth: 3,
  },
  tabText: {
    fontSize: fontScale(15),
    fontWeight: 'bold',
    color: brandColors.black,
  },
  des: {
    // fontFamily: 'SourceSansPro-Regular',
    fontSize: fontScale(17),
    marginTop: verticalScale(10),
    fontWeight: '600',
    color: brandColors.black,
    marginLeft: horizontalScale(17),
    textAlign: 'center',
  },
  textStyle: {
    fontSize: fontScale(15),
    fontWeight: '600',
    color: brandColors.gray,
  },
  checkWrapper: {
    backgroundColor: brandColors.white,
    marginTop: verticalScale(10),
    borderWidth: 0,
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
    fontSize: fontScale(20),
    color: brandColors.white,
    fontWeight: '600',
  },
  buttonStyle: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
    padding: horizontalScale(5),
    alignItems: 'center',
    borderRadius: horizontalScale(10),
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
