import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
//style
import styles from './style';

//components
import Button from '../../components/Button';
import BaseScreen from '../../components/BaseScreen';

import {useFocusEffect} from '@react-navigation/native';
//image

//redux
import {useDispatch, useSelector} from 'react-redux';
import NavBar from '../../components/NavBar';
import {brandColors, fontScale} from '../../components/Core/basicStyles';
import TokenManager from '../../utils/TokenManager';
import {
  getDispPlanDataList,
  getDispPlanSO,
} from '../../redux/actions/listAction';

const tableHeadData = [
  'Factory',
  // 'FactoryID',
  'SONo',
  'SrNo',
  // 'SODate',
  'PONo',
  'ProductName',
  'FinishCode',
  'ProductGrade',
  'UoMCode',
  'SOQty',
  'PendingSaleQty',
  'Rate',
  'PendingPlanQty',
  'Client',
  'SiteName',
  'MktPerson',
  // 'MktPersonID',
  'StockQty',
  'LocID',
  'SOID',
  // 'ClientID',
  // 'SiteID',
  // 'ClientGroup',
  // 'ProductID',
  // 'ItemID',
  // 'ProdItemID',
];

const DispatchOrderEntry = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    addressList = {},
    flags: {userDataSuccess},
  } = useSelector(({list}) => list);
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState('');
  const [MktPersons, setMktPersons] = React.useState('');
  const [factories, setFactories] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const [clintInfo, setClintInfo] = useState({});
  const [site, setSite] = useState({});
  const [siteName, setSiteName] = useState({});
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [selectedItem, setSelectedItem] = useState({});

  const getDispPlanList = async () => {
    const UserID = await TokenManager.retrieveToken('UserId');
    dispatch(
      getDispPlanDataList({
        UserID,
      }),
    );
  };
  // useEffect(() => {
  //   getDispPlanList();
  // }, []);
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = getDispPlanList();
      return () => unsubscribe;
    }, []),
  );
  useEffect(() => {
    if (userDataSuccess) {
      return navigation.navigate('DispatchPlanning', {
        factories,
        MktPersons,
        clintInfo,
        site,
        siteName,
        products,
      });
    }
  }, [userDataSuccess]);
  const onReport = () => {
    navigation.navigate('DispatchPlanning', {
      factories,
      MktPersons,
      clintInfo,
      site,
      siteName,
      products,
    });
  };
  const toggleCheckbox = () => setChecked(!checked);
  const onNext = async () => {
    const UserID = await TokenManager.retrieveToken('UserId');
    dispatch(
      getDispPlanSO({
        UserID: UserID,
        SOLocID: selectedItem['16'],
        SOID: selectedItem['17'],
        SOSrNo: selectedItem['2'],
      }),
    );
  };

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
            itemTextStyle={{color: brandColors.black}}
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              addressList?.Factories?.length > 0
                ? addressList?.Factories.map(s => ({
                    label: s._Name,
                    value: s,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={factories}
            onChange={setFactories}
          />
          <Text style={styles.des}>{'Mkt. Person'}</Text>
          <Dropdown
            itemTextStyle={{color: brandColors.black}}
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              addressList?.MktPersons?.length > 0
                ? addressList?.MktPersons.map(s => ({
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
          <Text style={styles.des}>{'Client Grp'}</Text>
          <Dropdown
            itemTextStyle={{color: brandColors.black}}
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              addressList?.ClientGroups?.length > 0
                ? addressList?.ClientGroups.map(s => ({
                    label: s,
                    value: s,
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
            itemTextStyle={{color: brandColors.black}}
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              addressList?.Clients?.length > 0
                ? addressList?.Clients.filter(s =>
                    clintInfo?.value ? s.ClientGroup === clintInfo.value : true,
                  ).map(d => ({
                    label: d.Name,
                    value: d,
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
            itemTextStyle={{color: brandColors.black}}
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
          <Text style={styles.des}>{'Product'}</Text>
          <Dropdown
            itemTextStyle={{color: brandColors.black}}
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={
              addressList?.Products?.length > 0
                ? addressList?.Products.map(s => ({
                    label: s.ProductName,
                    value: s,
                  }))
                : []
            }
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={products}
            onChange={setProducts}
          />
        </View>
        <View style={styles.textWrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal
            nestedScrollEnabled>
            <View style={styles.tableWrapper}>
              <Table
                borderStyle={{borderColor: 'transparent'}}
                style={styles.tableWrapper}>
                <Row
                  data={tableHeadData}
                  style={styles.header}
                  textStyle={styles.textHeader}
                />
                <>
                  <FlatList
                    nestedScrollEnabled
                    data={addressList?.SOList?.filter(
                      i =>
                        (factories?.value
                          ? i?.FactoryID === factories?.value?._ID
                          : true) &&
                        (MktPersons?.value?._ID
                          ? i?.MktPersonID === MktPersons?.value?._ID
                          : true) &&
                        (clintInfo?.value
                          ? i?.ClientGroup === clintInfo?.value
                          : true) &&
                        (site?.value?.ID
                          ? i?.ClientID === site?.value?.ID
                          : true) &&
                        (siteName?.value
                          ? i?.SiteID === siteName?.value
                          : true) &&
                        (siteName?.value?.ID
                          ? i?.ProductID === siteName?.value?.ID
                          : true),
                    )?.map(i => tableHeadData.map(d => i[d] || ''))}
                    renderItem={({item, index}) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedItem({...item, index})}>
                        <TableWrapper
                          key={index}
                          style={[
                            styles.row,
                            selectedItem.index === index && styles.activeItem,
                          ]}>
                          {item.map((cellData, cellIndex) => (
                            <Cell
                              key={cellIndex}
                              data={cellData}
                              textStyle={styles.txtDes}
                              style={styles.cell}
                            />
                          ))}
                        </TableWrapper>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index}
                    style={{marginTop: 10}}
                  />
                </>
              </Table>
            </View>
          </ScrollView>
        </View>

        {/* <View style={styles.dropdownWrapper}>
          <View style={styles.inputWrapper}>
            <Text style={[styles.des]}>{'From'}</Text>
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              placeholder="DD/MM/YYYY"
              onChangeText={setFrom}
              value={from}
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
              onChangeText={setTo}
              value={to}
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
        </View> */}
        <View style={styles.dropdownWrapper}>
          <Button
            disabled={loading}
            onClick={onNext}
            text="Next"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
          <Button
            colors={['#151589', '#09096a', '#010151']}
            disabled={loading}
            onClick={onReport}
            text="Report"
            textStyle={{fontSize: fontScale(17)}}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
          {/* <Button
            colors={['#45e2ea', '#26a4a9', '#097272']}
            disabled={loading}
            // onClick={login}
            text="Full So"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          /> */}
        </View>
        <View style={styles.dropdownWrapper}>
          <Button
            colors={['#e32d2e', '#b32527', '#892020']}
            disabled={loading}
            onClick={() => navigation.replace('Home')}
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
