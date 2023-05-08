import React, { useEffect, useRef, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Onboard from 'react-native-onboarding-swiper';
import AntDesign from "react-native-vector-icons/AntDesign";
//style
import styles from "./style";

//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Utils from "../../../utils/Utils";
import BaseScreen from "../../../components/BaseScreen";
import TokenManager from "../../../utils/TokenManager";
import validator from "../../../utils/validation";
//image
// import { HandShake } from "../../../utils/images";

import AsyncStorage from "@react-native-async-storage/async-storage";
//redux
import { useDispatch, useSelector } from "react-redux";
import { balloonAgency_B2B, birthday, catering, flowers, perfume, photography } from "../../../assets/images";
import { brandColors, fontScale, verticalScale } from "../../../components/Core/basicStyles";
const getOnBoard = async ({ navigation }) => {
  const isOnboardIng = await AsyncStorage.getItem('onBoard');
  if (isOnboardIng) return navigation.navigate('TabScreen')
}

const Onboarding = ({ navigation }) => {
  const dispatch = useDispatch();
  const onboardingRef = useRef(null);
  // getOnBoard({ navigation })
  const showPass = () => {
    SetPass(!pass);
  };
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, SetPass] = useState(true);
  const [deviceToken, setDeviceToken] = useState();

  const onLogin = () => {
    if (
      (!validator.email.regEx.test(String(email).toLowerCase()) || !email) &&
      !validator.phone.regEx.test(email)
    ) {
      // return Utils.showErrorToast(validator.email.error);
    } else if (password?.length < 8 || !password) {
      // return Utils.showErrorToast(validator.password.error);
    }
    // dispatch(login({ username: email.trim(), password: password.trim(), deviceToken: deviceToken }));
  };

  const onNavigate = (type = '') => () => {
    const activePage = onboardingRef.current.state.currentPage
    if (activePage === 5) {
      AsyncStorage.setItem('onBoard', 'true')
      return navigation.replace('TabScreen')
    }
    onboardingRef.current?.goToPage(type ? activePage + 1 : (activePage || 1) - 1, true)
  }
  const Square = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    } else {
      backgroundColor = selected ? brandColors.activeDot : brandColors.inActiveDot;
    }
    return (
      <View
        style={[styles.dotStyle, { backgroundColor }]}
      />
    );
  };

  return (
    <SafeAreaView style={styles.containerStyle}>
      <TouchableOpacity style={styles.iconStyle} onPress={onNavigate()}>
        <AntDesign
          name="arrowleft"
          size={fontScale(30)}
          color={brandColors.black}
        />
      </TouchableOpacity>
      <Onboard
        ref={onboardingRef}
        titleStyles={styles.titleText}
        subTitleStyles={styles.subTitleText}
        onDone={() => console.log('done')}
        bottomBarColor={brandColors.white}
        bottomBarHeightLight={true}
        skipLabel={false}
        showNext={false}
        containerStyles={{ backgroundColor: brandColors.white, paddingBottom: verticalScale(130) }}
        DotComponent={Square}
        pages={[
          {
            image: <Image source={flowers} style={styles.image} />,
            title: 'Flowers',
            subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          },
          {
            image: <Image source={perfume} style={styles.image} />,
            title: 'Perfume',
            subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          },
          {
            image: <Image source={birthday} style={styles.image} />,
            title: 'Birthday',
            subtitle: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          },
          {
            image: <Image source={catering} style={styles.image} />,
            title: 'Catering',
            subtitle: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          },
          {
            image: <Image source={photography} style={styles.image} />,
            title: 'Photography',
            subtitle: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          },
          {
            image: <Image source={balloonAgency_B2B} style={styles.image} />,
            title: 'Balloon Agency-B2B',
            subtitle: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          },
        ]}
      />
      <Button
        onClick={onNavigate('next')}
        text="NEXT"
        textStyle={styles.buttonText}
        style={styles.buttonStyle}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
