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

const BasicQuotation = ({navigation}) => {
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
        text={'For Basic Quatation'}
        onClick={() => navigation.navigate('TabScreen')}
      />
      <View style={styles.mainWrapper}>
        <View style={styles.mX}>
          <Text style={styles.des}>{'Quot. No'}</Text>
          <Input placeholder="Quot. No" onChangeText={setPhno} value={phno} />
          <View style={styles.dropdownWrapper}>
            <View>
              <Text style={styles.des}>{'Rev. Date'}</Text>
              <Input
                placeholder="Rev. Date"
                onChangeText={setPhno}
                value={phno}
              />
            </View>
            <View>
              <Text style={styles.des}>{'Org. Date'}</Text>
              <Input
                placeholder="Org. Date"
                onChangeText={setPhno}
                value={phno}
              />
            </View>
          </View>
          <Button
            colors={['#C7CCDB', '#C7CCDB', '#C7CCDB']}
            disabled={loading}
            onClick={login}
            text="Copy Quatation"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.buttonWrapper]}
          />
          <View style={styles.divider} />
          <Text style={styles.des}>{'Mkt. Person'}</Text>
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
          <Text style={styles.des}>{'Client'}</Text>
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
          <Text style={styles.des}>{'Contact'}</Text>
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
          <Text style={styles.des}>{'Site'}</Text>
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
          <Text style={styles.des}>{'Subject'}</Text>
          <Input placeholder="Subject" onChangeText={setPhno} value={phno} />
          <View style={styles.dropdownWrapper}>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'App/Segment'}</Text>
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
              <Text style={styles.des}>{'Architech'}</Text>
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
              <Text style={styles.des}>{'Source'}</Text>
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
              <Text style={styles.des}>{'Location'}</Text>
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
              <Text style={styles.des}>{'Site Ref'}</Text>
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
              <Text style={styles.des}>{'Category'}</Text>
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
          <Text style={styles.des}>{'Rate Type'}</Text>
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
        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={'checkbox-blank-outline'}
          title={'Rate Annexure Required'}
          containerStyle={styles.checkWrapper}
          textStyle={styles.textStyle}
        />
        <View style={styles.dropdownWrapper}>
          <View style={styles.subContainer}>
            <Text style={styles.des}>{'GST'}</Text>
            <Dropdown
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
            <Text style={styles.des}>{'Dispatch From'}</Text>
            <Dropdown
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
        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={'checkbox-blank-outline'}
          title={'Bank Detail Required'}
          containerStyle={styles.checkWrapper}
          textStyle={styles.textStyle}
        />
        <View style={styles.textWrapper}>
          <View style={styles.dropdownWrapper}>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'Max. Qty that \ncan be planned'}</Text>
              <Input
                placeholder="Credit Limit"
                onChangeText={setPhno}
                value={phno}
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'Planned Qty'}</Text>
              <Input placeholder="Rate" onChangeText={setPhno} value={phno} />
            </View>
          </View>
          <View style={styles.dropdownWrapper}>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'Net Bal'}</Text>
              <Input
                placeholder="Credit Limit"
                onChangeText={setPhno}
                value={phno}
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.des}>{'Plan Amt.'}</Text>
              <Input placeholder="Rate" onChangeText={setPhno} value={phno} />
            </View>
          </View>
        </View>

        <View style={styles.dropdownWrapper}>
          <Button
            colors={['#10add1', '#07799a', '#034e6d']}
            disabled={loading}
            onClick={login}
            text="Find"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
          <Button
            colors={['#e32fe7', '#b22bc1', '#672481']}
            disabled={loading}
            onClick={login}
            text="New"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
        </View>
        <View style={styles.dropdownWrapper}>
          <Button
            disabled={loading}
            onClick={login}
            text="Save"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
          <Button
            colors={['#2e60e6', '#2d4cc3', '#282784']}
            disabled={loading}
            onClick={login}
            text="Ord Conform"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
        </View>
        <View style={styles.dropdownWrapper}>
          <Button
            colors={['#d10d3b', '#a0123b', '#7c163b']}
            disabled={loading}
            onClick={() => navigation.navigate('ProductDetails')}
            text="Exit"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
          <Button
            colors={['#e32d2e', '#b32527', '#892020']}
            disabled={loading}
            onClick={login}
            text="Cancel"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
        </View>
      </View>

      <View style={styles.buttonView}></View>
    </BaseScreen>
  );
};

export default BasicQuotation;
