import React from "react";
import { TouchableOpacity, Keyboard, StyleSheet, Text, ActivityIndicator } from "react-native";
import {
  brandColors,
  fontScale,
  horizontalScale,
  verticalScale,
} from "../Core/basicStyles";

const index = ({ onClick, style, textStyle, text, disabled = false, leftIcon }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, style, { opacity: disabled ? 0.7 : 1 }]}
      onPress={() => {
        Keyboard.dismiss();
        onClick && onClick();
      }}
    >
      {!!leftIcon && leftIcon}
      <Text style={[styles.text, textStyle]}>{text}</Text>
      {!!disabled && <ActivityIndicator color={brandColors.white} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontScale(12),
    fontWeight: '600',
    color: brandColors.whiteColor,
    paddingVertical: verticalScale(10),
    marginRight: horizontalScale(10)
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: brandColors.black,
    alignItems: "center",
    borderRadius: horizontalScale(8),
  },
});
export default index;
