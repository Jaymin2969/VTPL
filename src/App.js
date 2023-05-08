import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";


import { setupHttpConfig } from "./utils/http";
import { store } from "./redux/store";
import { StatusBar } from "react-native";
import { isIOS } from "./components/Core/basicStyles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./SwitchNavigator";
import { enableScreens } from "react-native-screens";
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
    </Provider>
  );
};

export default App;
