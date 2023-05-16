import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {CheckBox} from 'react-native-elements';

//style
import styles from './style';

//components
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import BaseScreen from '../../../components/BaseScreen';

//image

//redux
import {useDispatch, useSelector} from 'react-redux';
import NavBar from '../../../components/NavBar';
import {apple, google, loginBG} from '../../../assets/images';
import {horizontalScale} from '../../../components/Core/basicStyles';
import {isIOS} from 'react-native-elements/dist/helpers';
import {loginUser} from '../../../redux/actions/authAction';
import TokenManager from '../../../utils/TokenManager';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    flags: {loginSuccess},
  } = useSelector(({auth}) => auth);
  const [loading, setLoading] = React.useState(false);
  const [phno, setPhno] = React.useState('9723165069');
  const [password, setPassword] = React.useState('krishna');
  const [checked, setChecked] = React.useState(true);

  useEffect(() => {
    if (loginSuccess) return navigation.navigate('Home');
  }, [loginSuccess]);

  const login = () => {
    if (phno?.length < 10 || !phno) {
      return alert('Please enter valid phno');
    }
    if (!password) {
      return alert('Please enter valid password');
    }
    dispatch(
      loginUser({
        email: phno,
        password: password,
      }),
    );
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
    const {identityToken, nonce} = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );
    // Sign the user in with the credential
    // return auth().signInWithCredential(appleCredential);
  };
  const signInWithPhoneNumber = async () => {
    try {
      setLoading(true);
      // const confirmation = await auth().signInWithPhoneNumber(phno);
      // setLoading(false)
      // return navigation.navigate("OTP", { confirmation });
    } catch (error) {
      setLoading(false);
      console.log('error', error);
      alert(error);
      // showErrorToast(error)
    }
  };
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
      return navigation.navigate('TabScreen');
    } catch (error) {
      alert(error);
    }
  };

  function onPressHandler() {
    navigation.navigate('SignUp');
  }

  const toggleCheckbox = () => setChecked(!checked);

  return (
    <BaseScreen>
      <NavBar text={'Login'} onClick={() => navigation.navigate('TabScreen')} />
      <View style={styles.mainWrapper}>
        <Text style={styles.des}>{'User name'}</Text>
        <Input placeholder="User name" onChangeText={setPhno} value={phno} />
        <Text style={styles.des}>{'Password'}</Text>
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={'checkbox-blank-outline'}
          title={'Remember me'}
          containerStyle={styles.checkWrapper}
          textStyle={styles.textStyle}
        />
        <Button
          disabled={loading}
          onClick={login}
          text="Login"
          textStyle={styles.buttonText}
          style={styles.buttonStyle}
        />
        <TouchableOpacity onPress={onPressHandler} style={styles.account}>
          <Text style={styles.bottomText}>{'Forgotten Password?'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonView}></View>
    </BaseScreen>
  );
};

export default SignIn;
