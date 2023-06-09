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
import {getDispPlanDataList} from '../../redux/actions/listAction';

const tableHeadData = [
  'LocID',
  'SOID',
  'SrNo',
  'FactoryID',
  'Factory',
  'SONo',
  'SODate',
  'PONo',
  'ClientID',
  'Client',
  'SiteID',
  'SiteName',
  'ClientGroup',
  'MktPersonID',
  'MktPerson',
  'ProductID',
  'ItemID',
  'ProdItemID',
  'ProductName',
  'FinishCode',
  'ProductGrade',
  'UoMCode',
  'SOQty',
  'PendingSaleQty',
  'StockQty',
  'Rate',
  'PendingPlanQty',
];
const DispatchOrderEntry = ({navigation}) => {
  const dispatch = useDispatch();
  const {addressList = {}} = useSelector(({list}) => list);
  const [loading, setLoading] = React.useState(false);
  const [phno, setPhno] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const [clintInfo, setClintInfo] = useState({});
  const [site, setSite] = useState({});
  const [siteName, setSiteName] = useState({});
  console.log('addressList', addressList.SOList);
  const getDispPlanList = async () => {
    const UserID = await TokenManager.retrieveToken('UserId');
    dispatch(
      getDispPlanDataList({
        UserID: 7600466311,
      }),
    );
  };
  useEffect(() => {
    getDispPlanList();
  }, []);

  const toggleCheckbox = () => setChecked(!checked);
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
            data={
              addressList?.ClientDetails?.length > 0
                ? addressList?.ClientDetails.map(s => ({
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
          <Text style={styles.des}>{'Product'}</Text>
          <Dropdown
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
            value={phno}
            onChange={setPhno}
          />
        </View>
        <View style={styles.textWrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal
            nestedScrollEnabled>
            <View style={styles.tableWrapper}>
              <Table borderStyle={{borderColor: 'transparent'}}>
                <Row
                  data={tableHeadData}
                  style={styles.header}
                  textStyle={styles.textHeader}
                />
                <>
                  <FlatList
                    data={addressList?.SOList?.map(i =>
                      tableHeadData.map(d => i[d] || ''),
                    )}
                    renderItem={({item, index}) => (
                      <TableWrapper key={index} style={[styles.row]}>
                        {item.map((cellData, cellIndex) => (
                          <Cell
                            key={cellIndex}
                            data={cellData}
                            textStyle={styles.txtDes}
                            style={styles.cell}
                          />
                        ))}
                      </TableWrapper>
                    )}
                    keyExtractor={(item, index) => index}
                    style={{marginTop: 10}}
                  />
                </>
              </Table>
            </View>
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
            // onClick={login}
            text="Next"
            textStyle={styles.buttonText}
            style={[styles.buttonStyle, styles.dropdownView]}
          />
          <Button
            colors={['#45e2ea', '#26a4a9', '#097272']}
            disabled={loading}
            // onClick={login}
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
            // onClick={login}
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
