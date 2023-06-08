import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

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
import {horizontalScale} from '../../components/Core/basicStyles';
import {isIOS} from 'react-native-elements/dist/helpers';
import {loginUser} from '../../redux/actions/authAction';
import TokenManager from '../../utils/TokenManager';
import {getProductList, getSOStatus} from '../../redux/actions/listAction';

const SoStatus = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    flags: {addAddressSuccess},
  } = useSelector(({auth}) => auth);
  const {
    productList,
    errors: {addAddress},
  } = useSelector(({list}) => list);

  const [loading, setLoading] = React.useState(false);
  const [phno, setPhno] = React.useState('');
  const [status, setStatus] = React.useState({});
  const [fromLocation, setFromLocation] = React.useState({});
  const [forLocation, setForLocation] = React.useState({});
  const [productGroup, setProductGroup] = React.useState({});
  const [clintInfo, setClintInfo] = useState({});
  const [site, setSite] = useState({});
  const [siteName, setSiteName] = useState({});
  const [product, setProduct] = useState({});
  const [MktPersons, setMktPersons] = useState({});
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [EqTypes, setEqTypes] = React.useState({});
  const [unit, setUnit] = React.useState({});
  const [productName, setProductName] = React.useState('');
  const [productContain, setProductContain] = React.useState();

  useEffect(() => {
    if (addAddressSuccess) {
      setLoading(false);
      return navigation.navigate('PDFScreen');
    }
    if (addAddress) {
      setLoading(false);
    }
  }, [addAddressSuccess, addAddress]);

  const getSolist = async () => {
    const UserID = await TokenManager.retrieveToken('UserId');
    dispatch(
      getProductList({
        UserID,
      }),
    );
  };
  useEffect(() => {
    getSolist();
  }, []);
  const params = {};
  const login = async () => {
    setLoading(true);
    const UserID = await TokenManager.retrieveToken('UserId');
    const params = {
      MktID: MktPersons?.value?._ID,
      ClientGroup: clintInfo?.label,
      ClientID: site?.value?.ID,
      SiteID: siteName?.value,
      ProductGroupID: productGroup?.value?.ID,
      ProductID: product?.value?.ID,
      ProductStarts: productName,
      ProductContains: productContain,
      WithStock: checked,
      UoMCode: unit?.value,
      StatusID: status?.value?._ID,
      LocID: fromLocation?.value?._ID || forLocation?.value?._ID,
      EqTypeID: EqTypes?.value,
      ClubLots: checked3,
      ClubOrders: checked1,
      ClubSites: checked2,
      UserID,
    };
    dispatch(getSOStatus(params));
  };

  const toggleCheckbox = () => setChecked(!checked);
  console.log('status', status);
  return (
    <BaseScreen>
      <NavBar
        text={'SO Status'}
        onClick={() => navigation.navigate('TabScreen')}
      />
      <View style={styles.mainWrapper}>
        <View style={styles.mX}>
          <Text style={styles.des}>{'Status'}</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              productList?.SOStatus?.length > 0
                ? productList?.SOStatus.map(s => ({
                    label: s._Name,
                    value: s,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={status}
            onChange={setStatus}
          />
          <View style={styles.dropdownWrapper}>
            <View style={styles.dropdownView}>
              <Text style={[styles.des, styles.leftSpace]}>
                {'From Location'}
              </Text>
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={
                  productList?.ForLocs?.length > 0
                    ? productList?.ForLocs.map(s => ({
                        label: s._Name,
                        value: s,
                      }))
                    : []
                }
                maxHeight={300}
                labelField="label"
                valueField="value"
                searchPlaceholder="Search..."
                value={fromLocation}
                onChange={setFromLocation}
              />
            </View>
            <View style={styles.dropdownView}>
              <Text style={[styles.des, styles.leftSpace]}>
                {'For Location'}
              </Text>
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={
                  productList?.ForLocs?.length > 0
                    ? productList?.ForLocs.map(s => ({
                        label: s._Name,
                        value: s,
                      }))
                    : []
                }
                maxHeight={300}
                labelField="label"
                valueField="value"
                searchPlaceholder="Search..."
                value={forLocation}
                onChange={setForLocation}
              />
            </View>
          </View>
          <Text style={styles.des}>{'Clint. Grp'}</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              productList?.ClientInfo?.length > 0
                ? productList?.ClientInfo.map(s => ({
                    label: s.GroupName,
                    value: s.Clients,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={clintInfo}
            onChange={setClintInfo}
          />
          <Text style={styles.des}>{'Client'}</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              clintInfo?.value?.length > 0
                ? clintInfo?.value.map(s => ({
                    label: s.Name,
                    value: s,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={site}
            onChange={setSite}
          />
          <Text style={styles.des}>{'Site'}</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              site?.value?.Sites.length > 0
                ? site?.value?.Sites.map(s => ({
                    label: s.SiteName,
                    value: s.SiteID,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={siteName}
            onChange={setSiteName}
          />
          {/* <Text style={styles.des}>{'Site'}</Text>
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
          /> */}
          <Text style={styles.des}>{'Mkt.By'}</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              productList?.MktPersons?.length > 0
                ? productList?.MktPersons.map(s => ({
                    label: s._Name,
                    value: s,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={MktPersons}
            onChange={setMktPersons}
          />
          <Text style={styles.des}>{'Group'}</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              productList?.ProductGroups?.length > 0
                ? productList?.ProductGroups.map(s => ({
                    label: s.ProductGroup,
                    value: s,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={productGroup}
            onChange={setProductGroup}
          />
          <Text style={styles.des}>{'Product'}</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              productGroup?.value?.Products?.length > 0
                ? productGroup?.value?.Products.map(s => ({
                    label: s.ProductName,
                    value: s,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={product}
            onChange={setProduct}
          />
          <Text style={styles.des}>{'Eq. Type'}</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              productList?.EqTypes?.length > 0
                ? productList?.EqTypes.map(s => ({
                    label: s._Name,
                    value: s._ID,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={EqTypes}
            onChange={setEqTypes}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.des}>{'Product Name Starts with:'}</Text>
          <Input
            placeholder=""
            onChangeText={setProductName}
            value={productName}
          />
          <Text style={styles.des}>{'Product Name Contain:'}</Text>
          <Input
            placeholder=""
            onChangeText={setProductContain}
            value={productContain}
          />
        </View>
        <View style={styles.dropdownWrapper}>
          <CheckBox
            checked={checked}
            onPress={() => setChecked(!checked)}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            title={'With Stock'}
            containerStyle={styles.checkWrapper}
            textStyle={styles.textStyle}
          />
          <CheckBox
            checked={checked1}
            onPress={() => setChecked1(!checked1)}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            title={'Club Order'}
            containerStyle={styles.checkWrapper}
            textStyle={styles.textStyle}
          />
        </View>
        <View style={styles.dropdownWrapper}>
          <CheckBox
            checked={checked2}
            onPress={() => setChecked2(!checked2)}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            title={'Club Site'}
            containerStyle={styles.checkWrapper}
            textStyle={styles.textStyle}
          />
          <CheckBox
            checked={checked3}
            onPress={() => setChecked3(!checked3)}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            title={'Club Lots'}
            containerStyle={styles.checkWrapper}
            textStyle={styles.textStyle}
          />
        </View>
        <View style={styles.dropdownWrapper}>
          <Text style={[styles.des]}>{'Unit'}</Text>
          <Dropdown
            style={[styles.dropdown, {width: '80%', marginHorizontal: 0}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              productList?.Units?.length > 0
                ? productList?.Units.map(s => ({
                    label: s._Name,
                    value: s._ID,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={unit}
            onChange={setUnit}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.dropdownWrapper}>
          <Button
            colors={['#151589', '#09096a', '#010151']}
            disabled={loading}
            onClick={() => {
              if (!clintInfo) return alert('Please fill all fields!!');
              login();
            }}
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
    </BaseScreen>
  );
};

export default SoStatus;
