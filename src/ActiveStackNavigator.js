import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "./screen/Authentication/Onboarding";
import OTP from "./screen/Authentication/OTP";
import SignIn from "./screen/Authentication/SignIn";
import SignUp from "./screen/Authentication/SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const ActiveStack = ({ isOnboard }) => {

    return <Stack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: false,
        }}
    >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OTP" component={OTP} />
    </Stack.Navigator>
}

export default ActiveStack