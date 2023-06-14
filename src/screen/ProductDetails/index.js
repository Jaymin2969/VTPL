import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import {CheckBox} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';

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
import {brandColors, horizontalScale} from '../../components/Core/basicStyles';
import {isIOS} from 'react-native-elements/dist/helpers';
import {loginUser} from '../../redux/actions/authAction';
import TokenManager from '../../utils/TokenManager';

const ProductDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    flags: {loginSuccess},
  } = useSelector(({auth}) => auth);
  const [loading, setLoading] = React.useState(false);
  const [phno, setPhno] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState(true);

  useEffect(() => {
    if (loginSuccess) return navigation.navigate('TabScreen');
  }, [loginSuccess]);

  const login = () => {
    return navigation.navigate('ChangeServer');
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

  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  return (
    <BaseScreen>
      <NavBar
        text={'Product Detail'}
        onClick={() => navigation.navigate('TabScreen')}
      />
      <View style={styles.mainWrapper}>
        <View style={styles.mX}>
          <View style={styles.dropdownWrapper}>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'Group'}</Text>
              <Dropdown
                itemTextStyle={{color: brandColors.black}}
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                searchPlaceholder="Search..."
                value={phno}
                onChange={setPhno}
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'From Loc'}</Text>
              <Dropdown
                itemTextStyle={{color: brandColors.black}}
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                searchPlaceholder="Search..."
                value={phno}
                onChange={setPhno}
              />
            </View>
          </View>
          <Text style={styles.des}>{'Product'}</Text>
          <Dropdown
            itemTextStyle={{color: brandColors.black}}
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={phno}
            onChange={setPhno}
          />
          <Button
            colors={['#C7CCDB', '#C7CCDB', '#C7CCDB']}
            disabled={loading}
            onClick={login}
            text="Select"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.buttonWrapper]}
          />
          <View style={styles.dropdownWrapper}>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'Grade'}</Text>
              <Dropdown
                itemTextStyle={{color: brandColors.black}}
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                searchPlaceholder="Search..."
                value={phno}
                onChange={setPhno}
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'Finish'}</Text>
              <Dropdown
                itemTextStyle={{color: brandColors.black}}
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                searchPlaceholder="Search..."
                value={phno}
                onChange={setPhno}
              />
            </View>
          </View>
          <View style={styles.dropdownWrapper}>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'Qty'}</Text>
              <Input placeholder="Qty" onChangeText={setPhno} value={phno} />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'Finish'}</Text>
              <Dropdown
                itemTextStyle={{color: brandColors.black}}
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                searchPlaceholder="Search..."
                value={phno}
                onChange={setPhno}
              />
            </View>
          </View>
          <Text style={styles.des}>{'Description'}</Text>
          <Input
            placeholder="Description"
            onChangeText={setPhno}
            value={phno}
            multiline
            style={styles.textDescription}
          />
          <Text style={styles.des}>{'Basic Rate including Transport'}</Text>
          <Input
            placeholder="Basic Rate including Transport"
            onChangeText={setPhno}
            value={phno}
          />
          <View style={styles.dropdownWrapper}>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'GST'}</Text>
              <Input placeholder="GST" onChangeText={setPhno} value={phno} />
            </View>
            <Text style={styles.percentageText}>{'%'}</Text>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{''}</Text>
              <Input placeholder="GST" onChangeText={setPhno} value={phno} />
            </View>
          </View>
          <View style={styles.dropdownWrapper}>
            <View style={styles.subBigContainer}>
              <Text style={styles.des}>{'Transport'}</Text>
              <Input
                placeholder="Transport"
                onChangeText={setPhno}
                value={phno}
              />
            </View>
            <View style={styles.subSmallContainer}>
              <Text style={styles.des}>{''}</Text>
              <Input placeholder="GST" onChangeText={setPhno} value={phno} />
            </View>
          </View>
          <View style={styles.dropdownWrapper}>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'Fitting Rate'}</Text>
              <Input
                placeholder="Fitting Rate"
                onChangeText={setPhno}
                value={phno}
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'Landed Cost'}</Text>
              <Input
                placeholder="Landed Cost"
                onChangeText={setPhno}
                value={phno}
              />
            </View>
          </View>
        </View>
        <Button
          colors={['#C7CCDB', '#C7CCDB', '#C7CCDB']}
          disabled={loading}
          onClick={login}
          text="Rev Calc."
          textStyle={styles.buttonText}
          style={[styles.buttonStyle, styles.buttonWrapper, styles.largeButton]}
        />
        <Button
          colors={['#C7CCDB', '#C7CCDB', '#C7CCDB']}
          disabled={loading}
          onClick={login}
          text="Transport Rate Check"
          textStyle={styles.buttonText}
          style={[styles.buttonStyle, styles.buttonWrapper, styles.largeButton]}
        />
        <View style={styles.dropdownWrapper}>
          <Button
            colors={['#10add1', '#07799a', '#034e6d']}
            disabled={loading}
            onClick={() => navigation.navigate('QuotationEntry')}
            text="Ok"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
          <Button
            colors={['#d10d3b', '#a0123b', '#7c163b']}
            disabled={loading}
            onClick={login}
            text="Exit"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
        </View>
      </View>

      <View style={styles.buttonView}></View>
    </BaseScreen>
  );
};

export default ProductDetails;
