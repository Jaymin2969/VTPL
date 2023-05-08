import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

//firebase
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { appleAuth } from '@invertase/react-native-apple-authentication';

//style
import styles from "./style";

//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { showErrorToast } from "../../../utils/Utils";
import BaseScreen from "../../../components/BaseScreen";
import TokenManager from "../../../utils/TokenManager";
import validator from "../../../utils/validation";
import toasty from "../../../utils/Utils";
//image
// import { HandShake } from "../../../utils/images";

import AsyncStorage from "@react-native-async-storage/async-storage";
//redux
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../../components/NavBar";
import { apple, google, loginBG } from "../../../assets/images";
import Divider from "../../../components/Divider";
import { horizontalScale } from "../../../components/Core/basicStyles";
import { isIOS } from "react-native-elements/dist/helpers";
import { register } from "../../../redux/actions/authAction";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const { flags: { registerSuccess } } = useSelector(({ auth }) => auth)
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [phno, setPhno] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    if (registerSuccess) return navigation.navigate("TabScreen");
  }, [registerSuccess])
  const SignUp = () => {
    if (
      (!validator.email.regEx.test(String(email).toLowerCase()) || !email) &&
      !validator.phone.regEx.test(email)
    ) {
      return alert(validator.email.error);
    } else if (!password) {
      return alert(validator.password.error);
    } else if (!name) {
      return alert('Please enter valid user name');
    } else if (phno.length < 10) {
      return alert(validator.phone.error);
    }
    dispatch(register({
      name,
      email: email.trim(),
      mobileNumber: phno,
      role: "user",
      password: password.trim(),
    }));
  };
  async function signInWithPhoneNumber() {
    try {
      setLoading(true)
      // const confirmation = await auth().signInWithPhoneNumber(phno);
      // setConfirm(confirmation);
      // setLoading(false)
      // return navigation.navigate("OTP", { confirmation });
    } catch (error) {
      setLoading(false)
      console.log('error', error)
      alert(error)
      // showErrorToast(error)
    }
  }
  const onAppleButtonPress = async () => {
    // Start the sign-in request
    // const appleAuthRequestResponse = await appleAuth.performRequest({
    //   requestedOperation: appleAuth.Operation.LOGIN,
    //   requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    // });

    // Ensure Apple returned a user identityToken
    // if (!appleAuthRequestResponse.identityToken) {
    //   throw new Error('Apple Sign-In failed - no identify token returned');
    // }

    // Create a Firebase credential from the response
    // const { identityToken, nonce } = appleAuthRequestResponse;
    // const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

    // Sign the user in with the credential
    // return auth().signInWithCredential(appleCredential);
  }

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    // const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  function onPressHandler() {
    navigation.navigate("SignIn");
  }
  return (
    <BaseScreen>
      <NavBar onClick={() => navigation.navigate('TabScreen')} />
      <Image source={loginBG} style={styles.image} />
      <View>
        <View style={styles.viewInner}>
          <Text style={styles.text}>
            {"Create Account"}
          </Text>
          <Text style={styles.des}>{"Please enter your register mobile number."}</Text>
        </View>

        <Input
          placeholder="Enter your name"
          onChangeText={setName}
          value={name}
          leftIconType="user"
        />
        <Input
          placeholder="Enter your email"
          onChangeText={setEmail}
          value={email}
          leftIconType="email"
          style={styles.input}
        />
        <Input
          placeholder="Enter password"
          onChangeText={setPassword}
          value={password}
          leftIconType="password"
          secureTextEntry
          style={styles.input}
        />
        <Input
          placeholder="Enter your Mobile Number"
          onChangeText={setPhno}
          value={phno}
          maxlength={10}
          leftIconType="call"
          style={styles.input}
        />
        <Button
          disabled={loading}
          onClick={SignUp}
          text="Send OTP"
          textStyle={styles.buttonText}
          style={styles.buttonStyle}
        />
        <View style={styles.flexBox}>
          <View style={styles.divider} />
          <Text style={[styles.des, { marginHorizontal: horizontalScale(10) }]}>{"Or Create with"}</Text>
          <View style={styles.divider} />
        </View>
      </View>


      <View style={styles.buttonView}>
        <TouchableOpacity onPress={onGoogleButtonPress} style={styles.googleLogin}>
          <Image source={google} style={styles.googleImage} />
          <Text style={styles.des}>
            {"Continue with Gmail ID"}
          </Text>
        </TouchableOpacity>
        {!!isIOS && <TouchableOpacity onPress={onAppleButtonPress} style={styles.googleLogin}>
          <Image source={apple} style={styles.appleImage} />
          <Text style={styles.des}>
            {"Continue with Apple ID"}
          </Text>
        </TouchableOpacity>}
        <TouchableOpacity onPress={onPressHandler} style={styles.account}>
          <Text style={styles.bottomText}>
            {" Already Have an Account? "}
            <Text style={styles.rightTextBottom}>{"LOGIN"}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </BaseScreen>
  );
};

export default SignUp;
