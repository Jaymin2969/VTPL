import React from 'react';
import {
  TouchableOpacity,
  Keyboard,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {
  brandColors,
  fontScale,
  horizontalScale,
  verticalScale,
} from '../Core/basicStyles';
import LinearGradient from 'react-native-linear-gradient';

const index = ({
  onClick,
  colors = ['#0dd058', '#138e22', '#166b06'],
  style,
  textStyle,
  text,
  disabled = false,
  leftIcon,
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.button, style, {opacity: disabled ? 0.7 : 1}]}>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => {
          Keyboard.dismiss();
          onClick && onClick();
        }}>
        {!!leftIcon && leftIcon}
        <Text style={[styles.text, textStyle]}>{text}</Text>
        {!!disabled && <ActivityIndicator color={brandColors.white} />}
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontScale(12),
    fontWeight: '600',
    color: brandColors.whiteColor,
    paddingVertical: verticalScale(10),
    marginRight: horizontalScale(10),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: brandColors.black,
    alignItems: 'center',
    borderRadius: horizontalScale(8),
  },
});
export default index;
