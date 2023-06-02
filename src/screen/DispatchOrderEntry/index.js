import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {CheckBox} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
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

const tableHeadData = [
  'Site',
  'so.no',
  'Consent Created On',
  'Consent Granted On',
  'Consent Expiry On',
];
const DispatchOrderEntry = ({navigation}) => {
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
        text={'Dispatch Order Entry'}
        onClick={() => navigation.navigate('TabScreen')}
      />
      <View style={styles.mainWrapper}>
        <View style={styles.mX}>
          <Text style={styles.des}>{'Factory'}</Text>
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
          <Text style={styles.des}>{'Mkt. Person'}</Text>
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
          <Text style={styles.des}>{'Client Grp'}</Text>
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
          <Text style={styles.des}>{'Client'}</Text>
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
          <Text style={styles.des}>{'Site'}</Text>
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
          <Text style={styles.des}>{'Product'}</Text>
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
        <View style={styles.textWrapper}>
          <ScrollView showsVerticalScrollIndicator={false} horizontal>
            <Table borderStyle={{borderColor: 'transparent'}}>
              <Row
                data={tableHeadData}
                style={styles.header}
                textStyle={styles.textHeader}
              />
              <ScrollView nestedScrollEnabled>
                {[
                  ['SNS-Glorina industrial Park-Sachin-Surat', '1524'],
                  ['SNS-Glorina industrial Park-Sachin-Surat', '1524'],
                  ['SNS-Glorina industrial Park-Sachin-Surat', '1524'],
                  ['SNS-Glorina industrial Park-Sachin-Surat', '1524'],
                  ['SNS-Glorina industrial Park-Sachin-Surat', '1524'],
                  ['SNS-Glorina industrial Park-Sachin-Surat', '1524'],
                ].map((rowData, index) => (
                  <TableWrapper key={index} style={[styles.row]}>
                    {rowData.map((cellData, cellIndex) => (
                      <Cell
                        key={cellIndex}
                        data={
                          cellIndex === 5
                            ? cellElement(cellData, index)
                            : cellData
                        }
                        textStyle={styles.txtDes}
                        style={styles.cell}
                      />
                    ))}
                  </TableWrapper>
                ))}
              </ScrollView>
            </Table>
          </ScrollView>
        </View>

        <View style={styles.dropdownWrapper}>
          <View style={styles.inputWrapper}>
            <Text style={[styles.des]}>{'From'}</Text>
            <Input
              placeholder=""
              onChangeText={setPhno}
              value={phno}
              style={[styles.dropdown, styles.input]}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={[styles.des]}>{'To'}</Text>
            <Input
              placeholder=""
              onChangeText={setPhno}
              value={phno}
              style={[styles.dropdown, styles.input]}
            />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.dropdownWrapper}>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            title={'Merge Group Client'}
            containerStyle={styles.checkWrapper}
            textStyle={styles.textStyle}
          />
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            title={'Grand Total'}
            containerStyle={styles.checkWrapper}
            textStyle={styles.textStyle}
          />
        </View>
        <View style={styles.dropdownWrapper}>
          <Button
            disabled={loading}
            onClick={login}
            text="Next"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
          <Button
            colors={['#45e2ea', '#26a4a9', '#097272']}
            disabled={loading}
            onClick={login}
            text="Full So"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
        </View>
        <View style={styles.dropdownWrapper}>
          <Button
            colors={['#151589', '#09096a', '#010151']}
            disabled={loading}
            onClick={() => navigation.navigate('DispatchPlanning')}
            text="Report"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
          <Button
            colors={['#e32d2e', '#b32527', '#892020']}
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

export default DispatchOrderEntry;
