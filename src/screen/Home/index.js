import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View, BackHandler} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

//style
import styles from './style';

//components
import Input from '../../components/Input';
import Button from '../../components/Button';
import BaseScreen from '../../components/BaseScreen';

//image

//redux
import {useDispatch, useSelector} from 'react-redux';
import NavBar from '../../components/NavBar';
import {apple, google, loginBG} from '../../assets/images';
import {horizontalScale} from '../../components/Core/basicStyles';
import {isIOS} from 'react-native-elements/dist/helpers';
import {loginUser} from '../../redux/actions/authAction';
import TokenManager from '../../utils/TokenManager';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    flags: {loginSuccess},
  } = useSelector(({auth}) => auth);
  const [loading, setLoading] = React.useState(false);
  const [phno, setPhno] = React.useState('');
  const [activeTab, setActiveTab] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  // function handleBackButtonClick() {
  //   BackHandler.exitApp();
  // }
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  //   return () => {
  //     BackHandler.removeEventListener(
  //       'hardwareBackPress',
  //       handleBackButtonClick,
  //     );
  //   };
  // }, []);
  // useEffect(() => {
  //   TokenManager.saveToken('6357322775', 'UserId');
  // }, []);

  const login = () => {
    if (phno?.length < 13 || !phno) {
      return alert('Please enter valid phno');
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

  const onTabPress = type => () => {
    if (type) navigation.navigate(type);
    setActiveTab(prv => !prv);
  };

  return (
    <BaseScreen>
      <NavBar text={`Welcome ${'User Name'}`} onClick={toggleCheckbox} />
      <View style={styles.mainWrapper}>
        <Text style={styles.des}>{'Choose your Preference'}</Text>
        {activeTab ? (
          <>
            <LinearGradient
              style={styles.buttonStyle}
              colors={['#e32d2e', '#b32527', '#892020']}>
              <TouchableOpacity onPress={onTabPress()}>
                <Image />
                <Text style={styles.buttonText}> Report</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              style={styles.buttonStyle}
              colors={['#45e2ea', '#26a4a9', '#097272']}>
              <TouchableOpacity onPress={onTabPress('DispatchOrderEntry')}>
                <Image />
                <Text style={styles.buttonText}> Dispatch Plan</Text>
              </TouchableOpacity>
            </LinearGradient>
          </>
        ) : (
          <>
            <LinearGradient
              style={styles.buttonStyle}
              colors={['#e32d2e', '#b32527', '#892020']}>
              <TouchableOpacity onPress={onTabPress('SoStatus')}>
                <Image />
                <Text style={styles.buttonText}> So Status</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              style={styles.buttonStyle}
              colors={['#45e2ea', '#26a4a9', '#097272']}>
              <TouchableOpacity onPress={onTabPress('Ledger')}>
                <Image />
                <Text style={styles.buttonText}> Ledger Report</Text>
              </TouchableOpacity>
            </LinearGradient>
          </>
        )}
        {/* <Button
          disabled={loading}
          onClick={login}
          text={activeTab ? 'Save IP' : 'Submit'}
          textStyle={styles.buttonText}
          style={styles.buttonStyle}
        /> */}
      </View>

      <View style={styles.buttonView}></View>
    </BaseScreen>
  );
};

export default Home;
