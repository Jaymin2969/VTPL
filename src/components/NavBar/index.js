import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity, Keyboard, StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  brandColors,
  fontScale,
  horizontalScale,
  isIOS,
  verticalScale,
} from "../Core/basicStyles";

const NavBar = ({ onClick = () => { }, style, textStyle, text, disabled = false, rightIcon }) => {
  const navigation = useNavigation()
  return (
    <View style={[styles.mainView, style]} >
      <View style={styles.flexDirection}>
        <TouchableOpacity style={styles.iconStyle} onPress={() => onClick() || navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            size={fontScale(30)}
            color={brandColors.black}
          />
        </TouchableOpacity>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
      {rightIcon}
    </View>
  );
};
const statusBarHeight = Platform.select({
  ios: getStatusBarHeight(),
  android: StatusBar.currentHeight,
});
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: brandColors.white,
    paddingTop: statusBarHeight,
    paddingBottom: verticalScale(4),
    paddingHorizontal: horizontalScale(15),
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: horizontalScale(5),
    elevation: 3
  },
  text: {
    fontSize: fontScale(15),
    fontWeight: '600',
    color: brandColors.black,
    paddingVertical: verticalScale(10),
    marginLeft: horizontalScale(15)
  },
  flexDirection: { flexDirection: 'row', alignItems: 'center', },
  iconStyle: {
    backgroundColor: brandColors.fillColor,
    padding: horizontalScale(5),
    borderRadius: horizontalScale(8),
    alignItems: 'center'
  },
});
export default NavBar;
