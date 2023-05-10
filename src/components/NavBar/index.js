import {useNavigation} from '@react-navigation/core';
import React, {useRef} from 'react';
import {
  TouchableOpacity,
  Keyboard,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalDropdown from 'react-native-modal-dropdown';
import {
  brandColors,
  fontScale,
  horizontalScale,
  isIOS,
  verticalScale,
} from '../Core/basicStyles';

const NavBar = ({
  onClick = () => {},
  style,
  textStyle,
  text,
  disabled = false,
  isSetting = true,
  rightIcon,
}) => {
  const modalRef = useRef();
  const navigation = useNavigation();
  const onPressView = data => {
    modalRef.current?.hide();
  };
  const renderItem = ({name, onPress, title}) => {
    return (
      <TouchableOpacity
        onPress={() => onPress(title)}
        style={styles.itemWrapper}>
        <AntDesign name={name} style={styles.icon} />
        <Text style={[styles.itemText]} children={title} />
      </TouchableOpacity>
    );
  };
  return (
    <LinearGradient
      colors={['#151589', '#09096a', '#010151']}
      style={[styles.mainView, style]}>
      <View style={styles.flexDirection}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
        <ModalDropdown
          ref={modalRef}
          style={styles.dropdownModal}
          options={[
            {
              title: 'Change Server IP',
              name: 'earth',
              onPress: onPressView,
            },
            {
              title: 'Change Password',
              name: 'lock',
              onPress: onPressView,
            },
            {
              title: 'Logout',
              name: 'logout',
              onPress: onPressView,
            },
          ]}
          renderRow={renderItem}>
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() =>
              isSetting
                ? modalRef.current?.show()
                : onClick() || navigation.goBack()
            }>
            <AntDesign
              name="setting"
              size={fontScale(30)}
              color={brandColors.white}
            />
          </TouchableOpacity>
        </ModalDropdown>
      </View>
      {rightIcon}
    </LinearGradient>
  );
};
const statusBarHeight = Platform.select({
  ios: getStatusBarHeight() + verticalScale(20),
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
    shadowOffset: {height: 10, width: 0},
    shadowOpacity: 0.1,
    shadowRadius: horizontalScale(5),
    elevation: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  dropdownModal: {
    alignSelf: 'flex-end',
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: horizontalScale(10),
  },
  itemText: {
    fontSize: fontScale(15),
    marginLeft: horizontalScale(10),
  },

  text: {
    fontSize: fontScale(20),
    fontWeight: 'bold',
    color: brandColors.white,
    paddingVertical: verticalScale(10),
    marginLeft: horizontalScale(15),
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconStyle: {
    // backgroundColor: brandColors.fillColor,
    padding: horizontalScale(5),
    borderRadius: horizontalScale(8),
    alignItems: 'center',
  },
  icon: {
    fontSize: fontScale(18),
    padding: horizontalScale(5),
  },
});
export default NavBar;
