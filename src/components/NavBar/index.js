import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity, Keyboard, StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
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
    <LinearGradient colors={['#4c669f', '#09096a', '#010151']} style={[styles.mainView, style]}>
      <View style={styles.flexDirection}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
        <TouchableOpacity style={styles.iconStyle} onPress={() => onClick() || navigation.goBack()}>
          <AntDesign
            name="setting"
            size={fontScale(30)}
            color={brandColors.white}
          />
        </TouchableOpacity>
      </View>
      {rightIcon}
    </LinearGradient>
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
    elevation: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  text: {
    fontSize: fontScale(20),
    fontWeight: 'bold',
    color: brandColors.white,
    paddingVertical: verticalScale(10),
    marginLeft: horizontalScale(15)
  },
  flexDirection: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  iconStyle: {
    // backgroundColor: brandColors.fillColor,
    padding: horizontalScale(5),
    borderRadius: horizontalScale(8),
    alignItems: 'center'
  },
});
export default NavBar;
