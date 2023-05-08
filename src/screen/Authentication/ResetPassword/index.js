import React, { useEffect, useState } from "react";
import { View } from "react-native";

//style
import styles from "./style";

//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Utils from "../../../utils/Utils";
import BaseScreen from "../../../components/BaseScreen";

//redux
import { useDispatch, useSelector } from "react-redux";

const ResetPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const showPass = (text, setVisible) => () => {
    setVisible(!text);
  };
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [oldPass, SetOldPass] = useState(true);
  const [pass, SetPass] = useState(true);
  const [conPass, SetConPass] = useState(true);

  const OnSave = () => {
    if (!password || !confirmPassword || !oldPassword) {
      // return Utils.showErrorToast("Please fill all fields");
    } else if (password !== confirmPassword) {
      // return Utils.showErrorToast(
      //   "Your password and confirmation password do not match"
      // );
    }
    // dispatch(resetPassword({ oldPassword: oldPassword.trim(), newPassword: password.trim() }));
  };

  const onClickHandler = () => {
    navigation.goBack();
  };

  return (
    <BaseScreen
      leftButtonType={"back-arrow"}
      onLeftPress={onClickHandler}
      title="Reset Password"
      titleStyle={styles.titleStyle}
      styles={styles.container}
    >
      <View style={styles.mainView}>
        <Input
          placeholder="Old Password"
          leftIconType="password"
          onChangeText={setOldPassword}
          value={oldPassword}
          visible={!!oldPassword}
          onClick={showPass(oldPass, SetOldPass)}
          passwordVisible={oldPass}
          secureTextEntry={!!oldPass}
        />

        <Input
          placeholder="Password"
          leftIconType="password"
          onChangeText={setPassword}
          value={password}
          visible={!!password}
          onClick={showPass(pass, SetPass)}
          passwordVisible={pass}
          secureTextEntry={!!pass}
        />
        <Input
          placeholder="Confirm Password"
          leftIconType="password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          visible={!!confirmPassword}
          onClick={showPass(conPass, SetConPass)}
          passwordVisible={conPass}
          secureTextEntry={!!conPass}
        />
        <View style={styles.buttonView}>
          <Button
            onClick={OnSave}
            text="RESET"
            textStyle={styles.buttonText}
            style={styles.buttonStyle}
          />
        </View>
      </View>
    </BaseScreen>
  );
};

export default ResetPassword;
