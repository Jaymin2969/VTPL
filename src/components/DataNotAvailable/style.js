import { StyleSheet } from 'react-native';
import { fontScale, horizontalScale, brandColors } from '../Core/basicStyles';
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: horizontalScale(20),
  },
  image: {
    height: horizontalScale(240),
    width: horizontalScale(250),
    alignSelf: 'center',
  },
  iconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: horizontalScale(100),
  },
  dividerBottom: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  iconText: {
    paddingHorizontal: horizontalScale(20),
    fontSize: fontScale(17),
    textAlign: 'center',
    // fontFamily: 'SourceSansPro-Regular',
    fontWeight: '300',
    marginTop: horizontalScale(5),
    color: brandColors.placeHolder,
  },
  text: {
    paddingHorizontal: horizontalScale(20),
    fontSize: fontScale(19),
    textAlign: 'center',
    // fontFamily: 'SFProText-Semibold',
    fontWeight: '400',
    marginTop: horizontalScale(10),
    color: brandColors.black,
  },
  testButtonTextStyle: {
    textAlign: 'center',
    fontSize: fontScale(18),
  },
  testButtonStyle: {
    backgroundColor: brandColors.buttonColor,
    marginTop: horizontalScale(20),
    paddingHorizontal: horizontalScale(60),
    height: horizontalScale(45),
    borderRadius: horizontalScale(10),
    shadowOffset: { height: horizontalScale(5), width: horizontalScale(5) },
    shadowOpacity: 0.1,
    shadowRadius: horizontalScale(5),
  },
});

export default styles;
