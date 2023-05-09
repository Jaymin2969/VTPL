import { StyleSheet } from 'react-native';
import { verticalScale, horizontalScale, brandColors } from '../Core/basicStyles';
const ICON_SIZE = horizontalScale(20);

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    width: '90%',
    marginTop: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: brandColors.white,
    height: horizontalScale(45),
    borderRadius: horizontalScale(8),
    shadowOffset: { height: horizontalScale(5), width: horizontalScale(5) },
    shadowOpacity: 0.1,
    shadowRadius: horizontalScale(5),
    borderWidth: 1,
    borderColor: brandColors.inputColor
  },
  textInput: {
    flex: 1,
    // fontFamily: 'SFProText-Medium',
    fontWeight: '400',
    lineHeight: horizontalScale(20),
    fontSize: horizontalScale(15),
    paddingRight: horizontalScale(10),
    color: '#000',
    marginLeft: horizontalScale(8),
  },
  iconStyle: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    marginLeft: horizontalScale(15),
    // marginRight: horizontalScale(8),
    lineHeight: horizontalScale(20),
  },
  countryCode: {
    // fontFamily: 'SFProText-Medium',
    fontWeight: '400',
    lineHeight: horizontalScale(20),
    fontSize: horizontalScale(15),
    paddingRight: horizontalScale(4),
    color: brandColors.placeHolder,
    top: horizontalScale(1),
  },
});

export default styles;
