import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

const BaseScreen = ({ appNavstyle,
  topbar,
  leftButtonType,
  onLeftPress,
  rightButtonType,
  onRightPress,
  titleStyle,
  iconStyle,
  progressBar,
  question,
  title,
  style,
  topNavId,
  onNavHandler,
  children,
  bounces, }) => {
  return (
    <View style={[styles.container, style]}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.KeyboardAvoidingViewContainerStyle}
        style={styles.KeyboardAvoidingView}
        bounces={bounces}
      >
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default BaseScreen;
