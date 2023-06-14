import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import {CheckBox} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';
import {TextInputMask} from 'react-native-masked-text';

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
import {useDebounce} from '../../utils/cutomHook';
import {addLedger, getLedgerList} from '../../redux/actions/listAction';
const dataArray = [
  'Meter',
  '101 Infra',
  '101 Infra-DS',
  '12 Meter Radius',
  'Meter',
  '101 Infra',
  '101 Infra-DS',
  '12 Meter Radius',
];
const Ledger = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    flags: {loginSuccess},
  } = useSelector(({auth}) => auth);
  const {
    flags: {addToCartSuccess},
    errors: {addToCart},
  } = useSelector(({list}) => list);
  const {countryList} = useSelector(({list}) => list);
  const [loading, setLoading] = React.useState(false);
  const [phno, setPhno] = React.useState('');
  const [fromDate, setFromDate] = React.useState('');
  const [toDate, setToDate] = React.useState('');
  const [value, setValue] = useState('');
  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [acGroups, setAcGroups] = useState({});
  const [clients, setClients] = useState({});
  const [clientsArray, setClientsArray] = useState([]);
  const [store, setStore] = useState(dataArray);
  const debouncedValue = useDebounce(value, 1000);

  const getSolist = async () => {
    const UserID = await TokenManager.retrieveToken('UserId');
    dispatch(
      getLedgerList({
        UserID,
      }),
    );
  };
  useEffect(() => {
    if (addToCartSuccess) {
      setLoading(false);
      return navigation.navigate('PDFScreen',{type:'ledger'});
    }
    if (addToCart) {
      setLoading(false);
    }
  }, [addToCartSuccess, addToCart]);

  useEffect(() => {
    getSolist();
  }, []);

  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
    const filterData = dataArray.filter(i =>
      i?.toLocaleLowerCase().includes(value?.toLocaleLowerCase()),
    );
    setStore(filterData);
  }, [debouncedValue]);

  useEffect(() => {
    if (loginSuccess) return navigation.navigate('TabScreen');
  }, [loginSuccess]);

  const login = async () => {
    setLoading(true);
    const UserID = await TokenManager.retrieveToken('UserId');
    const params = {
      ClientID: '8592',
      // UserID,
    };

    if (checked1) params.MergeClients = checked1;
    if (fromDate) params.FromDate = fromDate;
    if (toDate) params.ToDate = toDate;
    if (checked2) params.GrandTotal = checked2;
    dispatch(addLedger(params));
  };

  const toggleCheckbox =
    (item = {}) =>
    () => {
      const isData = clientsArray.find(i => i?.ID === item.ID);
      if (isData) {
        setClientsArray(clientsArray.filter(i => i?.ID !== item.ID));
      } else {
        setClientsArray([...clientsArray, item]);
      }
    };

  return (
    <BaseScreen>
      <NavBar
        text={'Ledger'}
        onClick={() => navigation.navigate('TabScreen')}
      />
      <View style={styles.mainWrapper}>
        <View style={styles.mX}>
          <Text style={styles.des}>{'A/c Group'}</Text>
          <Dropdown
            itemTextStyle={{color: brandColors.black}}
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              countryList?.AcGroups?.length > 0
                ? countryList?.AcGroups.map(s => ({
                    label: s._Name,
                    value: s,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={acGroups}
            onChange={setAcGroups}
          />
          <Text style={styles.des}>{'Clint Group'}</Text>
          <Dropdown
            itemTextStyle={{color: brandColors.black}}
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              countryList?.LedgerGroups?.length > 0
                ? countryList?.LedgerGroups.map(s => ({
                    label: s.GroupName,
                    value: s.Clients,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={clients}
            onChange={setClients}
          />
        </View>
        <View style={styles.textWrapper}>
          <Input
            placeholder="Search"
            onChangeText={setValue}
            value={value}
            leftIconType={'search'}
          />
          <FlatList
            nestedScrollEnabled
            data={clients.value}
            renderItem={({item}) => (
              <CheckBox
                checked={clientsArray.find(i => i?.ID === item.ID)}
                onPress={toggleCheckbox(item)}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                title={item?.Name}
                containerStyle={[
                  styles.checkWrapper,
                  {width: '90%', alignSelf: 'center', marginTop: 0},
                ]}
                textStyle={styles.textStyle}
              />
            )}
            keyExtractor={(item, index) => index}
            style={{marginTop: 10}}
          />
        </View>

        <View style={styles.dropdownWrapper}>
          <View style={styles.inputWrapper}>
            <Text style={[styles.des]}>{'From'}</Text>
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              placeholder="DD/MM/YYYY"
              onChangeText={setFromDate}
              value={fromDate}
              style={[styles.dropdown, styles.input]}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={[styles.des]}>{'To'}</Text>
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              placeholder="DD/MM/YYYY"
              onChangeText={setToDate}
              value={toDate}
              style={[styles.dropdown, styles.input]}
            />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.dropdownWrapper}>
          <CheckBox
            checked={checked1}
            onPress={() => setChecked1(!checked1)}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            title={'Merge Group Client'}
            containerStyle={styles.checkWrapper}
            textStyle={styles.textStyle}
          />
          <CheckBox
            checked={checked2}
            onPress={() => setChecked2(!checked2)}
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
            colors={['#151589', '#09096a', '#010151']}
            disabled={loading}
            onClick={login}
            text="Report"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
          <Button
            colors={['#e32d2e', '#b32527', '#892020']}
            onClick={() => navigation.goBack()}
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

export default Ledger;
