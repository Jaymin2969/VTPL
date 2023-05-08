import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
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
import NavBar from "../../../components/NavBar";
import { apple, google, loginBG } from "../../../assets/images";
import Divider from "../../../components/Divider";
import { horizontalScale } from "../../../components/Core/basicStyles";

const SetUpAccount = ({ navigation }) => {
  const dispatch = useDispatch();

  const showPass = () => {
    SetPass(!pass);
  };
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, SetPass] = useState(true);
  const [deviceToken, setDeviceToken] = useState();

  const onLogin = () => {
    return navigation.navigate("ChooseCountry");
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

  function onPressHandler() {
    navigation.navigate("SignUp");
  }
  return (
    <BaseScreen>
      <NavBar />
      <View>
        <View style={styles.viewInner}>
          <Text style={styles.text}>
            {"Setup Your Account"}
          </Text>
          <Text style={styles.des}>{"Complete your account setup by providing your proper details."}</Text>
        </View>
        <Text style={styles.label}>
          {"Name"}
        </Text>
        <Input
          placeholder="Name"
          onChangeText={setEmail}
          value={email}
        />
        <Text style={styles.label}>
          {"Email"}
        </Text>
        <Input
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
      </View>


      <View style={styles.buttonView}>
        <Button
          onClick={onLogin}
          text="CONITUE"
          textStyle={styles.buttonText}
          style={styles.buttonStyle}
        />
      </View>
    </BaseScreen>
  );
};

export default SetUpAccount;
