import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch, useSelector } from "react-redux";

//firebase
// import auth from '@react-native-firebase/auth';

import ProcessingWheel from "./components/ProcessingWheel";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { brandColors, horizontalScale } from "./components/Core/basicStyles";
import SetUpAccount from "./screen/Authentication/SetUpAccount";
import ChooseCountry from "./screen/Authentication/ChooseCountry";
import { getIcons } from "./utils/helperFunction";
import ActiveStack from "./ActiveStackNavigator";
import { setupHttpConfig } from "./utils/http";
import TokenManager from "./utils/TokenManager";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./screen/Authentication/Onboarding";
import { IS_PROCESSING_REQUEST } from "./redux/reducers/systemReducer";

const Stack = createStackNavigator();
const AppBottomTab = createBottomTabNavigator();
const AppTabScreen = () => {
  const { cartCount = {} } = useSelector(({ list }) => list)
  return (
    <AppBottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          return <Image source={getIcons(route.name)} style={{ tintColor: color, height: horizontalScale(20), width: horizontalScale(20), resizeMode: 'contain' }} />;
        },
        tabBarActiveTintColor: brandColors.error,
        headerShown: false
      })}
    >
      <AppBottomTab.Screen
        name="Home" component={Onboarding} />
      <AppBottomTab.Screen name="Catering" component={Onboarding} />
      <AppBottomTab.Screen name="Account" component={Onboarding} />
      {/* <AppBottomTab.Screen name="Category" component={Category} /> */}
      <AppBottomTab.Screen name="PhotoShootHome" component={Onboarding}
        options={{
          tabBarLabel: 'Photo Shoot',
        }} />

      <AppBottomTab.Screen name="Bag" component={Onboarding} options={{ tabBarBadge: cartCount?.count || 0 }} />
    </AppBottomTab.Navigator>
  );
};

const getOnBoard = async ({ setIsOnBoard, setLoading }) => {
  const isOnboardIng = await AsyncStorage.getItem('onBoard');
  setIsOnBoard(isOnboardIng)
  setLoading(false)
}

const RootNavigator = ({ isLogin }) => {
  const dispatch = useDispatch()
  const [user, setUser] = useState('')
  const [isOnboard, setIsOnBoard] = useState('')
  const [loading, setLoading] = useState(true)

  const getDataUser = async (data) => {
    const dataToken = await data?.getIdToken()
    setupHttpConfig(dataToken);
    setUser(dataToken)
    return TokenManager.saveToken(dataToken);
  }
  getOnBoard({ setIsOnBoard, setLoading })

  useEffect(() => {
    dispatch({
      type: IS_PROCESSING_REQUEST,
      isProcessing: loading
    })
  }, [loading])

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(getDataUser);
  //   return subscriber; // unsubscribe on unmount
  // }, []);
  // if (loading) return <ProcessingWheel />
  return (
    <React.Fragment>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={isOnboard === 'true' ? 'TabScreen' : 'Onboarding'}
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}
          >
            <Stack.Screen name="TabScreen" component={AppTabScreen} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="ChooseCountry" component={ChooseCountry} />
            <Stack.Screen name="SetUpAccount" component={SetUpAccount} />
            <Stack.Screen name="ActiveStack" component={ActiveStack} />
          </Stack.Navigator>
        </NavigationContainer>
        <ProcessingWheel />
      </SafeAreaProvider>
    </React.Fragment>
  );
};

export default RootNavigator;
