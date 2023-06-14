import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
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
import {dispPlan} from '../../redux/actions/listAction';

const tableHeadData = [
  'Date',
  'Org.Plan.Qty.',
  'CurrentYear',
  'Consent Granted On',
  'Consent Expiry On',
];

const DispatchPlanning = ({navigation, route = {}}) => {
  const {
    clintInfo,
    products,
    siteName,
    site: clients,
    MktPersons,
    factories,
  } = route.params;
  // factories,
  const dispatch = useDispatch();
  const {
    flags: {postUserSuccess},
  } = useSelector(({list}) => list);
  const [loading, setLoading] = React.useState(false);
  const [phno, setPhno] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [factory, setFactory] = React.useState('');
  const [clientName, setClientName] = React.useState('');
  const [productName, setProductName] = React.useState('');
  const [credit, setCredit] = React.useState('');
  const [grade, setGrade] = React.useState('');
  const [db, setDb] = React.useState('');
  const [avail, setAvail] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [orderQty, setOrderQty] = React.useState('');
  const [stockOty, setStockOty] = React.useState('');
  const [dispatchQty, setDispatchQty] = React.useState('');
  const [creditLimit, setCreditLimit] = React.useState('');
  const [currBal, setCurrBal] = React.useState('');
  const [maxPlanned, setMaxPlanned] = React.useState('');
  const [plannedQty, setPlannedQty] = React.useState('');
  const [netBal, setNetBal] = React.useState('');

  useEffect(() => {
    if (postUserSuccess) return navigation.navigate('Home');
  }, [postUserSuccess]);

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

  const onSave = async () => {
    const UserID = await TokenManager.retrieveToken('UserId');
    dispatch(
      dispPlan({
        body: {
          DispatchLocID: 14,
          PlanLocID: 181,
          SOID: 23668,
          SOSrNo: 2,
          UoMCode: 'SQMT',
          Rate: +rate,
          ClientID: clients?.value?.ID,
          ClientName: clients?.label,
          SiteID: siteName?.value,
          SiteName: siteName?.label,
          ProductID: products?.value?.ID,
          ProductName: productName,
          MktPersonID: MktPersons?.value?._ID,
          OrdQty: orderQty,
          ClientGroup: clintInfo?.label,
          CreditLimit: +creditLimit,
          BalAmt: avail,
          IsInternal: false,
          ProductType: 0,
          SaleLoc: 'SANAND UNIT',
          PendSaleQty: +dispatchQty,
          StockQty: +stockOty,
          Grade: grade,
          Finish: db,
          MaxPlanQty: maxPlanned,
          PlanID: 0,
          PlanDate: 'May 24 2023',
          PlanType: 'A',
          PlannedQty: +plannedQty,
          SaleQty: 0,
          AddLessQty: 0,
        },
        params: {
          UserID,
        },
      }),
    );
    // navigation.navigate('BasicQuotation')
  };
  return (
    <BaseScreen>
      <NavBar
        text={'Dispatch Planning'}
        onClick={() => navigation.navigate('TabScreen')}
      />
      <View style={styles.mainWrapper}>
        <View style={styles.mX}>
          <Text style={styles.des}>{'Factory'}</Text>
          <Input
            placeholder="Client"
            onChangeText={setFactory}
            value={factory}
          />
          <Text style={styles.des}>{'Site'}</Text>
          <Input
            placeholder="Client"
            onChangeText={setClientName}
            value={clientName}
          />
          <Text style={styles.des}>{'Product'}</Text>
          <Input
            placeholder="Product"
            onChangeText={setProductName}
            value={productName}
          />
          <View style={styles.dropdownWrapper}>
            <View>
              <Text style={styles.des}>{'Credit Limit'}</Text>
              <Input
                placeholder="Credit Limit"
                onChangeText={setCredit}
                value={credit}
              />
            </View>
            <View>
              <Text style={styles.des}>{'Grade'}</Text>
              <Input
                placeholder="Grade"
                onChangeText={setGrade}
                value={grade}
              />
            </View>
          </View>
          <View style={styles.dropdownWrapper}>
            <View>
              <Text style={styles.des}>{'Curr Bal'}</Text>
              <Input
                placeholder="Credit Limit"
                onChangeText={setCurrBal}
                value={currBal}
              />
            </View>
            <View>
              <Text style={styles.des}>{'Db Finish'}</Text>
              <Input placeholder="Grade" onChangeText={setDb} value={db} />
            </View>
          </View>
          <View style={styles.dropdownWrapper}>
            <View>
              <Text style={styles.des}>{'Avail.Bal Limit'}</Text>
              <Input
                placeholder="Credit Limit"
                onChangeText={setAvail}
                value={avail}
              />
            </View>
            <View>
              <Text style={styles.des}>{'Rate'}</Text>
              <Input placeholder="Rate" onChangeText={setRate} value={rate} />
            </View>
          </View>
          <View style={styles.dropdownWrapper}>
            <View>
              <Text style={styles.des}>{'Order Qty'}</Text>
              <Input
                placeholder="Order Qty"
                onChangeText={setOrderQty}
                value={orderQty}
              />
            </View>
            <View>
              <Text style={styles.des}>{'Stock Oty'}</Text>
              <Input
                placeholder="Stock Oty"
                onChangeText={setStockOty}
                value={stockOty}
              />
            </View>
          </View>
          <Text style={styles.des}>{'Pending Dispatch Qty'}</Text>
          <Input
            placeholder="Pending Dispatch Qty"
            onChangeText={setDispatchQty}
            value={dispatchQty}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.headerText}>{'All Quantities in Pcs'}</Text>
          <ScrollView showsVerticalScrollIndicator={false} horizontal>
            <Table borderStyle={{borderColor: 'transparent'}}>
              <Row
                data={tableHeadData}
                style={styles.header}
                textStyle={styles.textHeader}
              />
              <ScrollView nestedScrollEnabled>
                {[
                  ['14-02-2023', '2450.00', '2048.00', '2200.00', '2100.00'],
                  ['14-02-2023', '2450.00', '2048.00', '2200.00', '2100.00'],
                  ['14-02-2023', '2450.00', '2048.00', '2200.00', '2100.00'],
                  ['14-02-2023', '2450.00', '2048.00', '2200.00', '2100.00'],
                  ['14-02-2023', '2450.00', '2048.00', '2200.00', '2100.00'],
                  ['14-02-2023', '2450.00', '2048.00', '2200.00', '2100.00'],
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
        <View style={styles.textWrapper}>
          <View style={styles.dropdownWrapper}>
            <View>
              <Text style={styles.des}>{'Max. Qty that \ncan be planned'}</Text>
              <Input
                placeholder="Credit Limit"
                onChangeText={setMaxPlanned}
                value={maxPlanned}
              />
            </View>
            <View>
              <Text style={styles.des}>{'Planned Qty'}</Text>
              <Input
                placeholder="Rate"
                onChangeText={setPlannedQty}
                value={plannedQty}
              />
            </View>
          </View>
          <View style={styles.dropdownWrapper}>
            <View>
              <Text style={styles.des}>{'Net Bal'}</Text>
              <Input
                placeholder="Credit Limit"
                onChangeText={setNetBal}
                value={netBal}
              />
            </View>
            <View>
              <Text style={styles.des}>{'Plan Amt.'}</Text>
              <Input placeholder="Rate" onChangeText={setPhno} value={phno} />
            </View>
          </View>
        </View>

        <View style={styles.dropdownWrapper}>
          <Button
            disabled={loading}
            onClick={onSave}
            text="Save"
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

export default DispatchPlanning;
