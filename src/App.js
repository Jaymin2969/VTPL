import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import Toast from 'react-native-toast-message';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { enableScreens } from "react-native-screens";

import { setupHttpConfig } from "./utils/http";
import { store } from "./redux/store";
import { isIOS } from "./components/Core/basicStyles";

import RootNavigator from "./SwitchNavigator";
import TokenManager from "./utils/TokenManager";

enableScreens();

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    getUserApi()
    setupHttpConfig();
    SplashScreen.hide();
  });

  const getUserApi = async () => {
    const token = await TokenManager.retrieveToken()
    setIsLogin(!!token)
  }



  return (
    <Provider store={store}>
      <StatusBar
        hidden
        translucent
        backgroundColor={"#FFF"}
        bar={isIOS ? "dark-content" : "light-content"}
      />
      <SafeAreaProvider>
        <RootNavigator isLogin={isLogin}/>
      </SafeAreaProvider>
      <Toast />
    </Provider>
  );
};

export default App;
