import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import OTPTextInput from "react-native-otp-textinput";

//firebase
// import auth from '@react-native-firebase/auth';
//style
import styles from "./style";

//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";
// import  { showErrorToast } from "../../../utils/Utils";
import BaseScreen from "../../../components/BaseScreen";
import TokenManager from "../../../utils/TokenManager";
import validator from "../../../utils/validation";
//image
// import { HandShake } from "../../../utils/images";

//redux
import { useDispatch } from "react-redux";
import NavBar from "../../../components/NavBar";
import { otp } from "../../../assets/images";
import { brandColors } from "../../../components/Core/basicStyles";
import { postUser } from "../../../redux/actions/listAction";

const OTP = ({ navigation, route: { params } }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, SetPass] = useState(true);
  const [deviceToken, setDeviceToken] = useState();

  async function confirmCode() {
    try {
      setLoading(true)
      await params?.confirmation.confirm(password);
      setLoading(false)
      return navigation.navigate("SetUpAccount")
    } catch (error) {
      alert(error)
      setLoading(false)
      console.log('error', error)
      // showErrorToast(error)
      console.log('Invalid code.');
    }
  }

  const onLogin = () => {
    return navigation.navigate("SetUpAccount");
    if (
      (!validator.email.regEx.test(String(email).toLowerCase()) || !email) &&
      !validator.phone.regEx.test(email)
    ) {
      return Utils.showErrorToast(validator.email.error);
    } else if (password?.length < 8 || !password) {
      return Utils.showErrorToast(validator.password.error);
    }
    // dispatch(login({ username: email.trim(), password: password.trim(), deviceToken: deviceToken }));
  };

  function onPressHandler() {
    navigation.navigate("SignUp");
  }
  return (
    <BaseScreen>
      <NavBar />
      <Image source={otp} style={styles.image} />
      <View>
        <View style={styles.viewInner}>
          <Text style={styles.text}>
            {"OTP Verification"}
          </Text>
          <Text style={styles.des}>{"Check your SMS messages. We’ve sent you the Verification Code (+966) 9890740354"}</Text>
        </View>

        <OTPTextInput handleTextChange={setPassword}
          textInputStyle={styles.textInputStyle}
          containerStyle={styles.containerStyle}
          tintColor={brandColors.error}
          inputCount={6}
        />
        <Button
          onClick={confirmCode}
          text="Verify"
          textStyle={styles.buttonText}
          style={styles.buttonStyle}
        />
        <TouchableOpacity onPress={onPressHandler} style={styles.account}>
          <Text style={styles.bottomText}>
            {" Didn’t you receive any code? "}
            <Text style={styles.rightTextBottom}>{"Re-send Code "}</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>

      </View>
    </BaseScreen>
  );
};

export default OTP;
