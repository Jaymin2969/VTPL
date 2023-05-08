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
import BaseScreen from "../../../components/BaseScreen";
//image
// import { HandShake } from "../../../utils/images";

//redux
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../../components/NavBar";
import { apple, google, loginBG } from "../../../assets/images";
import { horizontalScale } from "../../../components/Core/basicStyles";
import { isIOS } from "react-native-elements/dist/helpers";
import { loginUser } from "../../../redux/actions/authAction";
import TokenManager from "../../../utils/TokenManager";

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const { flags: { loginSuccess } } = useSelector(({ auth }) => auth)
  const [loading, setLoading] = React.useState(false);
  const [phno, setPhno] = React.useState("");
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    if (loginSuccess) return navigation.navigate("TabScreen");
  }, [loginSuccess])


  const login = () => {
    if (phno?.length < 13 || !phno) {
      return alert('Please enter valid phno')
    }
    dispatch(loginUser({
      email: phno,
      password: password
    }))
    // signInWithPhoneNumber()
  };

  const onAppleButtonPress = async () => {
    // Start the sign-in request
    // const appleAuthRequestResponse = await appleAuth.performRequest({
    //   requestedOperation: appleAuth.Operation.LOGIN,
    //   requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    // });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned');
    }

    // Create a Firebase credential from the response
    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
    // Sign the user in with the credential
    // return auth().signInWithCredential(appleCredential);
  }
  const signInWithPhoneNumber = async () => {
    try {
      setLoading(true)
      // const confirmation = await auth().signInWithPhoneNumber(phno);
      // setLoading(false)
      // return navigation.navigate("OTP", { confirmation });
    } catch (error) {
      setLoading(false)
      console.log('error', error)
      alert(error)
      // showErrorToast(error)
    }
  }
  const onGoogleButtonPress = async () => {
    try {
      // Check if your device supports Google Play
      // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // // Get the users ID token
      // const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // // Sign-in the user with the credential
      // const data = await auth().signInWithCredential(googleCredential);
      // const token = await data.user.getIdToken()
      // await TokenManager.saveToken(token)
      return navigation.navigate("TabScreen");
    } catch (error) {
      alert(error)
    }
  }

  function onPressHandler() {
    navigation.navigate("SignUp");
  }
  return (
    <BaseScreen>
      <NavBar onClick={() => navigation.navigate('TabScreen')} />
      <Image source={loginBG} style={styles.image} />
      <View>
        <View style={styles.viewInner}>
          <Text style={styles.text}>
            {"Let’s Login"}
          </Text>
          <Text style={styles.des}>{"Please enter your register mobile number."}</Text>
        </View>

        <Input
          placeholder="Email"
          onChangeText={setPhno}
          value={phno}
          leftIconType="email"
        />
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          leftIconType="password"
          secureTextEntry
        />
        <Button
          disabled={loading}
          onClick={login}
          text="LOGIN"
          textStyle={styles.buttonText}
          style={styles.buttonStyle}
        />
        <View style={styles.flexBox}>
          <View style={styles.divider} />
          <Text style={[styles.des, { marginHorizontal: horizontalScale(10) }]}>{"Or login with"}</Text>
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
            {" Don't have an account? "}
            <Text style={styles.rightTextBottom}>{"Create Account "}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </BaseScreen>
  );
};

export default SignIn;
