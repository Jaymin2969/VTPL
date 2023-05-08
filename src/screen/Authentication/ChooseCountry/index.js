import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
//style
import styles from "./style";

//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Utils from "../../../utils/Utils";
import BaseScreen from "../../../components/BaseScreen";
import TokenManager from "../../../utils/TokenManager";
import validator from "../../../utils/validation";
//image
// import { HandShake } from "../../../utils/images";

import AsyncStorage from "@react-native-async-storage/async-storage";
//redux
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../../components/NavBar";
import { apple, google, loginBG } from "../../../assets/images";
import Divider from "../../../components/Divider";
import { horizontalScale, verticalScale } from "../../../components/Core/basicStyles";
import { cityList } from "../../../utils/contstants";
import { getCountries, getStates } from "../../../redux/actions/listAction";

const ChooseCountry = ({ navigation }) => {
  const dispatch = useDispatch();
  const { flags: { addAddressSuccess }, countryList = [], stateList = [] } = useSelector(({ list }) => list)

  const showPass = () => {
    SetPass(!pass);
  };
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, SetPass] = useState(true);
  const [deviceToken, setDeviceToken] = useState('');

  useEffect(() => {
    dispatch(getCountries())
  }, [])

  const onLogin = (name = '', id = '') => () => {
    const params = JSON.stringify({ name, id })
    AsyncStorage.setItem('city', params)
    return navigation.navigate("TabScreen");
    if (
      (!validator.email.regEx.test(String(email).toLowerCase()) || !email) &&
      !validator.phone.regEx.test(email)
    ) {
      // return Utils.showErrorToast(validator.email.error);
    } else if (password?.length < 8 || !password) {
      // return Utils.showErrorToast(validator.password.error);
    }
    // dispatch(login({ username: email.trim(), password: password.trim(), deviceToken: deviceToken }));
  };

  function onPressHandler() {
    navigation.navigate("SignUp");
  }
  const Item = ({ name, image, id = '' }) => (
    <TouchableOpacity onPress={() => dispatch(getStates(id))} style={styles.item}>
      {/* <Image source={image} style={styles.image} /> */}
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
  const ItemCity = ({ name, image, id = '' }) => (
    <TouchableOpacity onPress={onLogin(name, id)} style={styles.cityItem}>
      {/* <Image source={image} style={styles.cityImage} /> */}
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
  return (
    <BaseScreen>
      <View>
        <NavBar />
        <View style={styles.viewInner}>
          <Text style={styles.text}>
            {"Choose Country"}
          </Text>
          <Text style={styles.des}>{"Which country would you like to send a gift to?"}</Text>
        </View>
        <FlatList
          numColumns={4}
          data={countryList}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={item => item.id}
          style={styles.itemWrapper}
        />
        {!!stateList?.length &&
          <>
            <Text style={[styles.text, styles.citySelector]}>
              {"Choose City for Delivery"}
            </Text>
            <FlatList
              numColumns={4}
              data={stateList}
              renderItem={({ item }) => <ItemCity {...item} />}
              keyExtractor={item => item.id}
              style={styles.itemWrapper}
            />
          </>
        }
      </View>
    </BaseScreen>
  );
};

export default ChooseCountry;
